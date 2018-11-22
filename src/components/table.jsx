import React, { Component } from "react";
class Table extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    gender: ""
  };

  // editState = () => {
  //   console.log("edit clicked");
  //   console.log(this.state.firstName);
  // };
  render() {
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      gender,
      id
    } = this.props.tableData;
    if (this.props.tableData.firstName) {
      return (
        <div className="tables">
          {/* <h3>{id}</h3> */}
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>Firstname</td>
                <td>{firstName}</td>
              </tr>
              <tr>
                <td>Lastname</td>
                <td>{lastName}</td>
              </tr>
              <tr>
                <td>Username</td>
                <td>{userName}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Password</td>
                <td>{password}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{gender}</td>
              </tr>
            </tbody>
            <button
              className="btn btn-success"
              onClick={() => this.props.edit(id)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.delete(id)}
            >
              Delete
            </button>
          </table>
        </div>
      );
    } else {
      return <h3>No data</h3>;
    }
  }
}

export default Table;
