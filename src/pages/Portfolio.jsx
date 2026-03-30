import React, { useEffect } from 'react'
import Arivu from '../images/Arivu.png'

// project Section add image

import Project from '../images/Project.jpg'
import FoodWebsite from '../images/FoodWebsite.jpg'
import List from '../images/List.jpg'
import WeatherApp from '../images/WeatherApp.jpg'
import Landing from '../images/Landing.jpg'
import Calculator from '../images/Calculator.jpg'
import FAQ from '../images/FAQ.jpg'

import './Home.css'
import Typewriter from 'typewriter-effect'

function Portfolio() {

  return (
    <div className='body'>
      <div id='home' className="container-fluid mt-5 px-0">


        <div className="row align-items-center text-center text-md-start g-0">


          <div className="col-12 col-md-5 mb-4 mb-md-0 px-0">
            <div className='image-wrapper'>
               <div className="blob-outline"></div>
  <div className="blob-outline second"></div>
            <img 
            data-aos="fade-left"
            className='image' src={Arivu} alt="" />
            </div>
          </div>


          <div className="col-12 col-md-7 mb-4 mb-md-0 px-0">
            <h1 data-aos="fade-left">I'm Arivazhagi</h1>

            <h2 className="text-danger fw-bold mt-3">
              <Typewriter
                options={{
                  strings: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>

            <p data-aos="zoom-in" className="mt-4">
              Motivated Full Stack Developer fresher with a strong foundation in front-end
              and back-end technologies. Skilled in building responsive web applications
              using HTML, CSS, JavaScript, and basic backend frameworks.
            </p>
            <a href="/Arivazhagi.pdf" download>
              <button className="btn btn-primary mt-3">
                Resume
              </button>
            </a>
          </div>

        </div>

      </div>

      {/* About Section */}

      <section id='about' className="container mt-5 py-5">

        <div className="row gap-5">
          <div className="col-12 col-md-5">
            <h2 className='about-item'>
              <Typewriter
                options={{
                  strings: ['ABOUT ME 💁‍♀️'],
                  autoStart: true,
                  loop: true,
                }}
              />



            </h2>
            <p data-aos="fade-right" className="about">
              Motivated Full Stack Developer fresher
              with a strong foundation in front-end and back-end technologies. Skilled in building responsive web
              applications using HTML, CSS, JavaScript, and basic backend frameworks. Eager to learn, grow, and
              contribute to real-world software development projects.
            </p>
          </div>

          <div className="col-12 col-md-6 text-danger fw-bold">
            <div className='code-box p-4'>
              <div className='dots mb-3'>

                <pre data-aos="fade-left">
                  <Typewriter
                    options={{
                      delay: 60,
                      autoStart: true,
                      loop: false,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString('<span class="keyword">const</span> <span class="variable">developer</span> = {' + '\n')
                        .typeString('<span class="property">name</span>: <span class="string">"ARIVAZHAGI A"</span>,' + '\n')
                        .typeString('<span class="property">title</span>: <span class="string">"Full Stack Developer"</span>,' + '\n')
                        .typeString('<span class="property">skills</span>: [' + '\n')
                        .typeString('<span class="string">"HTML5"</span>,' + '\n')
                        .typeString('<span class="string">"CSS3"</span>,' + '\n')
                        .typeString('<span class="string">"Javascript"</span>,' + '\n')
                        .typeString('<span class="string">"React.js"</span>' + '\n')
                        .typeString('<span class="string">"Node.js"</span>' + '\n')
                        .typeString('],' + '\n')
                        .typeString('<span class="property">status</span>: <span class="string">"Available for hire"</span>' + '\n')
                        .typeString('};')
                        .start()
                    }}
                  />
                </pre>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* 🔥 Skills Section */}
      <section id="skills" className="skills-section container">

        <h2 className="text-center mb-5 about-item">
          <Typewriter
            options={{
              strings: ['MY SKILLS 💻'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <div className="skills-grid">

          <div data-aos="fade-down" data-aos-delay="100" className="skill-card">HTML5</div>
          <div data-aos="fade-down" data-aos-delay="200" className="skill-card">CSS3</div>
          <div data-aos="fade-down" data-aos-delay="300" className="skill-card">JavaScript</div>
          <div data-aos="fade-down" data-aos-delay="400" className="skill-card">React.js</div>
          <div data-aos="fade-down" data-aos-delay="500" className="skill-card">Bootstrap</div>
          <div data-aos="fade-down" data-aos-delay="600" className="skill-card">Node.js</div>
          <div data-aos="fade-down" data-aos-delay="700" className='skill-card'>Express.js</div>
          <div data-aos="fade-down" data-aos-delay="800" className='skill-card'>MongooDB</div>
          <div data-aos="fade-down" data-aos-delay="900" className='skill-card'>API</div>
          <div data-aos="fade-down" data-aos-delay="1000" className='skill-card'>Vs Code</div>
          <div data-aos="fade-down" data-aos-delay="1100" className='skill-card'>GitHub</div>
          <div data-aos="fade-down" data-aos-delay="1200" className='skill-card'>Canva</div>
          <div data-aos="fade-down" data-aos-delay="1300" className='skill-card'>Power Point</div>
          <div data-aos="fade-down" data-aos-delay="1400" className='skill-card'>Word</div>

        </div>

      </section>

      {/* 🔥 Projects Section */}
      <section id="project" className=" container">

        <h2 className="text-center mb-5 project-item">
          <Typewriter
            options={{
              strings: ['MY PROJECTS 🚀'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>


        <div className="projects-grid">


          <div data-aos="fade-up" className="project-card">
            <img src={Project} alt="" />
            <h4>My Portfolio</h4>
            <p>Personal portfolio website built using HTML and CSS to showcase my skills and projects.</p>
            <a
              href="https://github.com/aarivazhagi17/My-Porfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="visit-btn">Visit</button>
            </a>
          </div>


          <div data-aos="fade-up" className="project-card">
            <img src={FoodWebsite} alt="" />
            <h4>Food Website</h4>
            <p>
              Responsive food website created using HTML and CSS with an attractive landing page design.
            </p>
            <a
              href="https://github.com/aarivazhagi17/work"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="visit-btn">Visit</button>
            </a>
          </div>


          <div data-aos="fade-up" className="project-card">
            <img src={List} alt="" />
            <h4>To-Do List</h4>
            <p>
              Task management application built using JavaScript with add, delete, and update features.
            </p>
            <a
              href="https://github.com/aarivazhagi17/To-Do-List"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="visit-btn">Visit</button>
            </a>
          </div>


          <div data-aos="fade-up" className="project-card">
            <img src={WeatherApp} alt="" />
            <h4>Weather App</h4>
            <p>Live weather data using API integration.</p>
            <a
              href="https://github.com/aarivazhagi17/Weather-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="visit-btn">Visit</button>
            </a>
          </div>


          <div data-aos="fade-up" className="project-card">
            <img src={Landing} alt="" />
            <h4>Landing Page</h4>
            <p>
              Modern landing page developed using HTML and CSS with clean UI and responsive layout.
            </p>
            <a
              href="https://github.com/your-username/your-repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="visit-btn">Visit</button>
            </a>
          </div>


          <div data-aos="fade-up" className="project-card">
            <img src={Calculator} alt="" />
            <h4>Calculator</h4>
            <p>x
              Functional calculator built using HTML, CSS, and JavaScript with complete arithmetic operations.
            </p>
            <a
              href="https://github.com/aarivazhagi17/Calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="visit-btn">Visit</button>
            </a>
          </div>


          <div data-aos="fade-up" className="project-card">
            <img src={FAQ} alt="" />
            <h4>FAQ Section</h4>
            <p>
              Responsive FAQ section created using HTML and CSS with toggle functionality for better user experience.
            </p>
            <a
              href="https://github.com/aarivazhagi17/FAQ-Question"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="visit-btn">Visit</button>
            </a>
          </div>

        </div>

      </section>


      {/* 🔥 Contact Section */}
      <section id="contact" className="contact-section container mt-5">

        <h2 className="text-center mb-5 contact-item">
          <Typewriter
            options={{
              strings: ['CONTACT ME 📩'],
              autoStart: true,
              loop: true,
            }}
          />
        
        </h2>

        <div className="contact-info text-center mb-4">

  {/* Phone */}
  <a href="tel:+91 8870032399">
  <p data-aos="fade-right">📞 +91 8870032399</p>
</a>
  {/* Email */}
  <a href="aarivazhagi17@gmail.com">
  <p data-aos="fade-right">✉️ aarivazhagi17@gmail.com</p>
</a>
  {/* Social Icons */}
  <div className="social-icons mt-3">

    <a href="https://github.com/aarivazhagi17" target="_blank" data-aos="fade-down">
      🐱 GitHub
    </a>

    <a href="https://www.linkedin.com/in/aarivazhagi17/" target="_blank" data-aos="fade-down">
      💼 LinkedIn
    </a>

  </div>

</div>


        <div data-aos="zoom-in" className="contact-box">

          <form>

            <input
              type="text"
              placeholder="Your Name"
              className="form-control mb-3"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="form-control mb-3"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="form-control mb-3"
            ></textarea>

            <button className="btn btn-primary w-100">
              Send Message
            </button>

          </form>

        </div>

      </section>

    </div>
  )
}

export default Portfolio