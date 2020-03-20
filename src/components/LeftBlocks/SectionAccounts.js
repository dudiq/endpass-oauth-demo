import { h, Component } from 'preact';

import RequestButton from '@/components/common/RequestButton';

export default class SectionAccounts extends Component {
  render() {
    return (
      <div>
        <RequestButton url={`accounts`} scopes={['wallet:accounts:read']}>
          Accounts
        </RequestButton>
        <RequestButton url={`accounts/active`} scopes={['wallet:address:read']}>
          Last active account
        </RequestButton>
      </div>
    );
  }
}
