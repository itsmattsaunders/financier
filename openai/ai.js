import { config } from 'dotenv';
config();

import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.API });

const processRequest = async (str) => {
  if(typeof str !== 'string' || !str.trim() || !str) {
    console.error("Please provide a valid string.")
    throw new Error("Please provide a valid string.");
  }

  try {
    const completion = await openai.chat.completions.create({
        messages: [
            { "role": "system", "content": "You are a helpful financial assistant. Your job is to give financial advice based on data provided." },
            { "role": "user", "content": str }],
            model: "ft:gpt-3.5-turbo-1106:personal::8bf8qMTj",
        });
    
      return completion;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while processing your request: ", error);
  }
}

const handleResult = async (str) => {
    try {
        const result = await processRequest(str);
        return result?.choices[0].message.content;
    } catch (error) {
        console.error("Error handling result: ", error)
    }
}

export { handleResult, processRequest };