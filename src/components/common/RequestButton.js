import { h, Component } from 'preact';

import Button from '@/components/common/Button';

const ENDPOINT_API = process.env.ENDPOINT_API;

export default class RequestButton extends Component {

  onClick = async () => {
    const { url, scopes } = this.props;
    const data = await this.context.resulter.makeRequest({
      url: `${ENDPOINT_API}/${url}`,
      scopes,
    });

    if (!data || !this.props.onRequest) {
      return;
    }
    this.props.onRequest(data);
  };

  render() {
    return (
      <Button onClick={this.onClick}>
        {this.props.children}
      </Button>
    );
  }
}
