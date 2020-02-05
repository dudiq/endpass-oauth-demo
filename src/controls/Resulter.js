export default class Resulter {
  constructor(connect) {
    this.cb = [];
    this.connect = connect;
    this.state = {isLoading: false, result: null};
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

  async makeRequest({ url, scopes}) {
    this.setState({
      isLoading: true,
      result: null,
    });

    const { data } = await this.connect.request({
      url,
      method: 'GET',
      scopes,
    });

    this.setState({
      isLoading: false,
      result: data,
    });
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };
    this.cb.forEach(cb => cb(this.state));
  }
}
