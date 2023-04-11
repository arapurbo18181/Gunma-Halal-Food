import Cookies from "js-cookie";

const SetCookies = (myCookie, cookie)=> {
    Cookies.set(myCookie, cookie, {
        expires: 365,
        secure: true,
        sameSite: "Strict",
        // domain: "https://gunma.softtech-it.org/",
        path: "/"
    });
};

export default SetCookies;