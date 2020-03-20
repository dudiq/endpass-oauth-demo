import { h, Component } from 'preact';
import Layout from './Layout';
import store from '@/store';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = store();
  }

  getChildContext() {
    return {
      ...this.store,
    }
  }

  render() {
    return (
      <Layout/>
    );
  }
}
