import {h, Component} from 'preact';

import './content.scss';

export default class Content extends Component {

  onForce = () => {
    this.forceUpdate();
  };

  componentWillMount() {
    this.context.resulter.state.onState(this.onForce)
  }

  componentWillUnmount() {
    this.context.resulter.state.offState(this.onForce)
  }

  render() {
    const state = this.context.resulter.getState();
    const {result, isLoading, error} = state;
    console.log('state', state);
    const isHaveResult = !!result;
    return (
      <div className={`${this.props.className} content`}>
        <pre>
          {isLoading && <div>loading...</div>}
          {isHaveResult && JSON.stringify(result || {}, null, '  ')}
          {!error && !isLoading && !isHaveResult && <div>no result</div>}
          {error && <div className="error">{error.message}</div>}
        </pre>
      </div>
    );
  }
}
