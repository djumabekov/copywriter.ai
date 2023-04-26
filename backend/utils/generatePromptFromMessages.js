const botName = 'AI';
const userName = 'User';

export const generatePromptFromMessages = (messages) => {
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
