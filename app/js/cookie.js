import API from './api.js';

class Cookie {
  static setCookie(name, value) {
    document.cookie = `${name}=${value}`;
  }

  static getCookie(name) {
    const cookies = `; ${document.cookie}`;
    const aux = cookies.split(`; ${name}=`);
    if (aux.length > 1) {
      return aux.pop().split(';').shift();
    }
    return undefined;
  }

  static deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }

  static saveCookies({ hash, user, type }) {
    this.setCookie('session', hash);
    this.setCookie('user', user);
    this.setCookie('type', type);
  }

  static clearCookies() {
    this.deleteCookie('session');
    this.deleteCookie('user');
    this.deleteCookie('type');
  }

  static async login({ email, password }) {
    const hash = this.getCookie('session');
    const response = await API.login(JSON.stringify({
      email, password,
    }), hash);

    if (response.status >= 200 && response.status < 300) {
      this.saveCookies(response.data);
      window.location.pathname = './profile.html';
      return true;
    }

    return false;
  }

  static async logout() {
    const hash = this.getCookie('session');
    console.log(hash);
    if (hash) {
      await API.logout(hash);
      this.clearCookies();
      window.location.pathname = './index.html';
    }
  }
}

export default Cookie;
