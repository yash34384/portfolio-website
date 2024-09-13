import '@/styles/expe.scss';

interface head {
  topic: string;
  desc: string;
}

export default function ResumeTop({ topic, desc }: head) {
  return (
    <>
      <p className="expe-head">My {topic}</p>
      <p className="expe-desc">{desc}</p>
    </>
  );
}
