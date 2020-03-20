import { h, Component } from 'preact';

import RequestButton from '@/components/common/RequestButton';

export default class SectionBad extends Component {
  render() {
    return (
        <div>
        <RequestButton url={`bad`} scopes={['user:email:read']}>
          BAD url
        </RequestButton>
        <RequestButton url={`accounts/active`} scopes={[]}>
          Empty scopes
        </RequestButton>
      </div>
    );
  }
}
