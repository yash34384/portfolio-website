import '@/styles/serviceBox.scss';

export default function ServiceBox() {
  return (
    <article className="service-box">
      <div className="service-row-1">
        <p className="service-count">01</p>
        <a href="/">
          <i className="fa-solid fa-circle-arrow-right"></i>
        </a>
      </div>
      <div className="service-name">Frontend Development</div>
      <div className="service-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        culpa ab, consequuntur doloribus laboriosam obcaecati perferendis
        voluptates aliquid excepturi officia provident, porro doloremque
        voluptate ex molestias praesentium, commodi autem temporibus?
      </div>
    </article>
  );
}
