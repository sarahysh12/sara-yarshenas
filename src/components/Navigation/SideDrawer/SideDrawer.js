import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"] ;
    if(props.open){
        attachedClasses = ["SideDrawer", "Open"] ;
    }
    return  (
        <div>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className="Logo">
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </div>
    );
}

export default sideDrawer;