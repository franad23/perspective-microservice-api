const Perspective = require('perspective-api-client');
const dotenv = require('dotenv');
dotenv.config();

const API_KEY = process.env.API_KEY_PERSPECTIVE;

const perspective = new Perspective({apiKey: API_KEY});

const perspectiveAnalyze = async (req, res) => {
  const { textToAnalyze } = req.body;
  try {
    const result = await perspective.analyze(textToAnalyze);
    res.status(200).json({
      success: true,
      result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error
    });
  }
}

module.exports = perspectiveAnalyze;
