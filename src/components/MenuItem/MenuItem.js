import React, { Component } from 'react';

class MenuItem extends Component {

    state = {
        qty: 0
    }

    addToCartClicked = (id, q) => {
        //console.log(id + " " + q);

        this.props.addToCartClicked(id, q);
    }

    render() {
        return (
            <div>
                Menu Item :
                <label>{this.props.name}</label>
                <br />
                CAD{this.props.price}
                <br />
                <img src={this.props.photoPath} width="200" alt="" />
                <br />
                <input type="number" min="1" max="20"
                    onChange={(event) => {  this.setState({qty:event.target.value }) }} />
                <button onClick={ () => { this.addToCartClicked(this.props.id, this.state.qty) } } >
                    Add to Cart
                </button>
                <hr />

                {/* <button onClick={props.getByIdClicked}> Get Menu Item by id </button>
                    <hr />        
                    <hr /> */}
            </div>
        );
    }
}

export default MenuItem;