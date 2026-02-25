import shambaImg from "../assets/projects/shamba.png";

const projects = [
  {
    id: "shamba",
    title: "Shamba",
    description:
      "A crop management web app that uses real-time signals like weather and soil moisture to help farmers monitor crop health and make timely decisions.",
    stack: ["React", "Flask", "PostgreSQL"],
    image: shambaImg,
    liveUrl: "",
    repoUrl: "",
    caseStudy: {
      subtitle:
        "Real-time crop health monitoring using weather and soil moisture data.",
      overview:
        "Shamba supports farmers by monitoring key indicators that affect crop health. It brings weather and soil moisture data into one place to help farmers respond early and manage crops more effectively.",
      problem:
        "Farm decisions are often made late because it is hard to track changing field conditions consistently. Weather shifts and soil moisture changes can affect crop health quickly.",
      solution:
        "Shamba centralizes real-time farm signals like weather and soil moisture so a farmer can quickly assess conditions, detect risk, and take action at the right time.",
      features: [
        "Dashboard view of key crop-health indicators",
        "Weather insights relevant to farm decisions",
        "Soil moisture monitoring to detect under-watering risk",
        "Simple health status indicators and alerts (MVP-ready)",
      ],
      challenges:
        "Ensuring data is reliable and timely, and presenting it in a simple way that is easy to act on.",
      nextSteps: [
        "Add notification rules for moisture thresholds",
        "Improve trends and historical charts for readings",
        "Add crop-specific recommendations and scheduling",
      ],
    },
  },
];

export default projects;