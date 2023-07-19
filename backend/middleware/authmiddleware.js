const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  try {

    const token = req.headers['authorization'].split('Bearer ')[1] || null;
    if (!token) {
      return res.status(401).json({
        errorMessage: "Unauthorized"
      });
    }

    const jwtVerify = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = jwtVerify.userId;
    next();

  } catch (error) {
    console.log(error)
    res.status(401).json({
      errorMessage: "Unauthorized"
    });
  }
}

module.exports = auth;