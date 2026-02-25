import shambaImg from "../assets/projects/shamba.png";
import jadaImg from "../assets/projects/jd.png"; 

const projects = [
  {
    id: "shamba",
    title: "Shamba-Smart",
    description:
      "An API-driven crop management web app that uses live weather and soil moisture data to monitor crop health and support timely farm decisions.",
    stack: ["React", "Flask", "PostgreSQL"],
    image: shambaImg,
    liveUrl: "https://myportfolio-2qm.pages.dev/",
    repoUrl: "https://github.com/machariaElvys/myportfolio",
   caseStudy: {
  subtitle: "Real-time crop health insights powered by weather and soil moisture APIs.",
  overview:
    "Shamba aggregates live farm signals from weather and soil moisture APIs into one dashboard, helping farmers monitor conditions and make timely decisions.",
  problem:
    "Farm conditions can change quickly, but key data is often checked late or from multiple places, which delays action and increases risk to crop health.",
  solution:
    "Shamba centralizes API-fed readings (weather and soil moisture) and presents them clearly so a farmer can assess risk early and respond faster.",
  features: [
    "Live weather data integration for farm planning",
    "Live soil moisture monitoring via API",
    "Dashboard indicators for quick crop-health checks",
    "MVP-ready alerts based on moisture and weather conditions"
  ],
  challenges:
    "Managing API reliability (timeouts, errors, rate limits) and presenting frequent updates in a simple, actionable UI.",
  nextSteps: [
    "Add threshold rules and notifications",
    "Add trends and historical charts for readings",
    "Add crop-specific recommendations and scheduling"
  ]
},
  },

  {
    id: "jada",
    title: "Jada's Art Studio",
    description:
      "Jada Art Studio is a responsive art portfolio web application built to display curated artworks through a structured gallery layout and modal viewing system.",
    stack: ["React", "Flask", ],
    image: jadaImg,
    liveUrl: "https://myportfolio-2qm.pages.dev/",
    repoUrl: "https://jada-portfolio-website-two.vercel.app/",
   caseStudy: {
  subtitle: "A minimalist digital art portfolio showcasing contemporary paintings and visual storytelling.",
  overview:
    "Jada Art Studio is a responsive portfolio website designed to present original artworks in a clean, curated, gallery-style environment. The project focuses on visual hierarchy, calm aesthetics, and intuitive navigation to create an experience similar to viewing art in a physical exhibition space.",
  problem:
    "Many emerging artists lack a dedicated, professional online presence and often rely solely on social media, where artwork presentation is inconsistent and difficult to curate. This limits how their work is perceived and reduces opportunities for commissions or collaborations.",
  solution:
    "Shamba centralizes API-fed readings (weather and soil moisture) and presents them clearly so a farmer can assess risk early and respond faster.",
  features: [
    "Curated gallery grid with modal artwork viewing",
    "Artist statement and portfolio context section",
    "Responsive design across mobile and desktop",
    "Clean navigation with anchored sections"
  ],
  challenges:
    "Balancing visual minimalism with sufficient information hierarchy, and ensuring artwork images remained consistent and well-framed across different screen sizes without distortion or layout shifts.",
  nextSteps: [
    "Add artwork filtering by category or series",
    "Expand portfolio with additional collections",
    "Optimize image loading and performance"
  ]
},
  },
];

export default projects;