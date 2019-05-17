import React, { Component } from "react";
import axios from "axios";

const baseUrl = "http://localhost:3003";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: 0,
      items: [],
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

  handleDelete = async _id => {
    try {
      let items = this.state.items;
      items.splice(_id, 1);

      this.setState({
        items: items
      });

      const response = await axios
        .delete(`${baseUrl}/users/${this.state._id}`)
        .then(res => {
          console.log(response);
        });
    } catch (err) {
      console.log(err);
    }
  };

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
            {items.map((item, _id) => (
              <div key={_id}>
                <strong>
                  <a href="http://localhost:3000/edit">{item.name}</a>
                </strong>
                <button className="button muted-button">Edit</button>
                <button type="submit" onClick={() => this.handleDelete(_id)}>
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
