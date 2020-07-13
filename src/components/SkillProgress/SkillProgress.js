import React from 'react';
import { Line, Circle } from 'rc-progress';
import './SkillProgress.css';

const skillProgress = (props) => {
    const progress = props.type === "line" ? 
        <div className="Progress">{props.skill}<Line percent={props.percentage} strokeWidth="3" strokeColor="#fe8a71" /></div>:
        <div className="CircleProgress">{props.skill}<Circle percent={props.percentage} strokeWidth="6" trailWidth="3" strokeColor="#086972" /></div>

    return (
        <div>
            {progress}
        </div>
    );
}
export default skillProgress;