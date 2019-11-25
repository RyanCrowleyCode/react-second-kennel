import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <header>
                <h1 className="site-title">Student Kennels<br />
                    <small>Loving care when you're not there.</small>
                </h1>
                <nav>
                    <ul className="container">
                        {/* When the URL matches the value of the "to" key, the Route on the ApplicationViews will know, and render accoriding to the code we write there. These are not file paths, these are taco. We just have to match taco in the Route inside ApplicationViews. */}
                        <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/animals">Animals</Link></li>
                        <li><Link className="nav-link" to="/locations">Locations</Link></li>
                        <li><Link className="nav-link" to="/employees">Employees</Link></li>
                        <li><Link className="nav-link" to="/owners">Owners</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default NavBar