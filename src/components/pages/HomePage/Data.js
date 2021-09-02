import image1 from "../../assests/images/banner.png"
import image2 from "../../assests/images/banner2.png"
import image3 from "../../assests/images/graph.png"
import image4 from "../../assests/images/lockss.png"
import image5 from "../../assests/images/locks.jpg"

export const homeObjOne = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Lorem',
  headline: 'Vulnerability Assessment & Penetration Testing (VAPT)',
  description:
    'Secure your Web Application from the Cyber Attacks',
  buttonLabel: '',
  imgStart: '',
  img: image1,
  alt: 'Credit Card'
};

export const homeObjTwo = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'sit amet',
  headline: 'VAPT Services',
  description:'',
  descriptionArr:["Application Security","Network Security","Database Security","Host Security"],
  buttonLabel: 'See More',
  imgStart: '',
  img: image2,
  alt: 'Vault',
  redirectPage:"/services"
};

export const homeObjThree = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'lorem',
  headline: 'VAPT',
  description:
  "A vulnerability assessment is a systematic review of security weaknesses in an information system. It evaluates if the system is susceptible to any known vulnerabilities, assigns severity levels to those vulnerabilities, and recommends remediation or mitigation, if and whenever needed.",
  buttonLabel: 'See More',
  imgStart: 'start',
  img: 'images/svg-7.svg',
  alt: 'Vault',
  redirectPage:"/vapt"
};

export const homeObjFour = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'dolor sit amet',
  headline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  description:
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  buttonLabel: 'See More',
  imgStart: '',
  img: image3,
  alt: 'Vault'
};

export const homeObjFive = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'dolor sit amet',
  headline: 'About Us',
  description:
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  buttonLabel: 'See More',
  imgStart: 'start',
  img: image4,
  alt: 'Vault',
  redirectPage:"/aboutus"
};

export const homeObjSix = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'dolor sit amet',
  headline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  buttonLabel: 'See More',
  imgStart: 'start',
  img: image5,
  alt: 'Vault'
};
