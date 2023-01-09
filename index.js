require('dotenv').config()
const express = require("express");
const cors = require('cors')
const db = require("./models");

const app = express();

app.use(cors({origin : "*"}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res, next) => {

  const data = await db.people.create({
    name: "perkasa1",
    email: "perkasa1@ka.com",
    j_kelamin: "pria",
    umur: 221,
  })
  res.status(200).json({
    message: "hello world",
    data
  });
});

// konek db
db.mongoose.set('strictQuery', true)
db.mongoose.connect(db.url)
.then(() => {
  app.listen(3033, () => {
    console.log("berhasil koneski ke database");
    console.log("app running on port 3033");
  });
})
.catch(err => {
  console.log("gagal koneski ke database");
  console.log("==> ", err.message);
})



