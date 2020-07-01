import React, { Component } from "react";
import User from "./Components/User.js";
import { Button } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';


class Userslist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "Users List",
      showUsers: true,
      users: [],
      newLogin: null,
    };
  }

  async componentDidMount() {
    const url = "https://api.github.com/users";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ users: data });
  }

  onChangeName(index) {
    if (!this.state.newLogin || this.state.newLogin === " ") {
      return;
    } else {
      const user = this.state.users[index];
      const newLogin = this.state.newLogin;
      user.login = newLogin;
      const users = [...this.state.users];
      users[index] = user;
      this.setState({ users });
    }
    this.setState({
      newLogin: null,
    });
  }

  toggleUsersHandler = () => {
    this.setState({
      showUsers: !this.state.showUsers,
    });
  };

  deleteHandler = (index) => {
    const users = [...this.state.users];
    users.splice(index, 1);
    this.setState({ users });
  };

  onChangelogin = (login) => {
    this.setState({
      newLogin: login.trim(),
    });
  };

  render() {
    let users = null;

    if (this.state.showUsers) {
      users = this.state.users.map((user, index) => {
        return (
            <User
                key={user.id}
                name={user.login}
                avatar={user.avatar_url}
                onChangeName={(event) =>
                    this.onChangelogin(event.target.value, index)
                }
                onDelete={() => this.deleteHandler(index)}
                onChangelogin={() => this.onChangeName(index)}
            />
        );
      });
    }

    return (
        <div className="App">
          <h1>{this.state.pageTitle}</h1>

          <Button onClick={this.toggleUsersHandler} variant={'outlined'}>Toggle_ <GitHubIcon/> _Users</Button>

          <div
              style={{
                width: 400,
                margin: "auto",
                paddingTop: "20px",
              }}
          >
            {users}
          </div>
        </div>
    );
  }
}

export default Userslist;
