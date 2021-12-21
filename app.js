const express = require("express");
const bodyParser = require("body-parser");

//import Routes
const RegistrationRouter = require("./routes/usersRouter");
// Import DAtabase

const db = require("./data/config/database");
db.authenticate()
  .then(() => {
    console.log("database conected... :=)  ");
  })
  .catch((err) => console.log("connection error => ", err));

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("Request => ", new Date());

  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token"
  );

  res.header("Access-Control-Allow-Methods", "DELETE, POST, PUT, GET");
  next();
});

app.use("/api/users", RegistrationRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
