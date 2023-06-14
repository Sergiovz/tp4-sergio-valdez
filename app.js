const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
require("dotenv").config();
const port = process.env.port;


app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(require("./routers/router"))

app.listen(4000, () => {
    console.log('Servidor activo');
})
