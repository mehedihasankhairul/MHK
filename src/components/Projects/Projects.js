import { Button } from 'bootstrap';
import React from 'react';
import './Projects.css'
import colorMe from '../../images/ColorMe.JPG'
import halalValley from '../../images/halal-valley.JPG'
import teslaRider from '../../images/tesla.JPG'


const Projects = () => {
    return (
        <div className="Project mt-5"><br />
            <h1 className="fw-bold"><span className="headColor">Projects</span></h1>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5">
                        <a target="_blank" href="https://service-center-cf745.web.app/"><img className="img-fluid" src={colorMe} /></a>
                    </div>
                    <div className="col-md-7  align">
                        <h3>ColorMe | Wall Service Provider
                            | <a target="_blank" href="https://service-center-cf745.web.app/"> <button className="btn-danger">Live Link </button></a>
                            | <a target="_blank" href="https://github.com/mehedihasankhairul/ColorMe-Client"> <button className="btn-danger"> Client</button> </a>
                            | <a target="_blank" href="https://github.com/mehedihasankhairul/ColorMe-Server"> <button className="btn-danger"> Server</button> </a>
                        </h3>
                        <p><b>Technology : </b> React JS, MongoDB, firebase authentication, react-router, react hook form, Bootstrap, Node JS,
                        express, axios, Heroku, and hosted in firebase.</p>
                        <ul>
                            <li>Responsive project with firebase authentication, admin authentication and dashboard
                            functionality for customer and admin.</li>
                            <li>The client has the ability to request a booking, check the status of the requested booking
                            from the client dashboard.</li>
                            <li>Only admin can update the client requested booking status and add new admin.</li>
                        </ul>
                    </div>
                </div>

                <br /><br /><br /><br />

                <div className="row">
                    <div className="col-md-5">
                        <a target="_blank" href="https://halal-valley.web.app/"><img className="img-fluid" src={halalValley} /></a>
                    </div>
                    <div className="col-md-7  align">
                        <h3> Halal Valley Shop
                        | <a target="_blank" href="https://halal-valley.web.app/"> <button className="btn-danger">Live Link </button></a>
                        | <a target="_blank" href="https://github.com/mehedihasankhairul/Halal-Valley-Shop-Client"> <button className="btn-danger"> Client</button> </a>
                        | <a target="_blank" href="https://github.com/mehedihasankhairul/halal-valley-shop-server"> <button className="btn-danger"> Server</button> </a>
                        </h3>
                        <p><b>Technology : </b> React JS, MongoDB, firebase authentication, react-router, react hook form, Bootstrap, Node JS,
                        express, axios, Heroku, and hosted in firebase.</p>
                        <ul>
                            <li>Responsive project with firebase authentication, admin authentication.</li>
                            <li>The client has the ability to request a order, check the status of the requested order from
                            the client dashboard.</li>
                        </ul>
                    </div>
                </div>

                <br /><br /><br /><br />

                <div className="row">
                    <div className="col-md-5">
                        <a target="_blank" href="https://tesla-rider.web.app/"><img className="img-fluid" src={teslaRider} /></a>
                    </div>
                    <div className="col-md-7  align">
                        <h3>Tesla Rider | Ride Sharing Web Application
                        | <a target="_blank" href="https://infallible-elion-e9be2e.netlify.app/"> <button className="btn-danger">Live Link </button></a>
                            | <a target="_blank" href="https://github.com/mehedihasankhairul/Leauge-Hunter-English-Footbal-Club"> <button className="btn-danger"> Client</button> </a>
                        </h3>
                        <p><b>Function : </b>HTML5, CSS3, JavaScript, ES6, Reactjs, React Router.</p>
                        <ul>
                            <li>Responsive project with bootstrap</li>
                            <li>Team selects for a league.</li>
                            <li>The client has the ability to request search a team, check all detail of selected team.</li>

                        </ul>
                    </div>
                </div>

                <br /><br /><br /><br />
            </div>
        </div>
    );
};

export default Projects;