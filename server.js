require("dotenv").config();
const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const mongoose = require("mongoose");
//
const userRoutes = require("./routes/user");
const bookRoutes = require("./routes/book");

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/book", bookRoutes);

// establishing connection
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Tesla Factory is listening on port ${port}`);
});
