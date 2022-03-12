import React from 'react'
import {NavLink} from 'react-router-dom'

function _NavBarCP() {
  return (
    <nav className='sidenav CPNav'>
        <ul>
            <li><NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/">Homepage</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/week9_CP31">Week 09 - CP31</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/week10_CP32">Week 10 - CP32</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/week10_CP33">Week 10 - CP33</NavLink></li>
        </ul>
    </nav>
  )
}

export default _NavBarCP