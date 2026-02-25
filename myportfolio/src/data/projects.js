import shambaImg from "../assets/projects/shamba.png";

const projects = [
  {
    id: "shamba",
    title: "Shamba",
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
];

export default projects;