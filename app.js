const express = require("express");

//import Routes
const RegistrationRouter = require("./routes/usersRouter");

const PORT = 5000;
const app = express();

app.use((req, res, next) => {
  console.log("Request => ", new Date());
  next();
});

app.use("/api/users", RegistrationRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
