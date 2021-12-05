import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import { authRouter, postRouter } from './routes/index.js';
import dotenv from 'dotenv'
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/auth', authRouter);
app.use('/posts', postRouter);

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server connected on Port ${PORT}`)))
    .catch((err) => console.log(err.message));