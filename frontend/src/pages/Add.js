import React from "react";
import { Form, Input } from "@rocketseat/unform";

import axios from "axios";

function Add() {
  function handleSubmit(data) {
    data.preventDefault();

    console.log(data);

    this.setState({
      items: [
        ...this.state.items,
        {
          name: data.target.name.value,
          email: data.target.email.value,
          password: data.target.password.value,
          address: data.target.address.value
        }
      ]
    });

    axios
      .post("http://localhost:3003/users")
      .then(res => console.log(res.data));

    data.target.name.value = "";
    data.target.email.value = "";
    data.target.password.value = "";
    data.target.address.value = "";
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} method="post">
        <Input type="text" name="name" placeholder="Nome: " />
        <Input type="email" name="email" placeholder="Email válido: " />
        <Input type="password" name="password" placeholder="Senha: " />
        <Input type="text" name="address" placeholder="Endereço completo: " />
        <button type="submit">Add</button>
      </Form>
    </div>
  );
}

export default Add;
