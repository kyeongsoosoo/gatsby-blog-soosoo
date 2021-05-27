export default class Location {
  constructor() {
    this.location = window.location;
  }

  getParamList = () => {
    return this.location.pathname.split('/');
  };

  getTag = () => {
    const list = this.getParamList();
    return decodeURIComponent(list[1]);
  };

  makeReload = () => {
    this.location.reload();
  };
}
