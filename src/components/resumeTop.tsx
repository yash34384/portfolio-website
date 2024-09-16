import '@/styles/resumeTop.scss';

interface head {
  topic: string;
  desc: string;
}

export default function ResumeTop({ topic, desc }: head) {
  return (
    <>
      <p className="head">{topic}</p>
      <p className="desc">{desc}</p>
    </>
  );
}
