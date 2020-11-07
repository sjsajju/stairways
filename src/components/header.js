import React, { Component } from 'react';
import { Link } from "gatsby";
import { MenuItems } from "./MenuItems"
import { Button } from "./Button"
import './Navbar.css'
import Logo from "../images/logo.png"

class Header extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className="NavbarItems">
        <img src={Logo} className="navbar-logo" />
        {/* <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1> */}
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to="/" className={item.cName} href={item.url}>
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
        <Button>Request Quote</Button>
      </nav>
    )
  }
}

export default Header