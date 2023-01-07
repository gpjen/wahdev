const express = require("express");
const cors = require('cors')
const db = require("./models");

const app = express();

app.use(cors({origin : "*"}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "hello world",
  });
});

// konek db
db.mongoose.set('strictQuery', true)  // hide deprecationWarning
db.mongoose
  .connect(db.url)
  .then(() => {
    console.log("berhasil konek database");
  })
  .catch(() => {
    console.log("gagal konek database");
  });


app.listen(3033, () => {
  console.log("app running on port 3033");
});
