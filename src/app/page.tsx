import '@/styles/home.scss';
import Photo from '@/assets/photo.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="home">
      <main className="home-main">
        <section className="home-hero">
          <aside className="home-about">
            <p className="home-position">Software Developer</p>
            <p className="home-name">Hello I'm</p>
            <p className="home-name" style={{ color: '#04AA6D' }}>
              Yash Gupta
            </p>
            <p className="home-intro">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              nemo quam explicabo consequuntur ad debitis, voluptates
              accusantium repudiandae accusamus minus itaque, quidem, magni
              voluptate quibusdam modi error praesentium adipisci reprehenderit!
            </p>
            <article className="home-link">
              <a href="">
                Download Resume <i className="fa-solid fa-download"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </article>
          </aside>
          <aside className="home-pic-section">
            <div className="home-pic-border">
              <Image className="home-pic" src={Photo} alt="profile pic" />
            </div>
          </aside>
        </section>
        <footer className="home-footer">
          <section className="home-stats">
            <article className="home-number">1</article>
            <article className="home-title">Years of Experience</article>
          </section>
          <section className="home-stats">
            <article className="home-number">10</article>
            <article className="home-title">Projects Completed</article>
          </section>
          <section className="home-stats">
            <article className="home-number">5</article>
            <article className="home-title">Technologies mastered</article>
          </section>
          <section className="home-stats">
            <article className="home-number">100</article>
            <article className="home-title">Shakes of Protein</article>
          </section>
        </footer>
      </main>
    </section>
  );
}
