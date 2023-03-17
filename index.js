const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT || 30000;

app.post('/ask', async (req, res) => {
  // getting prompt question
  const prompt = req.body.prompt;

  try {
    if (prompt == null) {
      throw new Error('Error: there is no prompt provided');
    }
    // return the result
    return res.status(200).json({
      success: true,
      message: prompt,
    });
  } catch (error) {
    console.log('Error: ', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred',
    });
  }
});

app.listen(port, () => console.log(`Server is RUNNING on port ${port}`));
