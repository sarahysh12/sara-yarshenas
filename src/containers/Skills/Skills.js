import React, { Component } from 'react';
import './Skills.scss';
import Menu from '../../components/Menu/Menu';
import  { skillList } from '../../shared/skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Line } from 'rc-progress';
import { icons } from '../../shared/skillIcons';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faSwift } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';

library.add(faPython, faAngular, faReact, faSwift, faHtml5, faCss3, faBootstrap);


class Skills extends Component {
    render() {
        let skills =  Object.entries(icons).map(([key, value]) => {
            const icon = value !== '' ? <FontAwesomeIcon className="Icons" icon={[value, key]}  style={{color:'#086972'}}/> : null
            return (
                <li>
                    <div className="ProgressBar">
                        <p className="IconName">
                            {icon}
                            <span style={{flex: 1, paddingTop: '9%', paddingLeft: '1%'}}>{key}</span>
                        </p>
                        <div className="PercentageBar">
                            <span>{skillList[key]}%</span>
                            <Line percent={skillList[key]} strokeWidth="3" strokeColor="#086972" />
                        </div>
                    </div> 
                </li>
            )
        });

            

        return(
            <div>
                <div className="SmallOrangeSpace"></div>
                <Menu/>
                <div className="Skills">
                    <h1>Skills</h1>
                    <div className="SkillList">
                        <ul>
                        {skills}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default Skills;