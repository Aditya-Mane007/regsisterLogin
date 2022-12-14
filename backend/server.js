const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorHandler");
const port = process.env.PORT || 8000;

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// 
// app.use("/api/users", require("./routes/userRoutes"));

// app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
