import React, { Component } from 'react';

class MenuItem extends Component {

    state = {
        qty: 0,
        selected: false
    }

    addToCartClicked = (id, q) => {
        this.setState({selected: true});
        this.props.addToCartClicked(id, q);
    }

    render() {
        return (
            <div>
                Menu Item:
                <label> {this.props.name}</label>
                <br />
                CAD{this.props.price}
                <br />
                <img src={this.props.photoPath} width="200" alt="" />
                <br />
                <input type="number" min="1" max="20"  
                    // onKeyDown={(e) => { e.preventDefault();}}
                    onChange={(event) => {  this.setState({qty:event.target.value }) }}
                    disabled={this.state.selected}
                    />

                { this.state.selected ? <span> added to Cart</span> : null }
                <br />
                <button onClick={ () => { this.addToCartClicked(this.props.id, this.state.qty) } } 
                    disabled={this.state.selected}>
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