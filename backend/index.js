import cors from 'cors';
import express from 'express';
import { Configuration, OpenAIApi } from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const botName = 'AI';
const userName = 'User';

const generatePromptFromMessages = (messages) => {
  let prompt = '';
  prompt += messages[1].message;
  const messagesWithoutFirstConvo = messages.slice(2);

  if (messagesWithoutFirstConvo.length == 0) {
    return prompt;
  }

  messagesWithoutFirstConvo.forEach((message) => {
    const name = message.who === 'user' ? userName : botName;
    prompt += `\n${name}: ${message.message}`;
  });
  if (prompt.length > 2000) {
    prompt = prompt.substring(prompt.length - 2000, prompt.length);
  }
  return prompt;
};

const initialMessages = [
  {
    who: 'user',
    message: 'Привет!',
  },
];

app.post('/chat', async (req, res) => {
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

app.get('/', (req, res) => {
  console.log(req);
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
