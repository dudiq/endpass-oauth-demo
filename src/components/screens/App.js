import { h, Component } from 'preact';
import Layout from './Layout';
import Resulter from '@/controls/Resulter';
import Connect from '@/controls/Connect';

export default class App extends Component {
  constructor(props) {
    super(props);
    try {
      this.createConnect();
    } catch (e) {
      console.log(e.message);
      console.error(e);
    }
  }

  createConnect() {
    try {
      this.connect = new Connect();
    } catch (e) {
      console.error(e);
    }

    this.resulter = new Resulter(this.connect);
  }

  getChildContext() {
    return {
      resulter: this.resulter,
    }
  }

  render() {
    return (
      <Layout/>
    );
  }
}
