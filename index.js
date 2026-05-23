const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const { sequelize } = require("./models/database");

// sync database
sequelize
  .sync()
  .then(() => console.log("Database synced successfully."))
  .catch((error) => console.error("Error syncing database:", error));

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.send("I am alive"));
app.listen(process.env.PORT, () =>
  console.log(
    ` app listening on port ${process.env.PORT} \n http://localhost:${process.env.PORT}`,
  ),
);

// Student routes
const studentRoutes = require("./routes/student.routes");
app.use("/api/students", studentRoutes);
