import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { router as openai_router } from './routers/openai_router.js';
import { router as register_router } from './routers/register_router.js';
import { router as login_router } from './routers/login_router.js';
import { router as authme_router } from './routers/authme_router.js';

dotenv.config();

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Не найдена переменная окружения с ключем 'OPENAI_API_KEY'");
}

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', openai_router);
app.use('/', register_router);
app.use('/', login_router);
app.use('/', authme_router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
