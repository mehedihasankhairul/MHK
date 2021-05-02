import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';

const Service = ({ Service }) => {
    return (
        <div className="col-md-4 text-center service ">
           
                <img style={{ width: '15%' }} src={""} alt="" />
                {
                    // service.image ? <img style={{ height: '50px' }} src={service.imageURL} />
                        // :
                        // <img style={{ height: '50px' }} className="img-fluid mb-3" src={`https://localhost:5000/${service.imageURL}`} alt="" />
                        <img style={{ height: '50px' }} className="img-fluid mb-3" src={""} alt="" />
                }
                <h5 className="mt-3 mb-3">{Service.title}</h5>
                <p className="text-secondary">{""}</p>
                <button className="btn btn-danger">Get Now</button>
       
        </div>
    );
};

export default Service;