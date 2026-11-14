import { useEffect, useState } from 'react';

const links = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Services', '#services'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo">
          <span className="nav__logo-mark">R</span>
          <span>Raghul<span className="accent">.</span></span>
        </a>
        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary btn--sm" onClick={() => setOpen(false)}>
            Hire me
          </a>
        </nav>
        <button className="nav__toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
