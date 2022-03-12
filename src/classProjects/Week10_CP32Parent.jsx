import React from 'react'
import _NavBarCP from './_NavBarCP';
import Week10_CP32Child from './Week10_CP32Child'


function Week10P32() {
  return (
    <div className='app-container'>
      <_NavBarCP />
      <div className="content">
        <h1>Props</h1>
        <Week10_CP32Child 
        salary={20000}
        taxes={10}
        calc={(salary) => (salary*10)}
        arr={['20, ','30, ','I wish']}
        />
        </div>
    </div>
  )
}

export default Week10P32