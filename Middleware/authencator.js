const jwt = require("jsonwebtoken");
function authencatoer(req, res, next) {
  const token = req.headers.authorization;
    console.log("🚀 ~ file: authencator.js:4 ~ authencatoer ~ token:", token)
    
  jwt.verify(token, "hashimhashim", (err, decoded) => {
   
    if(decoded) {
      res.send("token ok ")
      next();
    }
    // if (decoded) {
    //   req.body.user = decoded.userId;
    //   next();
    // } else {
    //   res.send("invalid token");
    // }
    if (err) {
      res.send(err);
    }
  });
}




module.exports = {
  authencatoer
};