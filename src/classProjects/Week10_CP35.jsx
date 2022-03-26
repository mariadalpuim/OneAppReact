import React, {useState} from 'react'
import _NavBarCP from './_NavBarCP';

function Week10_CP35() {
  const [myName, setMyName] = useState('Justin')
  return (
    <div className='app-container'>
      <_NavBarCP />
      <div className="content">
        <h2>CP35</h2>
        hey
        <p>{myName}</p>
        </div>
    </div>
  )
}

export default Week10_CP35