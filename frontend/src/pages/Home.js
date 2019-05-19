import React, { Component } from "react";
import { Form, Input } from "@rocketseat/unform";
import axios from "axios";

const baseUrl = "http://localhost:3003";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      index: '',
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

  handleUpdate = ()=> {
   
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

    const dadosapi = `${baseUrl}/users/${this.state.items._id}`
      console.log(dadosapi)
    
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
                <button
                  onClick={this.handleUpdate}
                  onChange={this.handleChange}
                  className="button muted-button"
                >
                  Edit
                </button>
                <Form >
                  
                  <Input type="text" name="_id" onChange={this.handleChange} />
                   <button 
                   className="button muted-button"
                   
                  onClick={() => this.handleDelete(item._id)}
                >
                  Delete
                </button> Cole ID: {item._id}
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
