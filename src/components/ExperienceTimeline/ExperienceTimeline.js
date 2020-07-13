

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import { experiences } from '../../shared/experiences';
import { educations } from '../../shared/education';
// import WorkIcon from '@material-ui/icons/Work';


// TODO icon for items
// Change color of root timeline
// TODO left arrows
// add a bullet point list for skills 

const experienceTimeline = (props) => {

    let exprs =  experiences.map(exp => (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ border:'1px solid #ccc', borderRight: '7px solid #ccc' }}
            contentArrowStyle={{ borderRight: '7px solid  #ccc' }}
            date={exp.start +' - '+exp.end}
            iconStyle={{ background: '#086972', color: '#fff' }}
            icon=''>
            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{exp.location}</h4>
            <p>
                {exp.descrption}
            </p>
            {/* add a bullet point list for skills */}
        </VerticalTimelineElement>
        )
    );
    

    let schools = educations.map(edu => (   
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={edu.start +' - '+edu.end}
            contentStyle={{ border:'1px solid #ccc', borderRight: '7px solid #ccc' }}
            contentArrowStyle={{ borderRight: '7px solid  #ccc' }}
            iconStyle={{ background: '#f37121', color: '#fff' }} icon=''>
            <h3 className="vertical-timeline-element-title">{edu.school}</h3>
            <h4 className="vertical-timeline-element-subtitle">{edu.location}</h4>
            <p>
                {edu.major}
            </p>
        </VerticalTimelineElement>
        )
    );
    
    return (
        <VerticalTimeline>
            {exprs}
            {schools}
            <VerticalTimelineElement
            iconStyle={{ background: '#35495e', color: '#fff' }} icon=''/>
      </VerticalTimeline>
    );
}

export default experienceTimeline;