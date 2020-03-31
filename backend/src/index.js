const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
require("dotenv/config");

const routes = require("./routes");

const app = express();
const server = http.Server(app);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-bfkrt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta: ${process.env.PORT}`);
});