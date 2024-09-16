import '@/styles/slider.scss';
import Image from 'next/image';
import Photo from '@/assets/photo.jpg';

export default function Project() {
  return (
    <article className="slider">
      <aside className="slider-box">
        <div className="slider-num">01</div>
        <p className="slider-name">To-Do App</p>
        <p className="slider-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ea
          nobis deserunt tempore odio neque, numquam obcaecati cupiditate nulla,
          similique atque ipsam! Totam provident corrupti similique voluptatem
          soluta quam ea.
        </p>
        <p className="slider-tech">
          React Native, CSS, Async Storage, Local Storage
        </p>
        <p className="slider-link">
          <a href="/">
            <i className="fa-solid fa-up-right-from-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-github"></i>
          </a>
        </p>
      </aside>
      <Image src={Photo} alt="project image" className="slider-img" />
    </article>
  );
}
