import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form";
import Table from "./components/table";
class App extends Component {
  state = {
    field: {},
    record: [],
    editdata: [],
    id: 0
  };

  submit = field => {
    this.setState({ field: field });
    const editdata = [];
    this.setState({ editdata });
    var recorddata = [...this.state.record];
    const record = recorddata.filter(rec => rec.field.id !== field.id);
    record.push({
      field
    });
    this.setState({ record });
    // console.log(this.state.record);
  };

  delete = id => {
    const record = this.state.record.filter(rec => rec.field.id !== id);
    this.setState({ record });
    const editdata = [];
    this.setState({ editdata });
  };

  editRecord = id => {
    // console.log("edit is clicked for:", id);

    // let editid = id;
    // console.log("edit is clicked id:", editid);
    // this.setState({ id: editid });
    // console.log(this.state.id);
    const editdata = this.state.record.filter(rec => rec.field.id == id);
    // this.setState({ counters });
    this.setState({ editdata: editdata });
    // console.log(editdata);
  };

  render() {
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      gender
    } = this.state.field;
    return (
      <div className="App">
        <Form
          onSubmit={field => this.submit(field)}
          edit={this.state.editdata}
        />
        {/* <h1>{JSON.stringifthis.setState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        gender: "",
        id: nextid
      });his.state.field, null, 2)}</h1> */}
        {/* <p>{firstName}</p>this.setState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        gender: "",
        id: nextid
      });
        <p>{lastName}</p>
        <p>{userName}</p>
        <p>{email}</p>
        <p>{password}</p>
        <p>{gender}</p> */}
        <div className="table">
          {this.state.record.map((rec, index) => (
            <Table
              key={index}
              tableData={rec.field}
              edit={this.editRecord}
              delete={this.delete}
            />
          ))}
          {/* <Table tableData={this.state.field} recorddata={this.state.record} /> */}
        </div>
      </div>
    );
  }
}

export default App;
