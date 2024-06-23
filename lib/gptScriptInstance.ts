import { GPTScript } from "@gptscript-ai/gptscript";
console.log("OpenAI API Key:", process.env.OPENAI_API_KEY);
const g = new GPTScript({
    APIKey: process.env.OPENAI_API_KEY,
    // model: 'gpt-4o',
    model: 'gpt-3.5-turbo',
});

export default g;
