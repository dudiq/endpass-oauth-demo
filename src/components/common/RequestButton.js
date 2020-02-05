import { h, Component } from 'preact';

import Button from '@/components/common/Button';

export default class RequestButton extends Component {

  onClick = async () => {
    const { url, scopes } = this.props;
    this.context.resulter.makeRequest({
      url, scopes,
    });
  };

  render() {
    return (
      <Button onClick={this.onClick}>
        {this.props.children}
      </Button>
    );
  }
}
