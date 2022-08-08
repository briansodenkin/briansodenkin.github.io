import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Skills from '../components/Resume/Skills';
import { skills, categories } from '../data/resume/skills';

const Index = () => (
  <Main
    description={"Brian's personal website, CUHK Computer Science Student"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About me</Link></h2>
          <p>
            A Computer Science Student from CUHK.
          </p>
          <p>
            Fullstack: React + Node + Java
          </p>
        </div>
      </header>
      <p> Welcome to the personal webpage. Please feel free to read more <Link to="/about">about me</Link>
      </p>
      <Skills skills={skills} categories={categories} />
    </article>
  </Main>
);

export default Index;
