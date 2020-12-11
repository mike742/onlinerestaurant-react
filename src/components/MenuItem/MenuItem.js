import { React, Component } from 'react';

const menuItem = (props) => (

    <div>
        Menu Item :
        <label>{props.name}</label>
        <br />
        CAD{props.price}
        <br />
        {props.photoPath}
    </div>

);

export default menuItem;