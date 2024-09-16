import ResumeBoxes from '@/components/resumeBoxes';
import ResumeTop from '@/components/resumeTop';
import './expe.scss';

export default function Experience() {
  return (
    <section className="expe">
      <ResumeTop
        topic="My experience"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quia perferendis inventore necessitatibus ad."
      />
      <div className="expe-main">
        <ResumeBoxes
          year="2024 - current"
          role="Software Developer"
          com="CRM Masters Infotech"
        />
      </div>
    </section>
  );
}
