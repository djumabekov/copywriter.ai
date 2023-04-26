import express from 'express';
import cors from 'cors';
import { generatePromptFromMessages } from '../utils/generatePromptFromMessages.js';
import { Configuration, OpenAIApi } from 'openai';
import * as dotenv from 'dotenv';
dotenv.config();

const initialMessages = [
  {
    who: 'user',
    message: 'Привет!',
  },
];

const botName = 'AI';
const userName = 'User';

const router = express.Router();
router.use(express.json());
router.use(cors());

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

router.post('/chat', async (req, res) => {
  const { newMessages } = req.body;
  const messagesPrompt = generatePromptFromMessages(newMessages);
  const defaultPrompt = `${botName}: ${initialMessages[0].message}\n${userName}: ${messagesPrompt}\n${botName}: `;
  console.log('prompt ', newMessages);

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: defaultPrompt,
    temperature: 0.7,
    max_tokens: 2000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: [`${botName}:`, `${userName}:`],
  });
  res.send(completion.data.choices[0].text);
});

export { router };
