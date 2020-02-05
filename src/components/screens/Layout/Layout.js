import { h, Component } from 'preact';
import LeftMenu from '@/components/common/LeftMenu';
import Content from '@/components/common/Content';

import './layout.scss';

export default class App extends Component {
  render() {
    return (
      <div className="layout">
        <LeftMenu className="left-menu"/>
        <Content className="content"/>
      </div>
    );
  }
}
