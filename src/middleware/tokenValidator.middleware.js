const dotenv = require('dotenv');
dotenv.config();

const tokenValidator = (req, res, next) => {
  const token = req.headers.authorization;
  if (token === process.env.TOKEN) {
    next();
  }
  else {
    res.status(401).json({
      success: false,
      message: 'Unauthorized'
    });
  }
}

module.exports = tokenValidator;
