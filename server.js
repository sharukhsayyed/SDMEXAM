var express = require("express");
var app = express();

app.use(express.static('/'));

app.get("/", (req, res) => {
    res.send("/index.html");
});


app.listen(8000);
console.log("Server is running");    