import ServiceBox from '@/components/serviceBox';
import './services.scss';

export default function Services() {
  return (
    <section className="service">
      <main className="service-main">
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
      </main>
    </section>
  );
}
