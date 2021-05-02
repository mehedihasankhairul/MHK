import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaPinterest,
    FaPlay,
} from "react-icons/fa";
import TextAnimation from "../Animation/TextAnimation/TextAnimation";
import './Header.css'
import image from "../../../images/logo.jpg"



const Header = () => {
    const [state] = React.useState({
        title: "I'm",
        text:
            "Hello there, Welcome to my Profile. \
       Junior MERN Stack Web Developer. ​",
        image: image,
    });
    return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="header__content">
                                <div className="header__section">
                                    <h1>{state.title} <span className="name">MeHeDi HaSaN khairul</span></h1>
                                    <TextAnimation></TextAnimation>
                                    <p style={{ marginLeft: "10px" }}>{state.text}</p>
                                    <div className="header__buttons">
                                        <a href="https://drive.google.com/file/d/1Zcj_v2_wEVhQ3m6mJ-B77LKP69qsjT1J/view?usp=sharing" className="btn btn-smart">
                                            <h4 className="title">Get Resume</h4>
                                        </a>
                                    </div>
                                    <ul style={{ marginLeft: "80px" }} className="header__ul mt-2">
                                        <li>
                                            <FaFacebookF className="headerIcon" />
                                        </li>
                                        <li>
                                            <FaTwitter className="headerIcon" />
                                        </li>
                                        <li>
                                            <FaPinterest className="headerIcon" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="banner__img">
                                <img style={{ width: "80%" }} src={state.image} alt="man" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    );
};

export default Header;