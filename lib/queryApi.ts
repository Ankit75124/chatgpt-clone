import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {

    // you can use chat id, to get previous chat data and give a response according to that
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9, // change the no according to your need (0-0.9) higher the no more creative the answer,lower number = more logical answer
      top_p: 1, // manipulate this to get different answers
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `ChatGPT was unable to find ans for this question. Please try again later. Error: ${err.message}`
    );

    return res;
};

export default query;
