import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="/images/icon.jpg" alt="" />
      </Link>
      <header>
        <h2>Brian Kin</h2>
        <p><a href="mailto:briansodenkin@gmail.com">briansodenkin@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hello! I&apos;m Brian. I am like Fullstack development.
        I am a <a href="https://www.cse.cuhk.edu.hk/">CUCS</a> student.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">@briansodenkin</p>
    </section>
  </section>
);

export default SideBar;
