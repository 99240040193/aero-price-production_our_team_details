import "./TeamSection.css";

const teamMembers = [
  {
    
    name: "Ankit Kumar",
    role: "Team Lead",
    photo: "/images/team/image1.jpeg",
    linkedin: "https://www.linkedin.com/in/ankitkrsingh07",
    github: "https://github.com/Thunderdoc",
    email: "ankitraj2163@gmail.com",
    instagram: "https://www.instagram.com/kr_ankit_05/",
  },

  {
    
    name: "Narasimha",
    role: "Computer Vision Developer",
    photo: "/images/team/image2.jpeg",
    linkedin:
      "https://www.linkedin.com/in/narasimha-appikatla-7a7b70327/",
    github: "https://github.com/massgravel/Microsoft-Activation-Scripts",
    email: "durganarasimhaappikatla@gmail.com",
    instagram:
      "https://www.instagram.com/_rich_kid_narasimha/",
  },

  {
    
    name: "Ravi Ranjan",
    role: "Full Stack Developer",
    photo: "/images/team/image3.jpeg",
    linkedin:
      "https://www.linkedin.com/in/ravi-ranjan-135172335",
    github: "https://github.com/Raviranjan7061",
    email: "raviranjan706187@gmail.com",
    instagram:
      "https://www.instagram.com/mrrr_ravi_/",
  },

  {
    
    name: "Anand S",
    role: "AI / ML Developer",
    photo: "/images/team/image4.jpeg",
    linkedin: "https://www.linkedin.com/in/anand57",
    github: "https://github.com/anand57577-lab/",
    email: "anand.57577@gmail.com",
    instagram:
      "https://www.instagram.com/anand_the_chaser_/",
  },

  {
    
    name: "Ammu Kumari",
    role: "Backend Developer",
    photo: "/images/team/image5.jpeg",
    linkedin:
      "https://www.linkedin.com/in/ammu-kumari-354040318/",
    github: "https://github.com/ammu1348",
    email: "ammukumari7359@gmail.com",
    instagram:
      "https://www.instagram.com/ammu____2508/",
  },

  {
    
    name: "Nicepreet Kour",
    role: "UI / UX Developer",
    photo: "/images/team/image6.jpeg",

    // Replace these with Nicepreet's actual details
    linkedin: "https://www.linkedin.com/in/friendusername",
    github: "https://github.com/friendusername",
    email: "friend@gmail.com",
    instagram: "https://www.instagram.com/friendusername/",
  },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.75-2-5.5-4.67-5.5-2.15 0-3.1 1.18-3.63 2.01V8.5H9.2V21h3.5v-6.2c0-1.64.31-3.23 2.34-3.23 2 0 2.02 1.87 2.02 3.34V21H21v-7.15Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2.18c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.58-.3-5.29-1.29-5.29-5.73 0-1.27.45-2.3 1.2-3.11-.12-.3-.52-1.56.11-3.08 0 0 .98-.31 3.16 1.19a10.94 10.94 0 0 1 5.76 0c2.18-1.5 3.15-1.19 3.15-1.19.63 1.52.24 2.78.12 3.08.75.81 1.2 1.84 1.2 3.11 0 4.45-2.72 5.42-5.31 5.71.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M3 5h18v14H3V5Zm1.5 1.5v.2l7.5 5.4 7.5-5.4v-.2h-15Zm15 2.05-7.5 5.38-7.5-5.38V17.5h15V8.55Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M7.2 2.5h9.6A4.7 4.7 0 0 1 21.5 7.2v9.6a4.7 4.7 0 0 1-4.7 4.7H7.2a4.7 4.7 0 0 1-4.7-4.7V7.2a4.7 4.7 0 0 1 4.7-4.7Zm0 1.7A3 3 0 0 0 4.2 7.2v9.6a3 3 0 0 0 3 3h9.6a3 3 0 0 0 3-3V7.2a3 3 0 0 0-3-3H7.2Zm9.9 1.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.7a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Z" />
    </svg>
  );
}

function TeamCard({ member }) {
  return (
    <div className="team-card">

      <div className="node-label">
        {member.id}
        <span>● ACTIVE</span>
      </div>

      <div className="profile-wrapper">

        <img
          src={member.photo}
          alt={member.name}
          className="profile-image"
        />

        <div className="role-badge">
          &lt;/&gt;
        </div>

      </div>

      <h3>{member.name}</h3>

      <div className="name-line"></div>

      <p className="member-role">
        {member.role}
      </p>

      <div className="social-links">

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <LinkedInIcon />
        </a>

        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <GitHubIcon />
        </a>

        <a
          href={`mailto:${member.email}`}
          title={`Email ${member.name}`}
        >
          <MailIcon />
        </a>

        <a
          href={member.instagram}
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <InstagramIcon />
        </a>

      </div>

    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="team-section">

      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <div className="tech-line line-one"></div>
      <div className="tech-line line-two"></div>

      <div className="hero-content">

        <div className="section-tag">
          AI • ENGINEERING • INNOVATION
        </div>

        <h1>
          Meet Our <span>Team</span>
        </h1>

        <div className="title-line"></div>

        <p>
          The people behind the intelligence,
          engineering innovative solutions for
          real-world challenges.
        </p>

      </div>

      <div className="team-grid">

        {teamMembers.map((member) => (
          <TeamCard
            key={member.id}
            member={member}
          />
        ))}

      </div>

      <div className="team-bottom">

        <div className="bottom-status">
          <span></span>
          SYSTEM ONLINE
        </div>

        <h2>
          ONE TEAM.
          <span> ONE INTELLIGENT SOLUTION.</span>
        </h2>

        <p>
          Combining AI, engineering, research and creativity
          to solve real-world problems.
        </p>

      </div>

    </section>
  );
}