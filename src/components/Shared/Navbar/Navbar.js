import React from 'react';
import './Navbar.css'


const Navbar = () => {
    return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <a className="navbar-brand text-white" href="/#">MHK</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item  active">
                                <a className="nav-link font-weight-bold text-white mr-5" href="/#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font-weight-bold text-white mr-5" href="/#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font-weight-bold text-white mr-5" href="/#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font-weight-bold text-white mr-5" href="/#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#"> <button type="button" className=" mr-5 font-weight-bold btn btn-danger btn-lg">Resume</button></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
    );
};

export default Navbar;