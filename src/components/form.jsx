import React, { Component } from "react";

class Form extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { value: "" };
  //   }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validate = () => {
    let emptyerror = "";
    let noedit = "";
    if (!this.state.userName) {
      emptyerror = "Username is mandatiory";
    }
    if (this.props.edit[0]) {
      if (
        this.state.firstName === this.props.edit[0].field.firstName &&
        this.state.lastName === this.props.edit[0].field.lastName &&
        this.state.userName === this.props.edit[0].field.userName &&
        this.state.email === this.props.edit[0].field.email &&
        this.state.password === this.props.edit[0].field.password &&
        this.state.gender === this.props.edit[0].field.gender
      ) {
        emptyerror = "Not yet edited";
      }
    }

    if (emptyerror) {
      this.setState({ emptyerror });
      return false;
    }
    if (noedit) {
      this.setState({ noedit });
      return false;
    }
    this.setState({ emptyerror });
    return true;
  };

  handleSubmit = event => {
    //   this.setState({ value: event.target.value });
    // alert(
    //   "A name was submitted: " +
    //     this.state.firstName +
    //     this.state.lastName +
    //     this.state.userName +
    //     this.state.email +
    //     this.state.password
    // );
    event.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      this.props.onSubmit(this.state);
      let nextid;
      if (this.props.edit[0]) {
        nextid = this.state.editid;
      } else {
        nextid = this.state.id;
      }
      nextid++;
      this.setState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        gender: "",
        id: nextid
      });
    }
  };

  edit = e => {
    console.log("form edit");
    // console.log(this.props.edit[0].field.firstName);
    const editid = this.state.id;
    this.setState({ editid });
    if (this.props.edit[0]) {
      this.setState({
        firstName: this.props.edit[0].field.firstName,
        lastName: this.props.edit[0].field.lastName,
        userName: this.props.edit[0].field.userName,
        email: this.props.edit[0].field.email,
        password: this.props.edit[0].field.password,
        gender: this.props.edit[0].field.gender,
        id: this.props.edit[0].field.id
      });
    }
  };

  state = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    gender: "",
    emptyerror: "",
    editid: "",
    id: 0,
    flag: false
  };

  // if (this.props.edit[0]) {
  //   console.log("edit data");
  //   this.edit();
  // }

  render() {
    return (
      <React.Fragment>
        <h3 align="center">React form</h3>
        <div style={{ color: "red" }}>{this.state.emptyerror}</div>
        <form onSubmit={this.handleSubmit} onMouseEnter={this.edit}>
          <div class="form-group for">
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              password
              placeholder="firstname"
              className="form-control"
              onChange={e => this.handleChange(e)}
            />
            <br />
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              placeholder="lastName"
              className="form-control"
              onChange={e => this.handleChange(e)}
            />
            <br />
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              placeholder="userName"
              className="form-control"
              onChange={e => this.handleChange(e)}
            />
            <br />
            <input
              type="text"
              name="email"
              value={this.state.email}
              placeholder="email"
              className="form-control"
              onChange={e => this.handleChange(e)}
            />
            <br />
            <input
              type="text"
              name="password"
              value={this.state.password}
              placeholder="password"
              className="form-control"
              onChange={e => this.handleChange(e)}
            />

            <input
              type="hidden"
              name="id"
              value={this.state.id + 1}
              className="form-control"
              onChange={e => this.handleChange(e)}
            />

            <br />
            <select
              value={this.state.gender}
              name="gender"
              className="form-control"
              onChange={e => this.handleChange(e)}
            >
              <option value="" />
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <br />
            <input
              type="submit"
              value="Submit"
              className="form-control btn btn-success"
            />
          </div>
        </form>
        <button onClick={this.edit}>Edit</button>
      </React.Fragment>
    );
  }
}

export default Form;
