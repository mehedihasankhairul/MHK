import React from 'react';
import { useForm } from "react-hook-form";
import './ContactForm.css'

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="Contact mt-5"><br />
            <div className="container">
                <h1 className="fw-bold">GET IN <span className="headColor">TOUCH</span></h1><br />
                <div className="row">
                    <div className="col-md-4 align">
                        <h3 className="fw-bold"></h3>
                        <div className="row">
                            <div className="col-2">
                                <img className="img-fluid mt-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png" alt="" />
                            </div>
                            <div className="col-10">
                                <p style={{ fontSize: '14px' }}>Send me an Email<br />
                                    mhkhairul78@gmail.com</p>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-2">
                                <img className="img-fluid mt-2" src="https://i.pinimg.com/originals/84/4e/8c/844e8cd4ab26c82286238471f0e5a901.png" alt="" />
                            </div>
                            <div className="col-10">
                                <p style={{ fontSize: '14px' }}>Phone<br />
                                    +8801759-788156</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 align">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder="Your Name" {...register("name", { required: true })} />
                            <input placeholder="Your Email" {...register("email", { required: true })} />
                            <input placeholder="Your Subject" {...register("subject", { required: true })} /> <br />
                            <textarea placeholder="Your Message" name="" id="" cols="60" rows="5" {...register("message", { required: true })}></textarea><br />
                            <button className="button btn-danger">Send Email</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;