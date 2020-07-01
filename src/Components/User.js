import React from "react";
import "./User.css";
import Radium from "radium";
import { Button, Input } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';


class User extends React.Component {
    render() {
        const style = {
            border: " 1px solid #ccc",
            bosShedow: "0 4px 5px 0 rgba(0,0,0, .14)",
            ":hover": {
                bordee: "1px solid #aaa",
                boxShadow: "0 4px 15px 0 rgba(0,0,0, .25)",
            },
        };

        return (
            <div className="User" style={style}>
            <h3>User: {this.props.name}</h3>
        <Input
        type="text"
        onChange={this.props.onChangeName}
        placeholder="new login"
            />
            <Button onClick={this.props.onChangelogin}>update</Button>
            <img
        src={this.props.avatar}
        style={{ width: "300px", paddingTop : '5px' }}
        alt={this.props.name}
        />
        <br />
        <Button onClick={this.props.onDelete} color = {'secondary'} variant={'outlined'}>{<DeleteIcon/>}</Button>
        </div>
    );
    }
}

export default Radium(User);

