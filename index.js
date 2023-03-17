require('dotenv').config(); // for using .env
const { Configuration, OpenAIApi } = require('openai'); // OpenAI library
const express = require('express'); // express server

const app = express();
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const port = process.env.PORT || 30000;

app.post('/ask', async (req, res) => {
  // getting prompt question
  const prompt = req.body.prompt;

  try {
    if (prompt == null) {
      throw new Error('Uh oh, no prompt was provided');
    }

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
    });
    // check if response choices exists
    if (!response.data.choices || response.data.choices.length === 0) {
      throw new Error('Error: no completion choices returned');
    }

    // get the completion text from response
    const completion = response.data.choices[0].text;

    return res.status(200).json({
      success: true,
      message: completion,
    });
  } catch (error) {
    console.log('Error: ', error);
    return res.status(500).json({
      success: false,
      message: `An error occurred: ${error}`,
    });
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}!!`));

/*
curl -X POST \
  http://localhost:30000/ask \
  -H 'Content-Type: application/json' \
  -d '{
    "prompt": "Say this is a test"
  }'
*/
