import React, { Component } from "react";

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

  handleDelete() {
    try {
      axios
        .delete(`${baseUrl}/users/${this.item._id}`)
        .then(res => console.log(res.data));
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { isLoaded, items } = this.state;
    console.log(items);

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
                <button
                  onClick={this.handleDelete}
                  className="button muted-button"
                  value={item._id}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Home;
