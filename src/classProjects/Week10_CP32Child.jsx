import React from 'react'

function Week10_CP32Child(props) {
  return (
    <div>
        <p>{props.salary}</p>
        <p>{props.taxes}%</p>
        <p>{props.calc(20)}</p>
        <p>{props.salary < 20000 ? `too much taxes`: `ok`}</p>
        <p>{props.arr}</p>
  </div>
  )
}

export default Week10_CP32Child