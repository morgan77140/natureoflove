const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "docs"), { extensions: ["html"] }));

app.listen(PORT, () => {
  console.log(`Nature of Love running on port ${PORT}`);
});
