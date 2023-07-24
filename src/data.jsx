import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { GiPartyPopper } from 'react-icons/gi';

import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1_1.jpg';
import Work2 from './assets/project-2_2.JPG';
import Work3 from './assets/project-3_3.JPG';
import Work4 from './assets/project-4_4.JPG';
import Work5 from './assets/project-5_5.JPG';
import Work6 from './assets/project-6_6.JPG';

import powerbi from './assets/FirstBI1_1.PNG';

import ml1 from './assets/ml-1_1.jpg';
import ml2 from './assets/ml-2_2.jpg';
import ml3 from './assets/ml-3_3.jpg';

import mern1 from './assets/mern1_1.png';
import mern2 from './assets/mern2_2.png';
import mern3 from './assets/mern3_3.png';
import mern4 from './assets/mern4_4.png';

import sem3 from './assets/sem3_3.png';
import sem4 from './assets/sem4_4.jpg';
import sem5 from './assets/sem5_5.png';
import sem6 from './assets/sem6_6.png';

import js1 from './assets/js1_1.png';
import js2 from './assets/js2_2.png';
import js3 from './assets/js3_3.png';
import js4 from './assets/js4_4.png';
import js5 from './assets/js5_5.png';
import js6 from './assets/js6_6.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Akhila',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Anilkumar',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '20 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Location : ',
    description: 'Mumbai, Maharashtra',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+918010896671',
  },

  {
    id: 8,
    title: 'Email:',
    description: 'anilkumarakhila80@mail.com',
  },

  

  {
    id: 9,
    title: 'Langages : ',
    description: 'English, Hindi, Marathi',
  },
];

export const stats = [
  {
    id: 1,
    no: '30+',
    title: 'Projects in <br /> repositories',
  },

  {
    id: 2,
    no: '5+',
    title: 'Months of <br /> Internship',
  },

  {
    id: 3,
    no: '5',
    title: '⭐ in Problem Solving, Hackerrank',
  },

  {
    id: 4,
    no: '4+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Mar,2023 - PRESENT',
    title: 'Software Developer Intern<span>OTET Infosystem, Virar</span>',
    desc: 'Executed full SDLC for CRM project based on client requirements, ensuring seamless development and delivery.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Oct,2022 - PRESENT',
    title: 'President <span>Training & Placement Cell, VCET</span>',
    desc: 'President of T & P Student Cell, driving successful career opportunities and fostering strong industry connections for fellow students.',
  },
  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021- PRESENT',
    title: 'Magazine Editor <span> BYTE Committee, VCET </span>',
    desc: 'Masterfully managing a team of writers and editors, ensuring high-quality and engaging content for the magazine.',
    
  },

  {
    id: 4,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2020 - 2022',
    title: 'Organizing Team <span> Student`s Council, VCET </span>',
    desc: 'Masterfully managing VCET`s cultural events, ensuring vibrant campus engagement and fostering a thriving cultural community.',

  },
 
  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title:'Computer Engineering <span> Mumbai University, CGPI: 9.71 </span>',
    desc: 'Final year student, actively honing technical expertise and practical skills for real-world applications in the dynamic IT industry.',
  },
  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title: 'Honor`s in Data Science <span> Mumbai University, Grade: Pass</span>',
    desc: ' Encompasses a comprehensive study of data analysis, data visualization, and statistical techniques.',
  },

  {
    id: 7,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020',
    title: 'HSC <span> Maharashtra State Board, Grade: 84.77% </span>',
    desc: ' demonstrating successful completion of higher secondary education with a comprehensive range of subjects and achievements.',
  },

  {
    id: 8,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018',
    title: 'SSC <span> Maharashtra State Board, Grade: 93.80% </span>',
    desc: ' showcasing successful completion of secondary education curriculum with diverse subjects and skillsets.',
  },
];

export const achievecourse = [
  {
    id: 1,
    category: 'achievements',
    icon: <GiPartyPopper />,
    year: '17th March, 2023',
    title: '1st Price - Oscillation`23<span>Technical Paper Presentation</span>',
    desc: 'Technical Paper- AI Powered Backpack for Visually Impaired',
  },
  
  {
    id: 2,
    category: 'achievements',
    icon: <GiPartyPopper />,
    year: '6th April, 2023',
    title: '2nd Prize- VNPS`23<span>National Level Project Showcase</span>',
    desc: 'Project- AI based Agri Expert System for Farmers ',
  },
  {
    id: 3,
    category: 'achievements',
    icon: <GiPartyPopper />,
    year: '7th and 8th October, 2022',
    title: '3rd Prize - Multiverse of Hacking`23<span>Hackathon</span>',
    desc: 'Project- Farmer Assistance',
  },
  {
    id: 4,
    category: 'achievements',
    icon: <GiPartyPopper />,
    year: '15th September, 2022',
    title: 'Runner-up - Technical Quiz<span>VCET CSI</span>',
    desc: 'Conducted on Engineer`s Day',
  },
  
 
];


