import ChatModel from '../models/Chat.js';
import UserModel from '../models/User.js';

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

const botName = 'assistant';
const userName = 'user';

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export const getOpenAiResult = async (req, res) => {
  try {
    const { newMessages } = req.body;
    const messagesPrompt = generatePromptFromMessages(newMessages);
    const defaultPrompt = `${botName}: ${initialMessages[0].message}\n${userName}: ${messagesPrompt}\n${botName}: `;
    console.log('prompt ', newMessages);

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      // prompt: defaultPrompt,
      messages: [{ role: `${userName}`, content: `${defaultPrompt}` }],

      temperature: 0.7,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: [`${botName}:`, `${userName}:`],
    });
    console.log(completion.data.choices[0]);

    res.status(200).send(completion.data.choices[0].message.content);
    //   res.status(200).send(`
    //   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    //   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    // `);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить результат',
    });
  }
};

export const saveResult = async (req, res) => {
  try {
    const chat = new ChatModel({
      response: req.body.response,
      category: req.body.category,
      type: req.body.type,
    });

    const user = await UserModel.findById(req.body.userId);

    chat.userId = user._id;
    const result = await chat.save();

    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось сохранить результат',
    });
  }
};

export const getSavedResults = async (req, res) => {
  try {
    const result = await ChatModel.find({
      userId: req.body.userId,
      category: req.body.category,
      type: req.body.type,
    });

    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить результат',
    });
  }
};

export const delFromSavedResults = async (req, res) => {
  try {
    console.log(req.params.id);
    const result = await ChatModel.deleteOne({ _id: req.params.id });
    console.log('result', result);
    res.json(result.deletedCount);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось удалить пост',
    });
  }
};
