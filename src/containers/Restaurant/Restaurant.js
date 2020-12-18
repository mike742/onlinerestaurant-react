import { React, Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import MenuItems from '../MenuItems/MenuItems';
import Login from '../Login/Login';
import Cart from '../Cart/Cart';
import { Menu } from 'semantic-ui-react'

import ContactInfo from '../ContactInfo/ContactInfo'
import { connect } from 'react-redux';
import { logout } from '../../store/action/auth';

class Restaurant extends Component {

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        return (
            <div>
                <Menu pointing inverted fixed="top">
                    <Menu.Item
                        as={Link} to='/menuitems'
                        name='menuitems'
                        active={this.state.activeItem === 'menuitems'}
                        onClick={this.handleItemClick}
                    >Menu Items</Menu.Item>

                    { !this.props.isAuth ?
                        <Menu.Item
                            as={Link} to='/'
                            name='login'
                            active={this.state.activeItem === 'login'}
                            onClick={this.handleItemClick}
                        >Login</Menu.Item>
                        :
                        <Menu.Item
                            as={Link} to='/'
                            name='logout'
                            active={this.state.activeItem === 'logout'}
                            onClick={this.props.logout}
                        >Logout</Menu.Item>
                    }

                </Menu>

                <br /><br />
                <h2>This is a Restaurant</h2>

                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/contact-info" exact component={ContactInfo} />
                    {this.props.isAuth ?
                        <Route path="/menuitems" exact component={MenuItems} />
                        : null}
                    <Route render={() => <h3>Not Found</h3>} />
                </Switch>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuth: Object.keys(state.user).length !== 0
    }
}

export default connect(mapStateToProps, { logout })(Restaurant);