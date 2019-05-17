import React, { Component } from "react";
import { Form, Input } from "@rocketseat/unform";
import axios from "axios";

const baseUrl = "http://localhost:3003";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      items: "",
      isLoaded: false
    };
  }

  componentDidMount() {
    axios
      .get(`${baseUrl}/users`, {})
      .then(res => {
        this.setState({ items: res.data, isLoaded: true });
      })

      .catch(error => {
        console.log("Não encontrada a API!");
      });
  }

  handleChange = e => {
    this.setState({ _id: e.target.value });
  };

  handleDelete(e) {
    e.preventDefault();
    axios
      .delete(`${baseUrl}/users/${this.state._id}`)
      .then(res => console.log(res.data));
  }

  render() {
    const { isLoaded, items } = this.state;
    console.log(this.state);
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <header>
            <h1>Listagem de usuários</h1>
          </header>

          <div>
            {items.map(item => (
              <div key={item._id}>
                <strong>{item.name}</strong>
                <button className="button muted-button">Edit</button>
                <Form onSubmit={this.handleDelete}>
                  User ID:{" "}
                  <Input
                    type="text"
                    name="_id"
                    onChange={this.handleChange}
                    placeholder={item._id}
                  />
                  <button type="submit">Delete</button>
                </Form>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Home;
