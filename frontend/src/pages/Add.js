import React, { Component } from "react";
import { Form, Input } from "@rocketseat/unform";

class Add extends Component {
  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      items: [
        ...this.state.items,
        {
          name: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value,
          address: e.target.address.value
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={() => this.handleSubmit}>
          <Input type="text" name="name" placeholder="Nome: " />
          <Input type="email" name="email" placeholder="Email válido: " />
          <Input type="password" name="password" placeholder="Senha: " />
          <Input type="text" name="address" placeholder="Endereço completo: " />
          <button type="submit">Add</button>
        </Form>
      </div>
    );
  }
}

export default Add;
