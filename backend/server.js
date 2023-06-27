const express = require("express")
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT ;

const app = express()

app.use(express.json());

const connectDatabase = require("./db/conn");
connectDatabase();

app.listen(port, () => {
    console.log(`Connection is live on port number ${port}`);
  });
  