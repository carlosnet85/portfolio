import { FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiCplusplus, SiSpring, SiMysql, SiTailwindcss, SiTypescript, SiPython, SiStyledcomponents, SiGit, SiRedux } from "react-icons/si";
import { IconType } from "react-icons/lib";

export interface SkillData {
    id?: number;
    title: string;
    description: string;
    Icon: IconType;
}

export const skills: SkillData[] = [
    {   
        id: 0,
        title: 'HTML',
        description: 'Stands for HyperText Markup Language. The main reason why you can see everything on world wide web. It is used for the structure of your web pages.',
        Icon: SiHtml5
    },
    {
        id: 1,
        title: 'CSS',
        description: 'Stands for Cascading Style Sheets. It is used for the styling in web pages. Bealtiful, isn\'t it?',
        Icon: SiCss3
    },
    {
        id: 2,
        title: 'JavaScript',
        description: 'A high-level, interpreted programming language. It is mostly used for the behavior/interactivity in web pages.',
        Icon: SiJavascript
    },
    {
        id: 3,
        title: 'React',
        description: 'A JavaScript library for building user interfaces. Component-based architecture, state management, has a virtual DOM, etc.',
        Icon: SiReact
    },

    {
        id: 4,
        title: 'React Native',
        description: 'A framework for building native apps using React. It allows you to build apps for iOS and Android from a single codebase.',
        Icon: TbBrandReactNative
    },
    {
        id: 5,
        title: 'Redux',
        description: 'A predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native).',
        Icon: SiRedux
    },
    {
        id: 6,
        title: 'Git',
        description: 'A version control system for tracking changes in source code during software development.',
        Icon: SiGit
    },
    {
        id: 7,
        title: 'Styled Components',
        description: 'A library for React that allows you to write CSS-in-JS. It allows you to componentize your styles alongside your components. Very weird.',
        Icon: SiStyledcomponents
    },
    {
        id: 8,
        title: 'Java',
        description: 'A high-level, object-oriented programming language. Designed for creating independent and reusable programs.',
        Icon: FaJava
    },
    {
        id: 9,
        title: 'C++',
        description: 'A high-level, general-purpose programming language. Not so much similar to Java. I only use that language inside Arduino projects.',
        Icon: SiCplusplus
    },
    {
        id: 10,
        title: 'Spring',
        description: 'A Java (primarily) open-source framework for building web applications and microservices.',
        Icon: SiSpring
    },
    {
        id: 11,
        title: 'MySQL',
        description: 'The most popular relational database management system. It is used for storing data. Yeah.',
        Icon: SiMysql
    },
    {
        id: 12,
        title: 'Tailwind CSS',
        description: '"Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML." 😲😲😲😲😲😲😲',
        Icon: SiTailwindcss
    },
    {
        id: 13,
        title: 'TypeScript',
        description: 'A superset of JavaScript that adds static types, making code more robust and easier to maintain. It compiles to plain JavaScript.',
        Icon: SiTypescript
    },
    {
        id: 14,
        title: 'Python',
        description: 'a high-level, interpreted programming language known for its simplicity. It is widely used for data science and machine learning.',
        Icon: SiPython
    },


]

