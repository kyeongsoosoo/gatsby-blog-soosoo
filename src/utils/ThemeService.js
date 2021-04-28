// export default const Theme(insert, dt) {
//   const bodyElement = document.querySelector('body');
//   bodyElement.classList.remove(dt);
//   bodyElement.classList.add(insert);
// }
class Theme {
  constructor() {
    this.bodyElement = document.querySelector('body');
  }

  add(insert) {
    this.bodyElement.classList.add(insert);
  }

  remove(dt) {
    this.bodyElement.classList.remove(dt);
  }
}

export default new Theme();
