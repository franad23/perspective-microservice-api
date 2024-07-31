const express = require('express');
const perspectiveAnalyze = require('./controllers/perspective.controller.js');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.post('/analyze', perspectiveAnalyze);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
