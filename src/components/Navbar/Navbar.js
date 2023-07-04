import React from 'react'
import "./Navbar.css"
import navbarlogo from "../Images/navbarlogo.svg"

const Navbar = () => {
    return (
        // <div className='navbar'>

        // </div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ background: '#fbdc00' }}>
            <a className="navbar-brand" href="#home">
                <img src={navbarlogo} alt="Logo" className="logo" />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Products
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdown1">
                            {/* Dropdown 1 content */}
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Partners
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdown2">
                            {/* Dropdown 2 content */}
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Tools
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdown1">
                            {/* Dropdown 1 content */}
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Company
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdown1">
                            {/* Dropdown 1 content */}
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Knowledge Center
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdown1">
                            {/* Dropdown 1 content */}
                        </div>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#normal-link">
                            Contact Us
                        </a>
                    </li>
                    {/* Add more dropdown items as needed */}
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <button className="btn btn-primary mr-2">Login</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-secondary">Sign Up</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;