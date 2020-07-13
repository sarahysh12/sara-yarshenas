import React from 'react';
import './Contacts.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const contacts = (props) => {
    return (
        <div>
            <a href="mailto: saraysh22@gmail.com"><FontAwesomeIcon className="Icons" icon={faEnvelope} style={{color:props.color}}/></a>
            <a href="https://github.com/sarahysh12"><FontAwesomeIcon className="Icons" icon={faGithub} style={{color:props.color}}/></a>
            <a href="https://linkedin.com/in/sarayarshenas"><FontAwesomeIcon className="Icons" icon={faLinkedinIn} style={{color:props.color}}/></a>
            <a href="https://www.pinterest.com/saraysh22/myart"><FontAwesomeIcon className="Icons" icon={faPinterest} style={{color:props.color}}/></a>
            <a href="https://twitter.com/ysh_sarah"><FontAwesomeIcon className="Icons" icon={faTwitter} style={{color:props.color}}/></a>
        </div>
    );
}
export default contacts;