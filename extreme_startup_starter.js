var express = require("express");
var server_port = 8080;

var answer = function(question, req, res) {
    var m = question.match(/what is your name/);
    if (m) {
        return "<YOUR NAME>";
    }
    console.log("Unrecognized question");
    return "";
};

var app = express.createServer();
app.use(express.cookieParser());
app.use(express.session({
    "secret": "<YOUR_SECRET>"
}));

app.get("/", function(req, res) {
    var q = req.param("q");
    console.log("request: \"" + q + "\"");
    res.end(answer(q, req, res));
});

app.listen(server_port, "0.0.0.0");
console.log("Server running on http://0.0.0.0:"+ server_port);

