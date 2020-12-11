import { React, Component } from 'react';

const menuItem = (props) => (

    <div>
        Menu Item :
        <label>{props.name}</label>
        <br />
        CAD{props.price}
        <br />
        <img  src={props.photoPath} width="200" />

        <hr />

        <button onClick={props.getByIdClicked}> Get Menu Item by id </button>
        <hr />        
        <hr />
    </div>

);

export default menuItem;