import React from 'react'
import _NavBarHW from './_NavBarHW';
import { motion } from "framer-motion"

import './week9_HomeWork2.css';


function HomeWork2() {
  return (
    <div className='app-container'>
      <_NavBarHW />
      <div className="content">
      Home Work - Task 2
      <div className='animations-flex'>
        <div id='animation-container'>
          Animation 1 -<br />auto rotate and shape
          <motion.div id='animation'
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }} />
        </div>
        <div id='gesturesAnimation-container'>
          Animation 2 -<br />hover and tap
          <motion.button id='gesturesAnimation'
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
/>
        </div>
        <div id='dragAnimation-container'>
          Animation 3 -<br />drag
          <motion.button id='dragAnimation'
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
      />
        </div>
      </div>
      </div>
    </div>
  );
}

export default HomeWork2;