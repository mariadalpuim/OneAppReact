import React, {useEffect, useState} from 'react'
import _NavBarCM from '../_NavBarCM'

function Week10_04_useEffect() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
                // alert('Hello')
        console.log('useEffect');
    })

    const tempFunc = () => {
        setCount((c) => c + 1);
        console.log('Hello');
    }

  return (
    //prettier-ignore
    <div className='app-container'>
      <_NavBarCM />
      <div className="content">
        <h2>useEffects</h2>
        <br />
        <button onClick={tempFunc}>Click Me</button>
      </div>
    </div>
  )
}

export default Week10_04_useEffect