const express = require("express");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

async function getData() {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: " https://api.ebird.org/v2/data/obs/CA-QC/recent?maxResults=20",
    headers: {
      "X-eBirdApiToken": "8l2m2jfka6qm",
    },
  };

  try {
    const response = await axios(config);
    const data = response.data;
    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => err);
  } catch (error) {
    console.error(error);
  }
}

// getData();
app.listen(8081, () => console.log("server running..."));
