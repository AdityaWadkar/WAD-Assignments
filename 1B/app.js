const express = require("express")
app = express();

app.use(express.json());

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

var data = {
    firstName: "",
    lastName:"",
    age:"",
    college:""
}

app.get("/", (req, res) => {
    res.status(200).json(data);
})

app.post("/", (req, res) => {
    const userData = req.body
    data = userData;

    //console.log(data)
    res.status(200).json(data);
});

app.listen(3000, () => {
    console.log("http://localhost:3000")
});