export const projects = [
  {
    id: 1,
    name: "My-Pharmacy",
    picture: "/assets/projects/Image_not_available.png",
    live_view: null,
    description: `A pharmacy management app built with Laravel,Livewire, Bootstrap and MySQL.
      The app allows the user to manage the pharmacy's inventory, sales, and users.
      The app also includes a dashboard that displays the pharmacy's sales and inventory.
      The app is still under development.`,
    techs_used: ["Laravel", "Livewire", "Bootstrap", "MySQL"],
  },
  {
    id: 2,
    name: "Agv Control Panel",
    picture: "/assets/projects/Image_not_available.png",
    live_view: null,
    description: `A control panel for an AGV (Automated Guided Vehicle) built with django, sass, bootstrap, and MySQL.
      The control panel allows the user to manage the AGV's tasks, routes, blocs and users.
      The control panel also includes a dashboard that displays the AGV's statistics using chart.js and matplotlip libraries.
      `,
    techs_used: [
      "Django",
      "Sass",
      "Bootstrap",
      "MySQL",
      "Chart.js",
      "Matplotlib",
    ],
  },
  {
    id: 3,
    name: "Task Management",
    //todo: add picture
    picture: "/assets/projects/task-management.png",
    code: "https://github.com/OussamaElm0/ToDoApp",
    live_view: "https://to-do-app-plum-psi.vercel.app/",
    description:
      "A simple task management app built with ReactJS and Local Storage.",
    techs_used: ["ReactJS", "Local Storage"],
  },
  {
    id: 4,
    name: "Color Generator",
    picture: "/assets/projects/color-generator.png",
    code: "https://github.com/OussamaElm0/Color-Generator",
    live_view: "https://oussamaelm0.github.io/Color-Generator/",
    description: "A simple color generator app built with ReactJS.",
    techs_used: ["jQuery"],
  },
  {
    id: 5,
    name: "Quiz App",
    picture: "/assets/projects/quiz-app.png",
    code: "https://github.com/OussamaElm0/Quiz-App",
    live_view: "https://qa-oussamaelm.netlify.app/",
    description: "A simple quiz app built with ReactJS and TriviaAPI.",
    techs_used: ["ReactJS", "TriviaAPI"],
  },
];