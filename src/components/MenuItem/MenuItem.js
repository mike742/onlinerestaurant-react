import React, { Component } from 'react';
import { Card, Button, Image } from "semantic-ui-react";

class MenuItem extends Component {

    state = {
        qty: 1,
        selected: false
    }

    addToCartClicked = (id, q, name, price) => {
        this.setState({ selected: true });
        this.props.addToCartClicked(id, q, name, price);
    }

    render() {
        return (
            <div style={{ margin: '10px' }}>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='medium'
                            src={this.props.photoPath}
                        />
                        <Card.Header>{this.props.name}</Card.Header>
                        <Card.Meta>CAD {this.props.price}</Card.Meta>
                        <Card.Description></Card.Description>
                        <input type="number" min="1" max="20" value={this.state.qty}
                            onKeyDown={(e) => { e.preventDefault();}}
                            onChange={(event) => { this.setState({ qty: event.target.value }) }}
                            disabled={this.state.selected}
                        />
                        {this.state.selected ? <span> added to Cart</span> : null}
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green' onClick={() => { this.addToCartClicked(this.props.id, this.state.qty, this.props.name, this.props.price) }}
                                disabled={this.state.selected}> Add to Cart </Button>
                            
                        </div>
                    </Card.Content>
                </Card>
                
                {/* <button onClick={props.getByIdClicked}> Get Menu Item by id </button>
                    <hr />        
                    <hr /> */}
            </div>
        );
    }
}

export default MenuItem;