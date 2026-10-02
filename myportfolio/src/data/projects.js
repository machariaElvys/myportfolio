const projects = [
  {
    id: "shamba",
    number: "01",
    title: "Shamba-Smart",
    category: "AgriTech · Dashboard",
    status: "Live",
    description:
      "A smart-farming dashboard that simulates sensor readings to model crop health, environmental stress, and irrigation decisions.",
    stack: ["React", "React Router", "Responsive CSS"],
    liveUrl: "https://shamba-smart-epf.pages.dev/",
    repoUrl: "https://github.com/machariaElvys/SHAMBA-SMART",
    caseStudy: {
      overview:
        "Shamba-Smart is a responsive smart-farming prototype. It simulates changing moisture, temperature, and weather values to demonstrate crop monitoring and irrigation decisions without physical sensors.",
      problem:
        "Farmers need clear signals about crop conditions, but real sensor hardware is not always available while a monitoring experience is being prototyped.",
      solution:
        "The app models environmental changes against crop-specific ranges, then updates health scores, alerts, insights, and irrigation actions as conditions change.",
      features: [
        "Crop profiles with editable moisture and temperature ranges",
        "Simulated soil moisture, temperature, and weather readings",
        "Crop-health scores, alerts, and explanatory insights",
        "Manual watering and automatic threshold-based irrigation",
      ],
    },
  },
  {
    id: "farm-management",
    number: "02",
    title: "Farm Record Management System",
    category: "AgriTech · Farm records",
    status: "In development",
    description:
      "A farm-record system for planting, inputs, labour, expenses, harvests, and sales, with yearly summaries and offline-first record sync.",
    stack: ["React + Vite", "FastAPI", "SQLAlchemy", "PostgreSQL / SQLite"],
    repoUrl: "https://github.com/machariaElvys/FARM-MANAGEMENT-SYSTEM",
    caseStudy: {
      overview:
        "A full-stack farm record system for farmer accounts, day-to-day farm entries, and yearly reporting. Its current development scope includes an offline-first workflow.",
      problem:
        "Farm activity records can be difficult to keep together and review over time, especially when connectivity is unreliable.",
      solution:
        "The system organizes farm records for planting, inputs, labour, expenses, harvests, and sales, with report totals and queued offline changes.",
      features: [
        "Farmer registration and token-based login",
        "Search, edit, and delete farm records",
        "Yearly totals for expenses, sales, harvests, and record categories",
        "Offline app shell and queued record changes",
      ],
    },
  },
  {
    id: "jada",
    number: "03",
    title: "Jada’s Art Studio",
    category: "Creative · Portfolio",
    status: "Live",
    description:
      "A calm, gallery-style website that gives an artist’s work room to breathe and makes browsing feel natural.",
    stack: ["React", "Vite", "CSS"],
    liveUrl: "https://jada-portfolio-website-two.vercel.app/",
    repoUrl: "https://github.com/machariaElvys/Artist-Portfolio-Website",
    caseStudy: {
      overview:
        "Jada’s Art Studio is a responsive portfolio made to present original artwork in a curated digital gallery.",
      problem:
        "Social feeds can make artwork difficult to organize and experience as a cohesive collection.",
      solution:
        "A focused gallery layout, artist context, and modal viewing experience create a quieter space for the work.",
      features: [
        "Curated gallery with focused artwork viewing",
        "Artist statement and portfolio context",
        "Responsive layout for desktop and mobile",
      ],
    },
  },
  {
    id: "kitchen-core",
    number: "04",
    title: "Kitchen Core",
    category: "Food · Recipe discovery",
    status: "Live",
    description:
      "A responsive recipe app for browsing, searching, and filtering meals, opening recipe details, and saving favorites.",
    stack: ["React", "React Router", "Vite", "CSS"],
    liveUrl: "https://kitchen-core.machariaelvys.workers.dev/",
    repoUrl: "https://github.com/machariaElvys/Kitchen-Core",
    caseStudy: {
      overview:
        "Kitchen Core is a recipe-discovery website for people looking for everyday meal ideas. It brings featured dishes, recipe browsing, and saved favorites into one responsive experience.",
      problem:
        "Finding a dish that suits the occasion takes more than a long list: people need an easy way to narrow options and return to recipes they like.",
      solution:
        "A routed recipe catalog combines search, category filters, cooking-time details, and a favorites page. A theme control supports both light and dark viewing.",
      features: [
        "Searchable recipe catalog with category filters",
        "Individual recipe detail pages with cooking times",
        "Favorites list for saved recipes",
        "Light and dark theme toggle",
      ],
    },
  },
];

export default projects;
