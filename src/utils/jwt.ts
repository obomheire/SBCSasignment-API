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
        `${api}/users/login`,
        `${api}/users/register`,
        // { url: /\/api\/v1\/products(.*)/, methods: ["GET", "OPTIONS"] },
      ],
    }); 

}

export default authJwt;

