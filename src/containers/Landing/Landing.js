import React, { Component } from 'react';
import './Landing.css';
import myImg from '../../assets/images/sara.jpg';

import { skillList } from '../../shared/skills';
import SkillProgress from '../../components/SkillProgress/SkillProgress';
import Menu from '../../components/Menu/Menu';
import Contacts from '../../components/Contacts/Contacts';

import Typical from 'react-typical';

class Landing extends Component {
    state = {
        showSideDrawer : false
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render () {
        let skills =  Object.entries(skillList).map(([key, value]) => 
                <div className="ProgressBars"><SkillProgress type='line' skill={key} percentage={value}/></div>
        );


        return (
            <div className="Landing">
                <div className="SmallGreenSpace"></div>
                <Menu/>
                <div className="Header">
                    <div class="Intro">
                        <h1>Hello I'm Sara.</h1>
                        <p> I'm a{' '}
                        <Typical
                            steps={[
                                'software engineer',
                                1000,
                                'freelancer',
                                1000,
                                'designer',
                                1000,
                                'musician',
                                1000,
                                'painter',
                                1000
                            ]}
                            loop={Infinity}
                            wrapper="b"/>
                        </p>
                    </div>
                    <div className="Image">
                        <img src={myImg}></img>
                        <Contacts color='White'/>
                    </div>
                </div>
                <div className="About">
                    <p>Hi, my name is Sara. I am a Software Engineer based in San Francisco. I studied in bachelor of software engineering and master in computere science. I have two years of experience in industry as a data engineer and software engineer. I am expert developing front ends using Angular and React frameworks and I recently started learning SwiftUI and React Native.
                    <button href="#">Read more</button></p>
                </div>
                <div className="OrangeSpace">
                    {/* <img src={myProgramming} width="900px" height="700px"></img> */}
                </div>
                <div className="Skills">
                    <h3>Skills & Technologies</h3>
                    <div className="SkillList">
                        {skills}
                    </div>
                 
                    
                </div>
            </div>
        );
    }
}

export default Landing;