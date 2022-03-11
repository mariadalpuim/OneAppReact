import React from 'react'
import {NavLink} from 'react-router-dom'

function _NavBarCM() {
  return (
    <nav className='sidenav CMNav'>
    <ul>
        <li><NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/">Homepage</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week9/week9_01">Week 09 - First App</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week10/week10_01">Week 10 - Placeholder</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week11/week11_01">Week 11 - Placeholder</NavLink></li>
    </ul>
</nav>
  )
}

export default _NavBarCM