import LocalStorage from '@/class/LocalStorage';

const USERS = 'users';

export default class LoggedUsers {
  constructor() {
    this.cb = [];
    this.storage = new LocalStorage('users');
  }

  onUpdated(cb) {
    this.cb.push(cb);
  }

  offUpdated(cb) {
    const pos = this.cb.indexOf(cb);
    if (pos !== -1) {
      this.cb.splice(pos, 1);
    }
  }

  saveUser({ email, id }) {
    const users = this.getUsers();
    if (users.find(user => user.id === id)) {
      return;
    }

    users.push({
      email, id
    });

    const data = JSON.stringify({
      value: users,
    });

    this.storage.set(USERS, data);

    this.cb.forEach(cb => cb());
  }

  getUsers() {
    const strData = this.storage.get(USERS);
    let users = [];
    try {
      const data = JSON.parse(strData);
      if (data && data.value) {
        users = data.value;
      }
    } catch (e) {
      console.log(e);
    }
    return users;
  }
}
