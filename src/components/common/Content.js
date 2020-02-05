import {h, Component} from 'preact';

export default class Content extends Component {

  onForce = () => {
    this.forceUpdate();
  };

  componentWillMount() {
    this.context.resulter.onState(this.onForce)
  }

  componentWillUnmount() {
    this.context.resulter.offState(this.onForce)
  }

  render() {
    const {result, isLoading} = this.context.resulter.getState();
    console.log('result', result);
    const isHaveResult = !!result;
    return (
      <div className={this.props.className}>
        <pre>
          {isLoading && <div>loading...</div>}
          {isHaveResult && JSON.stringify(result || {}, null, '  ')}
          {!isLoading && !isHaveResult && <div>no result</div>}
        </pre>
      </div>
    );
  }
}
