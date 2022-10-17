const expressJwt = require("express-jwt");

const authJwt = () => {
    const secret = process.env.secret as string;
    const api = process.env.API_URL;
    return expressJwt({
      secret,
      algorithms: ["HS256"],
    }).unless({ 
      path: [
        { url: "/", methods: ["GET"] },
        { url: /\/api\/v1\/products(.*)/, methods: ["GET", "OPTIONS"] },
        `${api}/users/login`,
      ],
    }); 

}

export default authJwt;

