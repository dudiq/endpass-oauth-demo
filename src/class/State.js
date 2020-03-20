export default class State {
  constructor(initial) {
    this.cb = [];
    this.stored = initial;
  }

  onState(cb) {
    this.cb.push(cb);
  }

  offState(cb) {
    const pos = this.cb.indexOf(cb);
    if (pos === -1) {
      return;
    }
    this.cb.splice(pos, 1);
  }

  getState() {
    return this.stored;
  }

  setState(newState) {
    this.stored = {
      ...this.stored,
      ...newState,
    };
    this.cb.forEach(cb => cb(this.stored));
  }
}
