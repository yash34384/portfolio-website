import ResumeTop from '@/components/resumeTop';
import '@/styles/expe.scss';

export default function Experience() {
  return (
    <section className="expe">
      <ResumeTop
        topic="experience"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quia perferendis inventore necessitatibus ad."
      />
      <div className="expe-main">
        <ExpeBox />
      </div>
    </section>
  );
}

export const ExpeBox = () => {
  return (
    <article className="expe-box">
      <div>
        <p className="expe-year">2024 - current</p>
        <p className="expe-role">Software Developer</p>
      </div>
      <p className="expe-com">
        <i className="fa-solid fa-circle"></i>CRM Masters Infotech
      </p>
    </article>
  );
};