export const powerBi = [
  {
    id: 1,
    img: powerbi,
    title: 'Dashboard',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Sales',
      },
      {
        icon: <FiUser />,
        title: 'View :',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Technology used : ',
        desc: 'PowerBI',
      },
      {
        icon: <FiExternalLink />,
        title: 'Source Code :',
        desc: 'www.github.com',
      },
    ],
    link: "https://github.com/Akhila11802/Sales-Dashboard-PowerBI"
  },

]
export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '85',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '68',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '60',
  },

  {
    id: 4,
    title: 'React',
    percentage: '45',
  },

  {
    id: 5,
    title: 'Nodejs',
    percentage: '40',
  },

  {
    id: 6,
    title: 'Express.js',
    percentage: '40',
  },

  {
    id: 7,
    title: 'MongoDB',
    percentage: '65',
  },

  {
    id: 8,
    title: 'Redis',
    percentage: '10',
  },

  {
    id: 9,
    title: 'PoweBI',
    percentage: '45',
  },

  {
    id: 10,
    title: 'C++',
    percentage: '75',
  },

  {
    id: 11,
    title: 'Java',
    percentage: '65',
  },

  {
    id: 12,
    title: 'Python',
    percentage: '55',
  },

  {
    id: 13,
    title: 'SQL & NoSQL',
    percentage: '70',
  },

  {
    id: 14,
    title: 'MERN',
    percentage: '40',
  },

  {
    id: 15,
    title: 'ML',
    percentage: '65',
  },

  {
    id: 16,
    title: 'DSA',
    percentage: '45',
  },
  {
    id: 17,
    title: 'Communication',
    percentage: '95',
  },

  {
    id: 18,
    title: 'Team Work',
    percentage: '100',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Portfolio',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'My Portfolio',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs',
      },

      
    ],
    link: "https://github.com/Akhila11802"
  },

  {
    id: 2,
    img: Work2,
    title: 'Weather App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Weather App',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      
      
    ],
    link: "https://github.com/Akhila11802/Weather-App"
    
  },

  {
    id: 3,
    img: Work3,
    title: 'Landing Page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Real Estate Landing Page',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs',
      },
    
    ],
    link: "https://github.com/Akhila11802/Real-Estate-Landing-Page",

  },

  {
    id: 4,
    img: Work4,
    title: 'Showcase Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Car Showcase Website',
      },
     
      {
        icon: <FaCode />,
        title: ' Technology : ',
        desc: 'ReactJs',
      },
     
    ],
    link: "https://github.com/Akhila11802/Car-Showcase-Website"

  },

  {
    id: 5,
    img: Work5,
    title: 'Note Making',
    details: [
      {
        title: 'Project : ',
        desc: 'Note Making App',
      },
      {
        icon: <FaCode />,
        title: ' Technology : ',
        desc: 'ReactJs',
      },
     
     
    ],
    link: "https://github.com/Akhila11802/Notes-Making-WebApp"

  },

  {
    id: 6,
    img: Work6,
    title: 'Billing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Invoice Generator',
      },
      
      {
        icon: <FaCode />,
        title: ' Technology : ',
        desc: 'ReactJs',
      },
     
      
    ],
    link: "https://github.com/Akhila11802/Invoiceer",

  },
];
export const mlp = [
  {
    id: 1,
    img: ml1,
    title: 'Prediction',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Taxi Trip Fare Prediction',
      },
     
      {
        icon: <FaCode />,
        title: 'Technology : ',
        desc: 'Machine Learning, Python',
      },
      
    ],
    link: "https://github.com/Akhila11802/Taxi-Trip-Fare-prediction-"

  },
  {
    id: 2,
    img: ml2,
    title: 'Prediction',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Diabetes Prediction',
      },
      
      {
        icon: <FaCode />,
        title: 'Technology : ',
        desc: 'Machine Learning, Python',
      },
    ],
    link: "https://github.com/Akhila11802/Diabetes-prediction"
  },
  {
    id: 3,
    img: ml3,
    title: 'Farmer Assistance',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Farmer Assistance',
      },
      
     
      {
        icon: <FaCode />,
        title: 'Technology : ',
        desc: 'Machine Learning, Python',
      },
      {
        icon: <FiExternalLink />,
        title: 'Hackathon Pitching Live: ',
        desc: 'https://www.youtube.com/watch?v=QWxy0LOHavA&t=7039s',
      },

      {
        icon: <FiExternalLink />,
        title: 'TImestamp of Live Stream: ',
        desc: '1hr:47min',
      },
    ],
    link: "https://github.com/PRATHAM-SPS/Metadata-Farmer-Assistance-WebApp"

  },
]
export const mern = [
  {
    id: 1,
    img: mern1,
    title: 'AI Image Generator',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'AI Image Generator',
      },
     
      {
        icon: <FaCode />,
        title: 'Technology : ',
        desc: 'MERN',
      },
    
    ],
    link: "https://github.com/Akhila11802/AI-Image-Generator"

  },
  {
    id: 2,
    img: mern2,
    title: 'Admin Dashboard',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Admin Dashboard',
      },
      
      {
        icon: <FaCode />,
        title: 'Technology : ',
        desc: 'MERN',
      },
       
    ],
    link: "https://github.com/Akhila11802/Sales-Dashboard-using-mern"
  },
  {
    id: 3,
    img: mern3,
    title: 'Netflix Clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Netflix Clone',
      },
  
      {
        icon: <FaCode />,
        title: 'Technology : ',
        desc: 'MERN',
      },
      
    ],
    link: "https://github.com/Akhila11802/Netflix-clone"

  },

  {
    id: 4,
    img: mern4,
    title: 'Internship',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Customer Relationship Management',
      },
      {
        icon: <FiUser />,
        title: 'Company : ',
        desc: 'OTET Infosystem',
      },
      {
        icon: <FaCode />,
        title: 'Technology : ',
        desc: 'MERN',
      },
      
    ],
    link: "#"

  },
]

