const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
const Jugadores = require("./schemas/JugadorSchema");

require("dotenv").config()



//mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.connect(
  "mongodb+srv://alezeker:Tplinkmongo@cluster0.lghqdji.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);


/*async function run() {
  const user = await Jugadores.create({
    nombre: "Pedro",
    acumulado: 5
  })
  console.log(user);
}*/

/*app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});*/

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/listajugadores", async (req, res) => {
 res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "X-Requested-With");
 const jugadores = await Jugadores.find({});
 res.status(200).json(jugadores);
 /* try {
    const jugadores = await Jugadores.find({});
    res.status(200).json(jugadores);
  } catch (e) {
    console.log(e.message);
  }*/
});

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
