const express = require("express");
const dotenv = require("dotenv");
const http = require("http");

//Load env variables
dotenv.config({ path: "./config/config.env" });
const app = express();
app.get("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ sucess: true, msg: "Show all bootcamps" });
});
app.post("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ sucess: true, msg: "Create new bootcamp" });
});
app.put("/api/v1/bootcamps/:id/:name", (req, res) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Upadte bootcamp ${req.params.id} ` });
});
app.delete("/api/v1/bootcamps/:id/:name", (req, res) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Delete bootcamp ${req.params.id} ` });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on ${PORT}`));