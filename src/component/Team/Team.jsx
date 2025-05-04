import React from "react";
import "./Team.css";
import shagunimg from '../../assets/Shagun.jpeg'

const teamMembers = [
  {
    name: "Shagun",
    role: "Frontend Developer",
    image: shagunimg,
  },
  {
    name: "Aarav",
    role: "UI/UX Designer",
    image: shagunimg,
  },
  {
    name: "Maya",
    role: "Backend Developer",
    image: shagunimg,
  },
  {
    name: "Karan",
    role: "React Developer",
    image: shagunimg,
  },
  {
    name: "Isha",
    role: "Product Manager",
    image: shagunimg,
  },
  {
    name: "Dev",
    role: "QA Engineer",
    image: shagunimg,
  },
  {
    name: "Ananya",
    role: "Content Strategist",
    image: shagunimg,
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
