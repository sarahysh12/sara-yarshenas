import React, { Component } from 'react';
import './Experience.css';
import ExperienceTimeline from '../../components/ExperienceTimeline/ExperienceTimeline';
import Menu from '../../components/Menu/Menu';

//TODO download my resume

class Experience extends Component {

    render() {
        return(
            <div>
                <div className="SmallOrangeSpace"></div>
                <Menu/>
                <div className="Experience">
                    <h1>Experiences</h1>
                    <ExperienceTimeline/>
                </div>
            </div>
        );
    }
}
export default Experience;