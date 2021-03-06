import DownloadLink from "react-download-link";
import { Link } from 'react-router-dom';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'ABOUT',
  headLine: 'JUNSOENG LEE',
  description: 'Also called as Eddie. I\'m a recent graduate of Queens College CUNY with Bachelor\'s degree in CS. I\'m currently working in Antra Inc. as Frontend intern developer. If you would like to know more about me please press \'Get started\'!',
  buttonLabel: 'Get started',
  imgStart: false,
  img: require('../../images/profile.jpg').default,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false
}

export const homeObjTwo = {
  id: 'resume',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'RESUME',
  headLine: 'Thanks for your interest',
  description: 'Please click \'Here\' to view larger !',
  buttonLabel: <Link to = 'https://github.com/joych51/portfolio/blob/main/JUNSOENG%20LEE%20Resume.pdf' style = {{color: "white", textDecoration: "none"}}>Move</Link>,
  imgStart: true,
  img: require('../../images/resume.png').default,
  alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true
}

export const homeObjThree = {
  id: 'experience',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'EXPERIENCE',
  headLine: 'Frontend Developer(Intern) at Antra',
  description: 'Currently working for Antra as part of a team to manipulate websites for dynamic interfaces.',
  buttonLabel: 'For more',
  imgStart: false,
  img: require('../../images/svg-5.svg').default,
  alt: 'Paper',
  dark: false,
  primary: false,
  darkText: true
}
