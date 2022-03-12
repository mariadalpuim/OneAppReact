import React from 'react'
import _NavBarCM from '../_NavBarCM'
import Week10_01_PropsChild from './Week10_01_PropsChild'

function Week10Props() {
  return (
    // this ignores prettier puting all in one line, and is just convinient
    //prettier-ignore
    <div className='app-container'>
      <_NavBarCM />
      <div className="content">
        <Week10_01_PropsChild 
        myName="Justin" 
        myAge={21}
        arr={[1,2,3]}
        func={(a) => (a*2)}
        />
      </div>
    </div>
  )
}

export default Week10Props