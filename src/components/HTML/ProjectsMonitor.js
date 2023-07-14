import React, { useState } from 'react';
import { FaGithub, FaTag } from 'react-icons/fa';

/**
 * Projects Array
 */
const projectsArray = [
  {
    id: 1,
    name: 'ConnectMe',
    ref: 'https://connectme.ahmeddvlpr.me/',
    code: 'https://github.com/AhmedMohammedMostafa/ConnectMe',
    img: './assets/images/ConnectMe.png',
    description:
      'ConnectMe: Empowering professionals to share social links, projects, and skills easily. Networking made simple.',
    tec: ['html', 'css', 'javascript', 'react', 'next.js', 'tailwindcss', 'mongoose', 'next-auth']
  },

  {
    id: 2,
    name: 'AhmedDvlpr.me',
    ref: 'https://ahmeddvlpr.me/',
    code: 'https://github.com/AhmedMohammedMostafa/AhmedDvlpr',
    img: './assets/images/Portfolio.png',
    description: 'Hi, I\'m Ahmed, a Full Stack Web Developer specializing in Node.js, Next.js, React, and Express. I have a passion for creating efficient and scalable web applications. Check out my portfolio to see',
    tec: ['html', 'css', 'javascript', 'react', 'react three fiber', 'three.js', 'drei']
  }
];

const ProjectsMonitor = () => {
  const [selectedProject, setSelectedProject] = useState(projectsArray[0]);

  return (
    <div className="monitor-window-container">
      <div className="window">
        <div className="window--tob-bar">
          <div className="window--tob-bar-circles">
            <div className="circle bg-red"></div>
            <div className="circle bg-orange"></div>
            <div className="circle bg-green"></div>
          </div>
        </div>
        <div className="window-content">
          <div className="window-sidebar">
            <h2 className="window-sidebar-title">Projects</h2>
            <ul className="window-sidebar-list">
              {projectsArray.map((prj) => {
                return (
                  <li
                    key={prj.id}
                    className={`window-sidebar-list-item ${
                      selectedProject === prj && 'window-sidebar-list-item-selected'
                    }`}
                    onClick={() => setSelectedProject(prj)}
                  >
                    {prj.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="window-content-main">
            <div className="window-content-main-img-tag-wrapper">
              <div className="window-content-main-img">
                <img src={selectedProject.img} alt={selectedProject.name} />
              </div>
              <ul className="window-content-main-tags">
                {selectedProject.tec.map((tag, index) => {
                  return (
                    <li key={index}>
                      <FaTag />
                      <span>{tag}</span>
                    </li>
                  );
                })}
                <div className="ribbon"></div>
              </ul>
              <div></div>
            </div>
            <h1 className="window-content-main-title">{selectedProject.name}</h1>
            <div className="window-content-main-description">{selectedProject.description}</div>
            <div className="window-content-main-buttons">
              <button className="window-content-main-code bg-secondary">
                <a href={selectedProject.code} target="_blank" rel="noreferrer">
                  <FaGithub /> <span>Project Source Code</span>
                </a>
              </button>
              <button className="window-content-main-ref bg-blue">
                <a href={selectedProject.ref} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsMonitor;
