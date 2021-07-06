import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: `Shivam's Portfolio`, // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: `Shivam's Portfolio Website`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Shivam',
  subtitle: `I'm a Full Stack Web Developer`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Computer Science engineering student interested in Full Stack Web Development.',
  paragraphTwo:
    'I can build responsive websites using and learning the latest tech in Web Development. Currently working on the MERN stack for complete web application development and learning flask as well to host ML models on the web.',
  paragraphThree:
    'Interested in opportunities in Web Development field in both front-end and back-end.',
  resume: 'https://drive.google.com/file/d/1YmlbaDQVEr0UdWEnNQT0rQN-U6ngYA2R/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Crypto-Tracker',
    info: 'A web-app that tracks crypto-currency rates.',
    info2: '',
    url: 'https://cryptracker.netlify.app/',
    repo: 'https://github.com/shivam23rawat/crypto-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Weather App',
    info: 'Get the weather from around the world.',
    info2: '',
    url: 'https://reacweather.netlify.app/',
    repo: 'https://github.com/shivam23rawat/react-weather', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'To-Do App',
    info: 'Track your day-to-day tasks with this portable web-app',
    info2: '',
    url: 'https://reac-todo.netlify.app/',
    repo: 'https://github.com/shivam23rawat/todo-react', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Hire me or discuss with me',
  btn: 'Email',
  email: 'shivamrawat2000@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/shivamrawat2000',
    },
    {
      id: nanoid(),
      name: 'whatsapp',
      url: 'https://wa.me/9719017637',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shivam23rawat/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/shivam23rawat',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
