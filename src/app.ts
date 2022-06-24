import express from "express";
import config from "config";
import db from '../config/db';
require("dotenv").config();
//? Banco


const app = express();
app.use(express.json());


//? Routes
import router from './routes/router';


//? logger
import Logger from '../config/logger'


//? middleware
import morganMiddleware from './middleware/morganMiddleware';

app.use(morganMiddleware);

app.use("/", router)

const port = config.get < number > ('port');

app.listen(port, async () => {
    await db();
    Logger.info(`listening on ${port}`)
})