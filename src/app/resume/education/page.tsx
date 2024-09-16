import ResumeBoxes from '@/components/resumeBoxes';
import ResumeTop from '@/components/resumeTop';
import './edu.scss';

export default function Education() {
  return (
    <section className="edu">
      <ResumeTop
        topic="My education"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quia perferendis inventore necessitatibus ad."
      />
      <div className="edu-main">
        <ResumeBoxes
          year="2016 - 2017"
          role="10th Class"
          com="DehraDun Public School"
        />
        <ResumeBoxes
          year="2018 - 2019"
          role="12th Class (PCM Branch)"
          com="DehraDun Public School"
        />
        <ResumeBoxes
          year="2019 - 2023"
          role="B.Tech (IT Branch)"
          com="Guru Jambheshwar University"
        />
      </div>
    </section>
  );
}
