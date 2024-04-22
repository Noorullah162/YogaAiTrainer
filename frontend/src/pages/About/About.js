import React from 'react'

import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">About</h1>
            <div className="about-main">
                <p className="about-content">
                Welcome to Yoga AI Trainer, your personalized yoga assistant powered by cutting-edge technology. 
                Our platform harnesses the power of MoveNet and advanced neural networks to revolutionize 
                how you practice yoga.
                </p>

                <div className="developer-info">
                    <h4>Our Journey</h4>
                    <p className="about-content">
                    Yoga AI Trainer originated from the innovative MoveNet project, 
                    designed to enhance human-machine interaction through motion tracking. 
                    Leveraging this technology, we developed a sophisticated neural network capable of accurately 
                    interpreting yoga poses in real-time.
                    </p>
                </div>

                <div className="developer-info">
                    <h4>How It Works</h4>
                    <p className="about-content">
                     Using our proprietary AI model, 
                    Yoga AI Trainer achieves an impressive accuracy rate of 95% in identifying and 
                    analyzing yoga postures. This accuracy ensures reliable feedback and guidance throughout your yoga practice.
                    </p>
                </div>

                <div className="developer-info">
                    <h4>Integration with Web Application</h4>
                    <p className="about-content">
                    We have seamlessly integrated Yoga AI Trainer into a user-friendly web application 
                    built with React.js. This integration provides a smooth and interactive experience, 
                    allowing users to access our AI-powered yoga assistant directly from their browsers.
                    </p>
                </div>
                
                <div className="developer-info">
                    <h4>Meet the Team</h4>
                    <p className="about-content">
                        Yoga AI Trainer is the brainchild of <span className='Names'>Noorullah Mohammad</span>,
                        a seasoned Full Stack and AI Developer, and his talented team including 
                       <span className='Names'>Tarun</span>  and <span className='Names'>Naga Laskhmi</span>. Together, we combine our expertise in software development 
                        and artificial intelligence to create innovative solutions for health and wellness.
                    </p>
                    <h4>Contact</h4>
                    <a href="https://www.linkedin.com/in/noorullah-mohammad-640a61222/"><p className="about-content">LinkedIn</p></a>
                    <a href="https://github.com/Noorullah162/YogaAiTrainer"><p className="about-content">GitHub</p></a>
                </div>
            </div>
        </div>
    )
}
