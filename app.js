const express = require("express");
const app = express();
const path = require("path");

app.listen(3000, () => console.log("Servidor corriendo en: http://localhost:3000"));

app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
});