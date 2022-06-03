const express = require("express");
const app = express();
const port = 3001;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   next();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/listajugadores", async (req, res) => {
  try {
    res.status(200).json([
      {
        id: "1",
        nombre: "Ale Negri",
        acum: 7,
      },
      {
        id: "2",
        nombre: "Maxi Ceballos",
        acum: 12,
      },
      {
        id: "3",
        nombre: "Ramiro Cámara",
        acum: 4,
      },
      {
        id: "4",
        nombre: "Nico Chervo",
        acum: 10,
      },
    ]);
  } catch (e) {
    res.status(413).send("Error al leer las categorias: " + e);
  }
});