var express = require("express");

var answer = function(question, req, res) {
    return "<YOUR NAME>";
};

var app = express.createServer();
app.use(express.cookieParser());
app.use(express.session({
    "secret": "<YOUR_SECRET>"
}));

app.get("/", function(req, res) {
    var q = req.param("q");
    var a = answer(q, req, res);
    console.log("Q: \"" + q + "\" A:\"" + a + "\"");
    res.end(a);
});

app.listen(8080, "0.0.0.0");
console.log("Server running on http://0.0.0.0:8080/");

