import React, { useState} from 'react'
import _NavBarCP from './_NavBarCP';
// import './week9_CP31.css'

function Week10CP33() {
  const [colour, setColour] = useState('blue')

  const updateColour = () => {
    setColour((c) => (colour === 'blue' ? 'red' : 'blue'))
}

  return (
        //prettier-ignore
    <div className='app-container'>
      <_NavBarCP />
      <div className="content">
      <h2>useState and Custom Hooks</h2>
        <h1 style={{color: colour}}>{colour}</h1>
        <button onClick={updateColour}>Change colour</button>
      </div>
    </div>
  )
}

export default Week10CP33