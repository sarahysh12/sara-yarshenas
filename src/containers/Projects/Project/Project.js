import React from 'react';
import './Project.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

//TODO add read more

const project = (props) => (
    <div className="Project">
        <div className="ProjectImg">
            <img src={props.img}/>
        </div>
        <div className="ProjectText">
            <h3>
                {props.title}
                <a href={props.git}>
                    <FontAwesomeIcon className="Icons" icon={faGithub} style={{color:'#35495e'}}/>
                </a>
            </h3>
            <h4>
                {props.start} - {props.end}
           </h4>
            <p>{props.description}</p>
            
        </div>
    </div>
);

export default project;