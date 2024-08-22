// app.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRoutes = require("./routes/tasks");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb+srv://novacxr:p6eNTq70xGXKAZ5A@unity-backend.frhzuaq.mongodb.net/task-manager";

app.use(cors());
app.use(bodyParser.json());
app.use("/api/tasks", taskRoutes);

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
