import React, { Component } from 'react';
import './AboutMe.css';
import Menu from '../../components/Menu/Menu';
import Contacts from '../../components/Contacts/Contacts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

class AboutMe extends Component {

    render() {
        return(
            <div>
                <div className="SmallOrangeSpace"></div>
                <Menu/>
                <div className="AboutMe">
                    <h1>About Me</h1>
                    <div className="Introduction">
                        <p>
                        My name is Sara Yarshenas and I am a passionate Software Engineer based in San Francisco who loves her job. I have two years of experience working in industry as a Software Engineer and started doing freelancing from March 2020. I love to learn new technologies and challenge myself every day. I build new projects regularly with new technologies to keep my self up to date and  
                        <a href="https://github.com/sarrahysh12/aesthete"> here</a> is my recent project which is and Online Art Experience Web application (Aesthete).
                        </p>
                        <p>My other passion is Art & Music, I play a trational Persion instrument called Santoor for about 6 years. I also love painting & design with colored pencil and water color and just started creating digital arts by iPad. You can check out my works in Arts section.
                        </p> 
                        <p>I will be more tha happy to connect with people, learn from them and share my experience with them. Please feel free to reach out to me at to connect or work with me : </p>
                        <p><FontAwesomeIcon icon={faEnvelope} style={{color:'#086972'}}/> saraysh22@gmail.com</p>
                        <p><FontAwesomeIcon icon={faPhone} style={{color:'#086972'}}/> (+1)949-394-0351</p>
                        <p><Contacts color='#086972'/></p>
                    </div>
                    <div className="ContactMe">
                        <form action="mailto:saraysh22@gmail.com" 
                            method="POST" 
                            enctype="multipart/form-data"
                            name="EmailFromMyWebsite"> 
                            <label for="fname">Full Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name..."/>

                            <label for="lname">Your email</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your email..."/>

                            <label for="subject">Message</label>
                            <textarea id="subject" name="subject" placeholder="Send your comment to me..." style={{ height:'200px'}}></textarea>

                            <input type="submit" value="Submit"/>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default AboutMe;