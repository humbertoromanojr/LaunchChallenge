import React, { Component } from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import axios from "axios";

const baseUrl = "http://localhost:3003";

const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string()
    .email("Custom invalid email")
    .required("Custom required"),
  password: Yup.string()
    .min(4)
    .required(),
  address: Yup.string()
});

class Add extends Component {
  state = {
    users: [],
    isSubmited: false,
    error: false
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.password]: e.target.value,
      [e.target.address]: e.target.value
    });
  };

  handleSubmit(data) {
    console.log(data);

    data.preventDefault();

    const addUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address
    };

    axios.post(`${baseUrl}/users`, addUser).then(res => {
      this.setState({
        users: res.data,
        error: false,
        isSubmited: true
      }).catch(error => {
        this.setState({
          error: true,
          isSubmited: false
        });
      });
    });

    console.log(addUser);
  }

  /* handleReset = () => {
    this.setState({
      name: "",
      email: "",
      password: "",
      address: ""
    });
  }; */

  render() {
    return (
      <Form schema={schema} onSubmit={this.handleSubmit} method="post">
        <Input
          type="text"
          name="name"
          onChange={this.handleInputChange}
          value={this.state.name}
          placeholder="Nome: "
        />
        <Input
          type="email"
          name="email"
          onChange={this.handleInputChange}
          value={this.state.email}
          placeholder="Email válido: "
        />
        <Input
          type="password"
          name="password"
          onChange={this.handleInputChange}
          value={this.state.password}
          placeholder="Senha: "
        />
        <Input
          type="text"
          name="address"
          onChange={this.handleInputChange}
          value={this.state.address}
          placeholder="Endereço completo: "
        />
        <button type="submit">Add</button>
        {/* <button onClick={this.handleReset}>Reset</button> */}
      </Form>
    );
  }
}

export default Add;
