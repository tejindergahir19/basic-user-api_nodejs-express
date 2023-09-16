// src/app.js
const express = require("express");
const app = express();
const apiRouter = require("./routes/api");
const userRouter = require("./routes/user");

// Middleware to parse JSON
app.use(express.json());

// Use the API routes defined in api.js
app.use("/api", apiRouter);

app.use("/api/user", userRouter);

// Start the server
const port = process.env.PORT || 9090;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
