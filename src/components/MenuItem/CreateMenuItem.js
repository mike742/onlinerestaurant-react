import { React, Component } from 'react';
import axios from 'axios';

class CreateMenuItem extends Component {

    state = {
        name: '',
        price: 0,
        photoPath: '',
        url: "https://localhost:5001/MenuItem/"
    } 

    postDataHandler = () => {

        const data = {
            name: this.state.name,
            price: this.state.price,
            photoPath: this.state.photoPath
        }

        axios.post(this.state.url, data)
            .then(response => {
                console.log(response)
            })
    }

    render() {
        return (
            <div>
                <h1>Create Menu Item</h1>

                Name: <br />
                <input type="text"
                    value={this.state.name}
                    onChange={(event) => this.setState({name: event.target.value})}
                    ></input>
                    <br />
                Price: <br />
                <input type="text"
                    value={this.state.price}
                    onChange={(event) => this.setState({price: event.target.value})}
                    ></input>
                    <br />                
                Photo: <br />
                <input type="text"
                    value={this.state.photoPath}
                    onChange={(event) => this.setState({photoPath: event.target.value})}
                    ></input>
                    <br />

                <button onClick={this.postDataHandler}>Add Menu Item</button>
                <br /><br /><br />
            </div>
        );
    }
}

export default CreateMenuItem;