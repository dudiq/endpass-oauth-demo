import State from '@/class/State';

export default class Resulter {
  constructor(connect) {
    this.connect = connect;
    this.state = new State({isLoading: false, result: null});
  }

  async makeRequest({ url, scopes}) {
    this.state.setState({
      error: null,
      isLoading: true,
      result: null,
    });

    try {
      const { data } = await this.connect.request({
        url,
        method: 'GET',
        scopes,
      });
      this.state.setState({
        result: data,
      });
      return data;
    } catch (e) {
      this.state.setState({
        error: e,
      });
    } finally {
      this.state.setState({
        isLoading: false,
      });
    }

  }

  getState() {
    return this.state.getState();
  }
}
