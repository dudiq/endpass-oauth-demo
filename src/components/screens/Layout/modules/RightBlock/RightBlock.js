import { h, Component } from 'preact';

import './right-block.scss';

export default class RightBlock extends Component {
  onForce = () => {
    this.forceUpdate();
  };

  componentWillMount() {
    this.context.loggedUsers.onUpdated(this.onForce);
  }

  componentDidMount() {
    const button = this.context.connect.createLoginButton({
      element: '#right-block-sign-in',
      onLogin:(error, data) => {
        if (error){
          return;
        }
        this.context.loggedUsers.saveUser(data);
      },
    });
    button.mount();
  }

  componentWillUnmount() {
    this.context.loggedUsers.offUpdated(this.onForce);
  }

  render() {
    const users = this.context.loggedUsers.getUsers();
    return (
      <div className={`${this.props.className} right-block`}>
        <div className="right-block-users">
          {users.map(user => {
            return (
              <div>
                {user.email}
              </div>
            )
          })}
        </div>
        <div className="right-block-sign-in" id="right-block-sign-in">

        </div>
      </div>
    );
  }
}
