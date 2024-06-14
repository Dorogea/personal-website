import React from 'react';
import './sidebar.css'
import { SocialIcon } from 'react-social-icons';

function sidebar() {
    return (
        <sidebar class='header'>
            <h1 class="headerh1">Dorogea Eduard</h1>
            <h2 class='headerh2'>Software Engineer</h2>
            <p class='headerp'>Student at University of Craiova.</p>
            <p class='headerp'>Computer Science departament.</p>
            <nav class='navlinks'>
                <ul>
                  <li><a href='#About'>About</a><br></br></li>
                  <li><a href='#Experience'>Experience</a><br></br></li>
                  <li><a href='#Projects'>Projects</a><br></br></li>
                </ul>
            </nav>
            <nav class='navlinks'>
                <h2 class='headerh2'>Contact</h2>
                <ul>
                <li><SocialIcon class="social-icon" url="https://www.linkedin.com/in/eduard-dorogea-263072236/" style={{ height: 30, width: 30 }} />
                    <a href='https://www.linkedin.com/in/eduard-dorogea-263072236/'> LinkedIn</a></li>
                <li><SocialIcon class="social-icon" url="https://github.com/Dorogea" style={{ height: 30, width: 30 }}/>
                    <a href='https://github.com/Dorogea'> GitHub</a></li>
                <li><SocialIcon class="social-icon" url="mailto: gupia27@gmail.com" style={{ height: 30, width: 30 }} />
                    <a href='mailto: gupia27@gmail.com'> Email (gupia27@gmail.com)</a></li>
                </ul>
            </nav>
        </sidebar>
    )
}

export default sidebar;