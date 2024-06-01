const { valiDateToken } = require("../services/authentication");

function checkForAuthenticationCookie (cookieName){
    return (req,res,next) => {
      const tokenCookievalue = req.cookies[cookieName];
      if(!tokenCookievalue){
        return next();
      }

      try {
        const userPayload = valiDateToken(tokenCookievalue);
        req.user = userPayload;
      } catch (error) {};
      return next();
    }
}

module.exports = {
    checkForAuthenticationCookie,
};