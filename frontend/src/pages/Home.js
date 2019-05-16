import React, { Component } from "react";

import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: "",
      isLoaded: false
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3003/users", {})
      .then(res => {
        this.setState({ items: res.data, isLoaded: true });
      })

      .catch(error => {
        console.log("Não encontrada a API!");
      });
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
                <button className="button muted-button">Delete</button>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Home;
