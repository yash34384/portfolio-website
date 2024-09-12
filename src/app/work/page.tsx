import Project from '@/components/project';
import '@/styles/work.scss';

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
