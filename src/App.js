import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import profilePhoto from './profile.jpg';

export default function App() {
  return (
    <div className="app-root">
      <header className="bg-primary text-white py-5">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div>
            <h1 className="mb-0">Achan Manvitha</h1>
            <p className="lead mb-0">Computer Science Student • B.E. (2022–2026) </p>
          </div>
          <div className="mt-3 mt-md-0">
            <a href="/Manvitha_Resume.pdf" className="btn btn-light me-2" download>Download Resume</a>
            <a href="https://github.com/Manvitha0704" target="_blank" rel="noreferrer" className="btn btn-outline-light me-2">GitHub</a>
            <a href="https://www.linkedin.com/in/achan-manvitha-b4a1b1305" target="_blank" rel="noreferrer" className="btn btn-outline-light">LinkedIn</a>
          </div>
        </div>
      </header>

      <main className="container my-5">
        <section id="about" className="mb-5">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <img src={profilePhoto} alt="Manvitha" className="rounded-circle shadow-lg" style={{width: '200px', height: '200px', objectFit: 'cover'}} />
            </div>
            <div className="col-md-8">
              <h2>About Me</h2>
              <p>
                Seeking a dynamic and growth-oriented role in the technology industry where I can contribute meaningfully,
                take on new challenges, and build a successful long-term career. Currently pursuing B.E. in Computer Science
                with hands-on experience in web development, object detection, and full-stack projects.
              </p>
              <ul>
                <li>Languages: C, Python, Java, JavaScript</li>
                <li>Frameworks / Tools: Node.js, Git, GitHub, YOLOv5</li>
                <li>Databases: MongoDB, SQL</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="mb-5">
          <h2>Skills</h2>
          <div className="row">
            <div className="col-md-6">
              <h5>Technical</h5>
              <div className="skill-badges">
                <span className="badge bg-secondary me-2 mb-2">C</span>
                <span className="badge bg-secondary me-2 mb-2">Python</span>
                <span className="badge bg-secondary me-2 mb-2">Java</span>
                <span className="badge bg-secondary me-2 mb-2">JavaScript</span>
                <span className="badge bg-secondary me-2 mb-2">React</span>
                <span className="badge bg-secondary me-2 mb-2">Node.js</span>
                <span className="badge bg-secondary me-2 mb-2">MongoDB</span>
                <span className="badge bg-secondary me-2 mb-2">SQL</span>
              </div>
            </div>
            <div className="col-md-6">
              <h5>Soft Skills</h5>
              <ul>
                <li>Communication</li>
                <li>Team Collaboration</li>
                <li>Adaptability</li>
                <li>Problem Solving</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-5">
          <h2>Projects</h2>
          <div className="row">
            <ProjectCard title="Naval Ship Detection using YOLOv5" desc={`Developed a real-time object detection system using YOLOv5 with transfer learning. Achieved 88% Precision, 84% Recall, and 85% mAP@0.5 on a custom dataset.`} tech={["YOLOv5", "PyTorch", "Python"]} link="https://github.com/Manvitha0704/naval-ship-detection" />
            <ProjectCard title="JEE College Predictor" desc={`Full‑stack web app that predicts eligible NITs based on rank, category, and gender. Built with HTML/CSS, Node.js, Express, and MongoDB. Includes user auth and seat matrix.`} tech={["Node.js", "Express", "MongoDB", "JavaScript"]} link="https://github.com/Manvitha0704/jee-college-predictor" />
            <ProjectCard title="Recommendation System (Web)" desc={`A web‑based recommendation engine implemented in JavaScript to suggest content based on user preferences.`} tech={["JavaScript", "HTML/CSS"]} link="https://github.com/Manvitha0704/Recommendation-System" />
            <ProjectCard title="Portfolio: Codsoft" desc={`Personal portfolio built with HTML, CSS, and JS. Deployed via GitHub Pages.`} tech={["HTML", "CSS", "JavaScript"]} link="https://github.com/Manvitha0704/Portfolio" />
          </div>
        </section>

        <section id="contact" className="mb-5">
          <h2>Contact</h2>
          <p>
            <FaEnvelope /> <a href="mailto:manvithaachan07@gmail.com">manvithaachan07@gmail.com</a>
            <br />
            <FaPhone /> +91-9381459494
          </p>
          <p>
            <a href="https://www.linkedin.com/in/achan-manvitha-b4a1b1305" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <span className="mx-3" />
            <a href="https://github.com/Manvitha0704" target="_blank" rel="noreferrer"><FaGithub /></a>
          </p>
        </section>
      </main>

      <footer className="bg-light py-4">
        <div className="container text-center">
          <small>© {new Date().getFullYear()} Achan Manvitha — Built with React & Bootstrap</small>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ title, desc, tech, link }) {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p>
            {tech.map((t) => (
              <span key={t} className="badge bg-outline-secondary me-2">{t}</span>
            ))}
          </p>
          <a href={link} className="btn btn-primary" target="_blank" rel="noreferrer">View</a>
        </div>
      </div>
    </div>
  );
}
