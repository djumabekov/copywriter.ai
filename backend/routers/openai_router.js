import express from 'express';
import cors from 'cors';
import { generatePromptFromMessages } from '../utils/generatePromptFromMessages.js';

import { saveResult, getSavedResults, delFromSavedResults } from '../controllers/ChatController.js';
import { getTemplate, saveTemplate } from '../controllers/TemplateController.js';

import { Configuration, OpenAIApi } from 'openai';
import * as dotenv from 'dotenv';
dotenv.config();

const initialMessages = [
  {
    who: 'user',
    message: 'Привет!',
  },
];

const botName = 'assistant';
const userName = 'user';

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

  // const completion = await openai.createChatCompletion({
  //   model: 'gpt-3.5-turbo',
  //   // prompt: defaultPrompt,
  //   messages: [{ role: `${userName}`, content: `${defaultPrompt}` }],

  //   temperature: 0.7,
  //   max_tokens: 2000,
  //   top_p: 1,
  //   frequency_penalty: 0,
  //   presence_penalty: 0,
  //   stop: [`${botName}:`, `${userName}:`],
  // });
  // console.log(completion.data.choices[0]);

  // res.send(completion.data.choices[0].message.content);
  res.send(`
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `);
});

router.post('/chat/saveresult', saveResult);

router.post('/chat/getsavedresults', getSavedResults);
router.delete('/chat/delfromsavedresults/:id', delFromSavedResults);

router.post('/chat/gettemplate', getTemplate);
router.post('/chat/savetemplate', saveTemplate);

export { router };
