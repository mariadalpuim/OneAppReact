import React from 'react';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="content">
      <h1>HomePage</h1>
      <a href="https://www.reactrouter.com/" target="_blank" rel="noopener noreferrer">
        React Router V6 Docs
      </a>
      <br />
      <br />
      <a
        href="https://ultimatecourses.com/blog/active-navlink-inline-styles-with-react-router"
        target="_blank" rel="noopener noreferrer"
      >
        Docs on NavLinks
      </a>
      <br />
      <br />
      <a href="https://youtu.be/k2Zk5cbiZhg" target="_blank" rel="noopener noreferrer">
        YouTube Video of Router V6
      </a>
      <nav className="homePageNav">
        <ul>
          <li>
            <NavLink to='classMaterial/week9/week9_01'>Class Material</NavLink>
          </li>
          <li>
            <NavLink to='/classProjects/week9_CP31'>Class Projects</NavLink>
          </li>
          <li>
            <NavLink to='/homeWork/week9_homework1'>Homework</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
