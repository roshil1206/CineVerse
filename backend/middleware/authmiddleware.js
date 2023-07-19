const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }
    req.user = decoded;
    next();
  });
};

const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin access only' });
  }
  next();
};

module.exports = {
  verifyToken,
  isAdmin,
};

// const jwt = require("jsonwebtoken");

// function auth(req, res, next) {
//   try {

//     const token = req.headers['authorization'].split('Bearer ')[1] || null;
//     if (!token) {
//       return res.status(401).json({
//         errorMessage: "Unauthorized"
//       });
//     }

//     const jwtVerify = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = jwtVerify.userId;
//     next();

//   } catch (error) {
//     console.log(error)
//     res.status(401).json({
//       errorMessage: "Unauthorized"
//     });
//   }
// }

// module.exports = auth;