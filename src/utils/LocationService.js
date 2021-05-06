const t = window.location.pathname.split('/');

export default class Location {
  constructor() {
    this.location = window.location;
  }

  getParamList = () => {
    return this.location.pathname.split('/');
  };

  getTag = () => {
    const list = this.getParamList();
    return list[1];
  };
}
