const express = require("express");
const router = require("./routes/router");
const fs = require("node:fs");
const cors = require("cors");

// dotenv config
const dotenv = require("dotenv");
dotenv.config();

// init app
const app = express();

// apply middlewares
app.use(express.json());

// CORS middleware
app.use(cors());

// routes
app.use(router);

// running the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
