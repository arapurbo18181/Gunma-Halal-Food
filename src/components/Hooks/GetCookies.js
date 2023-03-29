import Cookies from 'js-cookie'

const GetCookies = (name) => {
    return Cookies.get(name);
}

export default GetCookies