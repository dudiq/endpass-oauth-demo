import { h, Component } from 'preact';

import RequestButton from '@/components/common/RequestButton';

export default class SectionScopes extends Component {
  render() {
    return (
      <div>
        <RequestButton url={`scopes`}>
          Scopes
        </RequestButton>
      </div>
    );
  }
}
