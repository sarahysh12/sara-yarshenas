import React, { Component } from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

class NavigationItems extends Component {

    render() {
        return(
            <article>
                <ul className="NavigationItems">
                    <NavigationItem link="/" exact>Home</NavigationItem>
                    <NavigationItem link="/experience" exact>Experience</NavigationItem>
                    <NavigationItem link="/projects" exact>Projects</NavigationItem> 
                    <NavigationItem link="/skills" exact>Skills</NavigationItem> 
                    <NavigationItem link="/arts" exact>Arts</NavigationItem> 
                    <NavigationItem link="/aboutme" exact>About Me</NavigationItem> 
                </ul>
            </article>
        );
    }
}

export default NavigationItems;