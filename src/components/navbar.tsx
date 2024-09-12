import '@/styles/navbar.scss';
import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="nav">
      <main className="nav-main">
        <section className="nav-logo">
          Yash<span>.</span>
        </section>
        <section className="nav-links">
          <Link href={'/'}>Home</Link>
          <Link href={'/service'}>Services</Link>
          <Link href={'/resume'}>Resume</Link>
          <Link href={'/work'}>Work</Link>
          <Link href={'/contact'}>Contact</Link>
        </section>
      </main>
    </nav>
  );
}
