import React, {useState} from 'react'
import _NavBarCM from '../_NavBarCM'
import Week10_03_CustomHooks from './Week10_03_CustomHooks'


function Week10_02_useState() {
    const [count, setCount] = useState(0)
    // const [btnState, setbtnState] = useState(true)
    //custom hook 
    const [btnState, toggle] = Week10_03_CustomHooks(true)
    //count - reference to the state
    // setcount - the function/callback to change the state
    // useState(0) initial value state
    console.log(count);

    const updateCount = () => {
        setCount((c) => (c + 1))
    }

  //   const updateButton = () => {
  //     setbtnState(!btnState)
  // }

    const updateButton = () => {
        toggle(!btnState)
    }

  return (
    //prettier-ignore
    <div className='app-container'>
    <_NavBarCM />
    <div className="content">

      <p>The count is currently {count}</p>
      <button onClick={updateCount}>Add 1 to the count</button>
      <br />
      <br />
      <button onClick={updateButton} style={{fontSize: '2rem'}}>{btnState ? 'Subscribed' : 'Not subscribed'}</button>
    </div>
  </div>
  )
}

export default Week10_02_useState