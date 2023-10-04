import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Saharsh Patel',
  title: "Hi all, I'm Saharsh",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications and Blockchain development",
  resumeLink:
    'https://drive.google.com/file/d/1xha4CmDTGNUk6nY3BpbEqemVqts1T0S6/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'SaharshPatel24',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/saharsh-patel-767554239/',
  github: 'https://github.com/SaharshPatel24',
  instagram: 'https://www.instagram.com/itzz_ares.24/',
  facebook: 'https://www.facebook.com/saharsh.patel.524s',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Typescript',
          fontAwesomeClassName: 'vscode-icons:file-type-typescript',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Nodejs',
          fontAwesomeClassName: 'logos:nodejs',
        },
        {
          skillName: 'Flask',
          fontAwesomeClassName: 'logos:flask',
        },
        {
          skillName: 'Prisma',
          fontAwesomeClassName: 'logos:prisma',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassName: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassName: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassName: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassName: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          fontAwesomeClassName: 'logos:ganache-icon',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          fontAwesomeClassName: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Web Development',
    progressPercentage: '90', 
  },
  {
    Stack: 'Blockchain', 
    progressPercentage: '80', 
  },
  {
    Stack: 'Artificial Intelligence',
    progressPercentage: '50',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Seneca College',
    subHeader: 'Computer Programming and Analysis',
    duration: 'May 2021 - Present',
    desc: 'Participated in the hackathons and learned programming',
    grade: 'Grade A',
    descBullets: [
      'Acquired a comprehensive understanding of Data Structures and Algorithms.',
      'Applied OOP concepts in various programming projects and assignments.',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Developer',
    company: 'DMG Blockchain Solutions inc.',
    companyLogo: '/img/icons/common/DMG.jpg',
    date: 'Sept 2022 – April 2023',
    desc: '',
    // descBullets: [
    // 	"Developed efficient, scalable, and high-performance web applications using NEXT.js and Fastify frameworks.",
    // 	"Skilled in writing clean, maintainable, and reusable code in Python for various backend functionalities and APIs.",
    //   "Successfully built and implemented Redis caching mechanisms to enhance application performance and improve response times."
    // ],
  },
  {
    role: 'React Developer',
    company: 'Western Illinois University',
    companyLogo: '/img/icons/common/wlogo.jpg',
    date: 'May 2023 - Present',
    desc: '',
    // descBullets: [
    // 	"Worked closely with the design team to implement responsive and user-friendly interfaces",
    // 	" Collaborated with the back-end team to integrate the applications with RESTful APIs",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Portfolio',
    img: '/img/icons/common/portfolio.jpg',
    desc: 'Experience my creative journey through captivating design and innovative projects on my portfolio website, where I showcase my diverse skill set and passion for problem-solving. Explore a world of inspiration and see how I turn ideas into reality.',
    link: 'https://saharshpatel.vercel.app/',
  },
  {
    name: 'Social Pilot',
    img: '/img/icons/common/social-pilot.jpg',
    desc: 'Our blockchain-powered social media platform puts you in control of your data, rewards you for your contributions, and connects you with a vibrant community of like-minded individuals. Experience the future of social media today.',
    link: 'https://social-pilot.vercel.app/',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Decentralized Applications (Dapps)',
    desc: 'University at Buffalo',
    link: 'https://coursera.org/share/7f41a30ca7de753112ab9274d54229e3',
  },
  {
    name: 'Smart Contracts',
    desc: 'University at Buffalo',
    link: 'https://coursera.org/share/d2ced0843d06961d665498cb703e75af',
  },
  {
    name: 'Back End Development and APIs',
    desc: 'freeCodeCamp',
    link: 'https://freecodecamp.org/certification/Saharsh24/back-end-development-and-apis',
  },
  {
    name: 'JavaScript Algorithms and Data Structures',
    desc: 'freeCodeCamp',
    link: 'https://freecodecamp.org/certification/Saharsh24/javascript-algorithms-and-data-structures',
  },
];

export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Saharsh Patel',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Saharsh Patel',
  image: 'https://avatars.githubusercontent.com/u/96026220?v=4',
  url: 'https://saharshpatel.vercel.app/',
  keywords: [
    'Saharsh',
    'Saharsh Patel',
    '@SaharshPatel24',
    'SaharshPatel24',
    'Portfolio',
    'Saharsh Portfolio ',
    'Saharsh Patel Portfolio',
  ],
};
