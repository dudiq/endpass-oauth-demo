import { h, Component } from 'preact';

import RequestButton from '@/components/common/RequestButton';

export default class LeftMenu extends Component {
  render() {
    const ENDPOINT_API = process.env.ENDPOINT_API;
    const docId = process.env.DOC_ID;
    return (
      <div className={this.props.className}>
        <div>
          <RequestButton url={`${ENDPOINT_API}/user`} scopes={['user:email:read', 'user:phone:read']}>
            User info
          </RequestButton>
          <RequestButton url={`${ENDPOINT_API}/user/address`} scopes={['user:address:read']}>
            User's Address
          </RequestButton>
          <RequestButton url={`${ENDPOINT_API}/user/info/personal`} scopes={['user:data:read']}>
            User's info personal
          </RequestButton>
        </div>
        ---
        <div>
          <RequestButton url={`${ENDPOINT_API}/accounts`} scopes={['wallet:accounts:read']}>
            Accounts
          </RequestButton>
          <RequestButton url={`${ENDPOINT_API}/accounts/active`} scopes={['wallet:address:read']}>
            Last active account
          </RequestButton>
        </div>
        ---
        <div>
          <RequestButton url={`${ENDPOINT_API}/documents`} scopes={['documents:status:read', 'documents:data:read']}>
            Documents
          </RequestButton>
          <RequestButton url={`${ENDPOINT_API}/documents/${docId}`} scopes={['documents:status:read', 'documents:data:read']}>
            Single Document
          </RequestButton>
          <RequestButton url={`${ENDPOINT_API}/documents/${docId}/front/file`} scopes={['documents:image:read']}>
            Front Document
          </RequestButton>
          <RequestButton url={`${ENDPOINT_API}/documents/${docId}/back/file`} scopes={[]}>
            Back Document
          </RequestButton>
        </div>
        ---
        <div>
          <RequestButton url={`${ENDPOINT_API}/scopes`}>
            Scopes
          </RequestButton>
        </div>
        ---
        <div>
          <RequestButton url={`${ENDPOINT_API}/bad`} scopes={['user:email:read']}>
            BAD url
          </RequestButton>
          <RequestButton url={`${ENDPOINT_API}/accounts/active`} scopes={[]}>
            Empty scopes
          </RequestButton>
        </div>
      </div>
    );
  }
}
