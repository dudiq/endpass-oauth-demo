export default class LocalStorage {
  constructor({ prefix = 'eod' }) {
    this.prefix = prefix;
  }

  getStoreKey(key) {
    return `${this.prefix}-${key}`;
  }

  set(key, value) {
    window.localStorage.setItem(this.getStoreKey(key), value);
  }

  get(key) {
    return window.localStorage.getItem(this.getStoreKey(key));
  }
}
