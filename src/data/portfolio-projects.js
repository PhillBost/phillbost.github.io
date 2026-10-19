import Pharoah from "../assets/img/roboclimb.jpg";
import Swerve from "../assets/img/swerve2021.jpg";
import Billboard from "../assets/img/Billboard-Logo.png";
import PaddedOracle from "../assets/img/padded_oracle.png";
import Art from "../assets/img/shelly_art.jpg";

const portfolioProjects = [
  {
    name: "Pharoah",
    image: Pharoah,
    description:
      "Pharoah is a tele-operated competition robot programmed in Java. The bot competed in the 2020 FIRST robotics competition, where it was ranked 22nd in the State before the season was canceled due to COVID-19. Pharaoh was designed to be sturdy, with the ability to collect and shoot multiple foam 'power cells' using a flywheel. The robot also had two carbon fiber arms and a hook, which it used to hoist itself up onto a bar to score endgame points. The bot's software featured a fully autonomous mode, automatic aim adjustment using computer vision, and flywheel speed adjustment dependent on distance from the target and current load. Completing this robot's code required working closely with teams specializing in both mechanical and electrical engineering, and proved to be a fun way to introduce myself to writing clean code on a complex system.",
  },
  {
    name: "Swerve-2021",
    image: Swerve,
    description:
      "Swerve-2021 is an updated version of the robot 'sidestep', which was built and programmed in 2016. The bot utilizes a drivetrain in which each wheel has adjustable headings and speeds, each of which is tracked by encoders (basically a motorized shopping cart!). The project was a fantastic way to gain a better understanding of robot software and telemetry (and a lot of math).",
  },
  {
    name: "Billboard",
    image: Billboard,
    description:
      "Billboard is a web application I designed with a team of four other programmers as a part of a software engineering course in my undergrad curriculum. Developed using React and Django, Billboard is a platform for viewing congressional actions in real time, and provides the base of a social media app where all posts are pulled directly from congress.gov. Designed with the purpose of utilizing software to bolster political awareness and readability, users could add friends, comment, and select congress members whose daily congressional actions would be highlighted on their dashboard. The app was built using a relational database built from Congress API, which allowed for easy selection of bills and congress members into the front end.",
  },
  {
    name: "Padded Oracle",
    image: PaddedOracle,
    description:
      "While studying cybersecurity, I developed a padded oracle attack tool in Python. The tool is designed to efficiently decipher encrypted plaintext using a technique that involves receiving input after entering an incorrectly formatted passcode. The project was a great way to explore cryptographic principles, efficiency, and algorithmic complexity.",
  },
  {
    name: "shellyoliveira.com",
    image: Art,
    description:
      "https://shellyoliveira.com. I designed and built this website for my mother. The site was built using React, TailwindCSS, and API integration from Cloudinary and Shopify. It also features a custom-built gallery with a lightbox effect. The site was designed to be responsive and mobile-friendly, and features a clean and modern design that showcases Shelly's artwork. The backend is structured in such a way that it can be easily updated with new artwork from a cloudinary library."
  }
];

export default portfolioProjects;
