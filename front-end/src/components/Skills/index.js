import './index.css'
import { Element } from "react-scroll";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
  FaNodeJs, FaPython, FaGithub
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostman, SiSqlite, SiFramer, SiApachenetbeanside } from 'react-icons/si';
import { motion } from 'framer-motion';

const skillsList = [
  { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
  { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
  { name: 'React.js', icon: <FaReact color="#61DAFB" /> },
  { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
  { name: 'Express.js', icon: <SiExpress color="#FFFFFF" /> },
  { name: 'Python', icon: <FaPython color="#3776AB" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  { name: 'SQLite', icon: <SiSqlite color="#003B57" /> },
  { name: 'Git & GitHub', icon: <FaGithub color="#F1502F" /> },
  { name: 'RESTful APIs', icon: <SiApachenetbeanside color="#FF6C37" /> }, // or find a better icon
  { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
  { name: 'Framer Motion', icon: <SiFramer color="#0055FF" /> },
];


const Skills = () => {
  return (
    <Element name="skills">
      <div className='skills-container'>
          <section className="skills-section">
            <h2 className="skills-title">My Skills</h2>
            <div className="skills-flexbox">
              {skillsList.map((skill, index) => (
                <motion.div
                  className="skill-card"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <p className="skill-name">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </section>
      </div>
    </Element>
  )
}

export default Skills