const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "resource/views/layouts"), // Thư mục layouts
    partialsDir: path.join(__dirname, "resource/views/partials"),
  })
);

app.set("view engine", "hbs");
const viewsPath = path.join(__dirname, "resource", "views");
app.set("views", viewsPath);
console.log("Views directory:", viewsPath);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
