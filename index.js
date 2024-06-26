import express from 'express';
import cors from 'cors';
import dotEnv from 'dotenv'
import bodyParser from 'body-parser';
import router from './routes/tasks.js';
import routerHistory from './routes/actionsHistory.js';

dotEnv.config()
const app = express();
const portApi = process.env.API_PORT || 8800
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use("/", router )
app.use("/", routerHistory)

app.listen(portApi)