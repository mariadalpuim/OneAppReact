import React from 'react'
import {NavLink} from 'react-router-dom'

function _NavBarHW() {
  return (
    <nav className='sidenav HWNav'>
        <ul>
            <li><NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/">Homepage</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/homeWork/week9_homework1">Week 9 - Task 1</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/homeWork/week9_homework2">Week 9 - Task 2</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/homeWork/week10_homework1">Week 10 - Task 1</NavLink></li>
        </ul>
    </nav>
  )
}

export default _NavBarHW