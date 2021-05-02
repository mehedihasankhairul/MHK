import React from 'react';

const Project = ({ project }) => {
    return (
        <div className="item col-lg-4 col-sm-6 all brand graphic">
            <figure>
                <img style={{ height: '285px' }} src={project?.image} alt={project?.title} />
                <figcaption>
                    <h4>{project?.title}</h4>
                    <p>{project.technology}</p>
                    <p>
                        <a target="_blank" style={{ background: '#000', color: '#fff' }} href={project?.source_code} rel="noreferrer" className="btn btn-primary mr-2"><i className="fab fa-github mr-2"></i>Github</a>
                        <a target="_blank" style={{ background: '#000', color: '#fff' }} href={project?.live_url} rel="noreferrer" className="btn btn-primary"><i className="fas fa-link mr-2"></i>Live Link</a>
                    </p>
                </figcaption>
            </figure>
        </div>

    );
};

export default Project;