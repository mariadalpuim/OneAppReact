import React from 'react'
import _NavBarCM from '../_NavBarCM'
import ChildComponent from './ChildComponent';
import './FirstComponentStyles.css'

function FirstComponent() {
     let lastName = 'Heath';
    // sub-function that will be invoked inside a component
    const func1 = () => {
        return 10*2
    }

  return (
    <div className='app-container'>
      <_NavBarCM />
      <div className="content">
        <h1 style={{color: 'red', backgroundColor: 'blue'}}>FirstComponent</h1>
        <ChildComponent />
        <p className='lorem'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, quibusdam! Porro cumque aspernatur sequi dolorum, reprehenderit itaque harum mollitia quam molestias voluptatibus deserunt doloremque quia exercitationem. Corrupti, ipsam. Magni, itaque?</p>
        <p>{func1()}</p>
        <p>{lastName}</p>
        <button id='btn1'>Click</button>
      </div>
    </div>
    );
}

export default FirstComponent
