import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import Routes from './routes/Routes.js';


dotenv.config();
const app = express();

const PORT =   process.env.PORT || 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use('/', Routes);