const express = require("express");
const bcrypt = require("bcrypt");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  bcrypt.compare(
    "vipul",
    "$2b$10$CnjBm2frgh/kvOr.UapQwOUckVBLQEpPaKeT.wWUG1YNmuLZoNVeq",
    function (err, result) {
      console.log(result);

      // result == true
    }
  );
});

app.listen(port, (req, res) => {
  console.log(`app is running at ${port}`);
});
