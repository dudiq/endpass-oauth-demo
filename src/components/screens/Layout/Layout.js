import { h, Component } from 'preact';
import LeftMenu from './modules/LeftMenu';
import Content from './modules/Content';
import RightBlock from './modules/RightBlock';

import './layout.scss';

export default class App extends Component {
  render() {
    return (
      <div className="layout">
        <LeftMenu className="layout-left-menu"/>
        <Content className="layout-content"/>
        <RightBlock className="layout-right-block"/>
      </div>
    );
  }
}
