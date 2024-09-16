import '@/styles/resumeBoxes.scss';

interface Boxes {
  year: string;
  role: string;
  com: string;
  link?: string;
}

export default function ResumeBoxes({ year, role, com, link }: Boxes) {
  return (
    <>
      {link ? (
        <a
          href={link}
          className="box"
          target="_blank"
          style={{ cursor: 'pointer' }}
        >
          <InnerContent year={year} role={role} com={com} />
        </a>
      ) : (
        <article className="box">
          <InnerContent year={year} role={role} com={com} />
        </article>
      )}
    </>
  );
}

export const InnerContent = ({ year, role, com }: Boxes) => {
  return (
    <>
      <div>
        <p className="year">{year}</p>
        <p className="role">{role}</p>
      </div>
      <p className="com">{com}</p>
    </>
  );
};
