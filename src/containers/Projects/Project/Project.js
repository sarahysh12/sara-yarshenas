import React from 'react';
import './Project.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

//TODO add read more

const project = (props) => {
    const gitHub = props.git !== '' ?
        <a href={props.git}>
            <FontAwesomeIcon className="Icons" icon={faGithub} style={{color:'#35495e'}}/>
        </a> : null;

    const websiteUrl = props.url !== '' ?
            <a href={props.url}><img src={props.img}/></a> : <img src={props.img}/>;

    return (
        <div className="Project">
            <div className="ProjectImg DesktopOnly">
                {websiteUrl}
            </div>
            <div className="ProjectText">
                <h3>
                    {props.title}
                    {gitHub}
                </h3>
                <h4>
                    {props.start} - {props.end}
            </h4>
                <p className="DesktopOnly">{props.description}</p>
            </div>
        </div>
    );
};

export default project;