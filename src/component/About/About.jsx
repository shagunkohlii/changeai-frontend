import React from 'react';
import './About.css';
import { FaRobot, FaHeadset, FaChartLine, FaClock } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Empowering businesses with AI-powered chatbot solutions</p>
      </div>

      <div className="mission">
        <h2>Our Mission</h2>
        <p>
          At ChangeAI, we aim to revolutionize customer support and business operations using smart chatbot automation.
          Our goal is to reduce manual workload, increase efficiency, and improve client satisfaction.
        </p>
      </div>

      <div className="services-grid">
        <div className="card">
          <FaRobot className="icon" />
          <h3>AI Chatbots</h3>
          <p>Automate conversations with intelligent chatbot flows.</p>
        </div>
        <div className="card">
          <FaHeadset className="icon" />
          <h3>Customer Support</h3>
          <p>24/7 instant replies to your customers’ queries.</p>
        </div>
        <div className="card">
          <FaChartLine className="icon" />
          <h3>Analytics</h3>
          <p>Track user interactions and improve your service with insights.</p>
        </div>
        <div className="card">
          <FaClock className="icon" />
          <h3>Task Automation</h3>
          <p>Free up your team by automating repetitive tasks.</p>
        </div>
      </div>

      <div className="cta">
        <h2>Let’s automate your business today</h2>
        <button>Get Started</button>
      </div>
    </section>
  );
};

export default About;
