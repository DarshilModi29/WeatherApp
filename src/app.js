const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const staticPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname , '../templates/views');
const partialsPath = path.join(__dirname , '../templates/partials');
// console.log(partialsPath);

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)
app.use(express.static(staticPath));


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) => {
    res.render("404error", {
        errMsg : "Oops ! Page not Found"
    });
});

app.listen(8000, () => {
    console.log("http://127.0.0.1:8000");
})