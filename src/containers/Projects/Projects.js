import React, { Component } from 'react';
import './Projects.css';
import { projects } from '../../shared/project';
import Menu from '../../components/Menu/Menu';
import Project from './Project/Project';

//TODO Move toolbar to a separate component

class Projects extends Component {

    render() {
        let projs =  projects.map(proj => (
            <li>
                <Project title={proj.title} description={proj.descrption} git={proj.githuburl} img={proj.image} start={proj.start} end={proj.end}/>
            </li>

             ));

        return(
            <div>
                <div className="SmallGreenSpace"></div>
                <Menu/>
                <div className="Projects">
                    <h1>Projects</h1>
                    <ul>
                        {projs}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Projects;