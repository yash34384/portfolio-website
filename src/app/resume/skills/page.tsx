import ResumeTop from '@/components/resumeTop';
import './skills.scss';

const allSkills = [
  {
    name: 'HTML5',
    logo: 'devicon-html5-plain-wordmark'
  },
  {
    name: 'CSS3',
    logo: 'devicon-css3-plain-wordmark'
  },
  {
    name: 'JavaScript',
    logo: 'devicon-javascript-plain'
  },
  {
    name: 'MongoDB',
    logo: 'devicon-mongodb-plain-wordmark'
  },
  {
    name: 'Express JS',
    logo: 'devicon-express-original'
  },
  {
    name: 'React JS/Native',
    logo: 'devicon-react-original'
  },
  {
    name: 'Node JS',
    logo: 'devicon-nodejs-plain-wordmark'
  },
  {
    name: 'Sass',
    logo: 'devicon-sass-original'
  },
  {
    name: 'MySQL',
    logo: 'devicon-mysql-plain-wordmark'
  },
  {
    name: 'Tailwind',
    logo: 'devicon-tailwindcss-original'
  },
  {
    name: 'C++',
    logo: 'devicon-cplusplus-plain'
  },
  {
    name: 'Zoho Suite',
    logo: ''
  }
];

export default function Skills() {
  return (
    <section className="skill">
      <ResumeTop
        topic="My skills"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quia perferendis inventore necessitatibus ad."
      />
      <div className="skill-main">
        {allSkills.map(ele => (
          <abbr key={ele.name} title={ele.name} className="skill-box">
            <i className={ele.logo}></i>
          </abbr>
        ))}
      </div>
    </section>
  );
}

// export const skillBox = () => {
//   return ()
// }
