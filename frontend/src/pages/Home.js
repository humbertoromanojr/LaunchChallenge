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
    this.setState({ 
      _id: e.target.value,
      name: e.target.value,
      email: e.target.value,
      password: e.target.value,
      address: e.target.value
    });
  };

  handleUpdate = ( data, _id ) => {
   
    try {
      
      const items = { 
        name: this.state.name, 
        email: this.state.email, 
        password: this.state.password, 
        address: this.state.address 
      }

      axios.put(`${baseUrl}/users/${this.state._id}`, items);
      console.log(items);
    } catch (err) {
      console.log(err);
    }

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
                  {item.name} - {item.email} - {item.address}
                </strong>

                <Form onSubmit={this.handleUpdate}>
                
                <Input type="text" name="name" placeholder={item.name}/>
                <Input type="email" name="email" value={this.state.email} placeholder={item.email} />
                <Input type="password" name="password" placeholder="Senha: " />
                <Input type="text" name="address" placeholder={item.address} />
                <button onClick={()=>this.handleUpdate(_id)} className="button muted-button">
                  Edit
                </button>
                </Form>


                <Form onSubmit={this.handleDelete}>
                  
                  <Input type="text" name="_id" onChange={this.handleChange} />
                   <button 
                   className="button muted-button"
                   
                  onClick={()=>this.handleDelete(_id)}
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
