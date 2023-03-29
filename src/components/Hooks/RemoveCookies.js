import Cookies from 'js-cookie'

const RemoveCookies = (name) => {
    Cookies.remove(name);
}

export default RemoveCookies;