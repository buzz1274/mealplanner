import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import {browserHistory} from 'react-router';

export default class Login extends React.Component {

  constructor() {
    super();

    this.state = {
      user: '',
      password: ''
    };

  }

  render() {
    return (
      <div className="form">
        <fieldset>
          <legend>Login</legend>
          <div className="form-group">
            <label className="control-label" for="id_username">
              Username:
            </label>
            <input id="id_username" className="form-control form-large"
                   autocomplete="off" type="text" />
          </div>
          <div className="form-group ">
            <label class="control-label" for="id_password">
              Password:
            </label>
            <input id="id_password" className="form-control form-large"
                   autocomplete="off" type="password" />
          </div>
          <span style={{float: 'right'}} className="pull-right">
            <Button bsStyle="primary"
                    onClick={this.handleLoginClick}>
              Login
            </Button>
          </span>
          <span style={{float: 'left'}} className="pull-left">
            <Button style={{marginRight: '10px'}}
                    onClick={this.handleCancelClick}>
              Cancel
            </Button>
            <Button onClick={this.handleRegisterClick}>
              Register
            </Button>
          </span>
        </fieldset>
      </div>
    );
  }

  handleCancelClick() {
    browserHistory.push('/');
  }

  handleLoginClick() {
    console.log("LOGIN");
  }

  handleRegisterClick() {
    browserHistory.push('/register');
  }

};
