import './certi.scss';
import ResumeBoxes from '@/components/resumeBoxes';
import ResumeTop from '@/components/resumeTop';

export default function Certifications() {
  return (
    <section className="certi">
      <ResumeTop
        topic="My certificates"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quia perferendis inventore necessitatibus ad."
      />
      <div className="certi-main">
        <ResumeBoxes
          year="2016 - 2017"
          role="10th Class"
          com="DehraDun Public School"
          link="https://www.google.com/"
        />
      </div>
    </section>
  );
}
