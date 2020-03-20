import { h, Component } from 'preact';

import RequestButton from '@/components/common/RequestButton';

export default class SectionDocument extends Component {
  render() {
    const docId = process.env.DOC_ID;
    return (
      <div>
        <RequestButton url={`documents`} scopes={
          [
            'documents:passport:data:read',
          ]
        }>
          Documents passport
        </RequestButton>
        <RequestButton url={`documents`} scopes={['documents:status:read', 'documents:data:read']}>
          Documents
        </RequestButton>
        <RequestButton url={`documents/${docId}`} scopes={['documents:status:read', 'documents:data:read']}>
          Single Document
        </RequestButton>
        <RequestButton url={`documents/${docId}/front/file`} scopes={['documents:image:read']}>
          Front Document
        </RequestButton>
        <RequestButton url={`documents/${docId}/back/file`} scopes={['documents:image:read']}>
          Back Document
        </RequestButton>
      </div>
    );
  }
}
