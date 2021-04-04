const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");

// routes
const books = require("./routes/api/books");
app.use("/api/books", books);
const app = express();

connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello world!"));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
