import './resume.scss';
import Link from 'next/link';

interface button_options {
  link: string;
  name: string;
}

const resume_option_btn: button_options[] = [
  {
    link: '/resume',
    name: 'Experience'
  },
  {
    link: '/resume/education',
    name: 'Education'
  },
  {
    link: '/resume/skills',
    name: 'Skills'
  },
  {
    link: '/resume/certifications',
    name: 'Certifications'
  }
];

export default function Resume({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="resume">
      <main className="resume-main">
        <aside className="resume-options">
          <p className="resume-ask">Why hire me?</p>
          <p className="resume-pitch">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor odio
            exercitationem
          </p>
          {resume_option_btn.map(ele => (
            <Resume_btn key={ele.name} link={ele.link} name={ele.name} />
          ))}
        </aside>
        <aside className="resume-desc">{children}</aside>
      </main>
    </section>
  );
}

export const Resume_btn = ({ link, name }: button_options) => {
  return (
    <Link href={link} className="resume-btn">
      {name}
    </Link>
  );
};
