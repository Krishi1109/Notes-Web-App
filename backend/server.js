const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");
const userRoutes = require('./Routes/userRoutes')

dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(express.json());

const connectDatabase = require("./db/conn");
connectDatabase();

app.get("/", (req, res) => {
  res.send("Done for the day");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.use('/api/users',userRoutes)

app.listen(port, () => {
  console.log(`Connection is live on port number ${port}`);
});
