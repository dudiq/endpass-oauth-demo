import { h, Component } from 'preact';

import SectionUser from '@/components/LeftBlocks/SectionUser';
import SectionAccounts from '@/components/LeftBlocks/SectionAccounts';
import SectionDocument from '@/components/LeftBlocks/SectionDocuments';
import SectionScopes from '@/components/LeftBlocks/SectionScopes';
import SectionBad from '@/components/LeftBlocks/SectionBad';

export default class LeftMenu extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <SectionUser/>
        ---
        <SectionAccounts/>
        ---
        <SectionDocument/>
        ---
        <SectionScopes/>
        ---
        <SectionBad/>
      </div>
    );
  }
}
