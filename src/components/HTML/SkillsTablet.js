import {
    FaHtml5,
    FaCss3Alt,
 
    FaReact,
} from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiNextdotjs, SiThreedotjs, SiGithub,SiFirebase,SiNodedotjs,SiRedux,SiMongodb,SiMysql,SiSocketdotio } from 'react-icons/si';

const SkillsTablet = () => {
    /**
     * Array Of Skills
     */
    const skillsArray = [
        { name: 'HTML', icon: <FaHtml5 className="ico" />, color: '#e34c26' },
        { name: 'CSS', icon: <FaCss3Alt className="ico" />, color: '#264de4' },
        { name: 'Tailwind', icon: <SiTailwindcss className="ico" />, color: '#65bcf4' },
        { name: 'Javascript', icon: <SiJavascript className="ico" />, color: '#f0db4f' },
        { name: 'React', icon: <FaReact className="ico" />, color: '#7cc5d9' },
        { name: 'ThreeJs', icon: <SiThreedotjs className="ico" />, color: '#333333' },
        { name: 'Three-Fiber', icon: <SiThreedotjs className="ico" />, color: '#333333' },
        { name: 'Next.js', icon: <SiNextdotjs className="ico" />, color: '#000000' },
        { name: 'Github', icon: <SiGithub className="ico" />, color: '#000000' },
        { name: 'Firebase', icon: <SiFirebase className="ico" />, color: 'yellow' },
        { name: 'Node.js', icon: <SiNodedotjs className="ico" />, color: 'green' },
        { name: 'Redux', icon: <SiRedux className="ico" />, color: 'purple' },
        { name: 'Mongoose', icon: <SiMongodb className="ico" />, color: 'green' },
        { name: 'MySQL', icon: <SiMysql className="ico" />, color: 'blue' },
        { name: 'Socket.io', icon: <SiSocketdotio className="ico" />, color: '#000000' },


    ];

    return (
        <div className="skills-container">
            <h1 className="skills-title"></h1>

            <div className="skills centered">
                {skillsArray.map((skill, index) => {
                    return (
                        <div key={index} className="skill centered">
                            <div className="skill-icon" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <h2 className="skill-name">{skill.name}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SkillsTablet;
