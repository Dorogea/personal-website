import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css'
import './maincontent.css'

const experiences = [

  {
    position: 'Java Software Developer',
    company: 'Caelynx Europe',
    startYear: '2023',
    endYear: '2024',
    technologies: ['Java', 'Swing', 'Java3D', 'Git',  'Eclipse']
  },

  {
    position: 'AWR Analyst & SEO Specialist',
    company: 'Caphyon',
    startYear: '2023',
    endYear: '2023',
    technologies: ['SEO', 'AWR', 'Google Analytics', 'SERP', 'Search Engines']
  },

  {
    position: 'Solution Engineer',
    company: 'Caphyon',
    startYear: '2023',
    endYear: '2023',
    technologies: ['Orca', 'Visual Studio', 'Windows Installer', 'Advanced Installer', 'MSI', 'PostGreSQL', 'PowerShell']
  },

  {
    position: 'Technical Support Engineer',
    company: 'Bitdefender',
    startYear: '2021',
    endYear: '2023',
    technologies: ['Communication', 'Data Privacy']
  },

]

const projects = [

  {
    name: 'Phishing EvStud Website',
    description: 'Phishing website for educational purposes. The website includes a login page, a registration page. The website is used to teach students how to recognize phishing websites.',
    type: 'University Project',
    technologies: ['CSS', 'HTML', 'PHP', 'JavaScript', 'PostGreSQL', 'XAMPP']
  },

  {
    name: 'World Of Warcraft DBM - Bleach Music Pack',
    description: 'World of Warcraft addon that replaces the default DBM sounds with sounds from the anime Bleach.',
    type: 'Personal Project',
    technologies: ['LUA']
  },

  {
    name: 'Sports Club Website',
    description: 'Made a website for a sports club. The website includes Admin page, Announces page, Gallery page, Contact page, and a page for the club\'s history.',
    type: 'University Project',
    technologies: ['HTML', 'CSS', 'PHP']
  },

]

function MainContent({children}) {
  return (
    <div className="maincontent">
      {children}
      <div id="About">
        <section>
          <h2>About Me</h2>
            <p class='mainText'>Welcome to my personal website! I am Dorogea Eduard,
            a dedicated and passionate student at the Faculty of Computer Science at University of Craiova.<br></br>
            <br></br>My primary focus is on Frontend applications, and I am always eager to explore new technologies and enhance my programming skills.<br></br>
            I thrive on the challenges and opportunities presented by the ever-evolving landscape of web development.</p><br></br>
        </section>
        
        <section id="Experience">
         <br></br><h2>Work Experience</h2>
          <div class='experience'>
            {experiences.map((experience, index) => (
              <div key={index} class="experience-item">
                <div class="experience-header">
                <h3>{experience.position}</h3> 
                <h3><span>{experience.company}</span></h3>
                <span>{experience.startYear} - {experience.endYear}</span>
                </div>
                <p class="experience-technologies">
                  Technologies: {experience.technologies.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="Projects">
          <br />
          <h2>Projects</h2>
          <div class="experience">
            {projects.map((project, index) => (
              <div key={index} class="experience-item">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p class="experience-technologies">
                  Technologies: {project.technologies.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <br />
          <p class="lastsectionText">
          Crafted with React.js and CSS, this website offers seamless navigation and dynamic content rendering.<br></br> 
          Leveraging modern design principles, it boasts an elegant interface, sophisticated scrolling effects, and intuitive user experience.<br></br>
          Designed and developed by me. <br></br>
          </p>
        </section>


      </div>
    </div>
  );
}

export default MainContent;
