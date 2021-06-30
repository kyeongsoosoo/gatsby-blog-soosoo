export const getElement = selector => document.querySelector(selector);

export const getBody = () => getElement('body');

export const getDocument = () => getElement('document');

export const getWindow = () => {
    if(typeof window !== "undefined") return window;
}

export const add = (insert) => {
    getBody().classList.add(insert);
    localStorage.setItem('theme', insert);
  }

export const remove = (dt) => {
    getBody().classList.remove(dt);
    localStorage.removeItem('theme');
  }

export const  checkTheme = () => {
    return localStorage.getItem('theme');
  }


export const  getParamList = () => {
    return getWindow().location.pathname.split('/');
  };

export const getTag = () => {
    const list = getParamList();
    return decodeURIComponent(list[1]);
  };

export const makeReload = () => {

    getWindow().location.reload();
  };  