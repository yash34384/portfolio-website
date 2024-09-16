import Project from '@/components/project';
import './work.scss';

export default function Work() {
  return (
    <section className="work">
      <main className="work-main">
        <div className="work-slider">
          <Project />
          <Project />
        </div>
      </main>
    </section>
  );
}
