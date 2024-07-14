import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `I am a passionate web developer and a final year Computer Science & Engineering student with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Tailwind. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile web developer with a passion for creating efficient and user-friendly web applications. Currently pursuing B.Tech in Computer Science & Engineering at Siliguri Institute of Technology. I have worked with technologies like React and Tailwind. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "Notes Application",
    image: project1,
    description:
      "Notes application using NodeJS & ExpressJS and Tailwind CSS for the frontend. It also comes with a file rename feature.",
    technologies: ["Tailwind", "Node.js", "Express.js"],
  },
  {
    title: "Instagram UI",
    image: project2,
    description:
      "A functional instagram interface using HTML, CSS & JavaScript.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Todo List App",
    image: project3,
    description: "A Todo List app using ReactJS and Tailwind CSS.",
    technologies: ["React", "Tailwind"],
  },

  {
    title: "Weather Application",
    image: project4,
    description:
      "Made a Weather application using HTML, CSS, JavaScript and a weather API. It can change the background according to the city name you type.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Text to Speech Converter",
    image: project5,
    description:
      "Made a Text to Speech Converter using HTML, CSS & JavaScript.It can convert any written text into all the voices avaliable in the device with help of JS.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Portfolio Website",
    image: project6,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind"],
  },
];

export const CONTACT = {
  address: "Siliguri, West Bengal, India",
  phoneNo: "+91 9932416493",
  email: "niladrikarmakar912@gmail.com",
};
