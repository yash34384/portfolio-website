import '@/styles/contact.scss';

export default function Contact() {
  return (
    <section className="contact">
      <main className="contact-main">
        <form className="contact-form">
          <p className="contact-header">Let's Talk -- Feel Free to Contact</p>
          <p className="contact-intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            similique autem mollitia, quos hic officia, minus suscipit quis,
            voluptate odio explicabo?
          </p>
          <div className="row">
            <input type="text" placeholder="Firstname" />
            <input type="text" placeholder="Lastname" />
          </div>
          <div className="row">
            <input type="text" placeholder="Email address" />
            <input type="text" placeholder="Phone number" />
          </div>
          <textarea
            className="contact-message"
            placeholder="Type your message here."
          />
          <button>Send message</button>
        </form>
        <aside className="contact-detail">
          <div className="contact-card">
            <i className="fa-solid fa-envelope"></i>
            <div className="card">
              <p className="card-title">Email</p>
              <p className="card-det">yash.gupta.01810@gmail.com</p>
            </div>
          </div>
          <div className="contact-card">
            <i className="fa-solid fa-location-dot"></i>
            <div className="card">
              <p className="card-title">Address</p>
              <p className="card-det">Ghaziabad, Uttar Pradesh, India</p>
            </div>
          </div>
        </aside>
      </main>
    </section>
  );
}
