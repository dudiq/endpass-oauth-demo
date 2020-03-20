import { h, Component } from 'preact';

import RequestButton from '@/components/common/RequestButton';

export default class SectionUser extends Component {
  onUserRequest = (data) => {
    this.context.loggedUsers.saveUser(data);
  }

  render() {
    return (
      <div>
        <RequestButton url={`user`} onRequest={this.onUserRequest} scopes={['user:email:read', 'user:phone:read']}>
          User info
        </RequestButton>
        <RequestButton url={`user/address`} scopes={['user:address:read']}>
          User's Address
        </RequestButton>
        <RequestButton url={`user/info/personal`} scopes={['user:data:read']}>
          User's info personal
        </RequestButton>
      </div>
    );
  }
}