export const jsp =[
  {
    id: 1,
    img: js1,
    title: 'Code Editor',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Live Code Editor',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, Javascript',
      },
      
    ],
    link: "https://github.com/Akhila11802/Live-Code-Editor"

  },
  {
    id: 2,
    img: js2,
    title: 'Tour & Travel',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Tour & Travel Website',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, Javascript',
      },
      
    ],
    link: "https://github.com/Akhila11802/Tour-and-Travel"

  },
  {
    id: 3,
    img: js3,
    title: 'Movie Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Movie Website',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, Javascript',
      },
    ],
    link: "https://github.com/Akhila11802/Movie-website://github.com/Akhila11802"

  },
  {
    id: 4,
    img: js4,
    title: 'QR Generator',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'QR Generator',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, Javascript',
      },
      
    ],
    link: "https://github.com/Akhila11802/QR-Code-Generator"

  },
  {
    id: 5,
    img: js5,
    title: 'Snake Game',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Snake Game',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, Javascript',
      },
     
    ],
    link: "https://github.com/Akhila11802/Snake-game"

  },
  {
    id: 6,
    img: js6,
    title: 'Password Generator',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Password Generator',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, Javascript ',
      },
      
    ],
    link: "https://github.com/Akhila11802/Password-Generator"

  },

  
]

export const sem = [
  {
    id: 1,
    img: sem3,
    title: 'Semester 3',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Bank Application',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Java',
      },
      
    ],
    link: "https://github.com/Akhila11802/Bank-Application"

  },
  {
    id: 2,
    img: sem4,
    title: 'Semester 4',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Pet-Shop',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, Javascript. php, mySQL',
      },
      
    ],
    link: "https://github.com/Akhila11802/Pet-Shop"
  },
  {
    id: 3,
    img: sem5,
    title: 'Semester 5',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Forest Fire Detection',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Python',
      },
      
    ],
    link: "https://github.com/Akhila11802/Forest-Fire-Detection"

  },

  {
    id: 4,
    img: sem6,
    title: 'Semester 6',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Customer Relationship Management',
      },
      {
        icon: <FiUser />,
        title: 'Company: ',
        desc: 'OTET Infosystem',
      },
      {
        icon: <FaCode />,
        title: 'Technology : ',
        desc: 'MERN',
      },
      
    ],
    link: "https://github.com/Akhila11802"

  },
]

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
