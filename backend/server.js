const cookieParser = require("cookie-parser");
const express = require("express");
const dbconnection = require("./db/connection");
require("dotenv").config();
const userRouter = require("./routes/user.routes");
const captainRouter = require("./routes/captain.routes");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // If using cookies or authentication
  })
);
// app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/users", userRouter);
app.use("/api/captain", captainRouter);

dbconnection()
  .then(() => {
    console.log("database is connneted");
    app.listen(process.env.PORT, () => {
      console.log(`server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
