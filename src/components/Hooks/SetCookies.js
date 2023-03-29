import Cookies from "js-cookie";

const SetCookies = (myCookie, cookie)=> {
    Cookies.set(myCookie, cookie, {
        expires: 365,
        secure: true,
        sameSite: "Strict",
        path: "/"
    });
};

export default SetCookies;