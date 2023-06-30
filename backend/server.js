const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")
const notes = require("./data/notes");
const userRoutes = require('./Routes/userRoutes')

dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(express.json());

const connectDatabase = require("./db/conn");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
connectDatabase();

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, 
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Done for the day");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.use('/api/users',userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Connection is live on port number ${port}`);
});
