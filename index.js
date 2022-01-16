require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
mongoose.connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());

//Define Route
require("./routes/itemRoute")(app);

//PRODUCTION SET UP
if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "ci") {
    //If route do not match express round, try to match it with React Router
    app.use(express.static("client/build"));
    const path = require("path");

    //If route is not defined, send back HTML file
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});
