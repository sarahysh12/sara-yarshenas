import React from 'react';
import myLogo from '../../assets/images/SY.png';
import './Logo.css'

const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <img src={myLogo} alt="SY"></img>
    </div>
);


export default logo;