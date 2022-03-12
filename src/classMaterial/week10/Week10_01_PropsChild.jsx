import React from 'react'

function Week10_01_PropsChild(props) {
console.log(props);
  return (
    <div>
      <p>{props.myAge < 18 ? `Young`: `Old`}</p>
      <p>{props.myName}</p>
      <p>{props.myAge}</p>
      <p>{props.arr}</p>
      <p>{props.func(24)}</p>
    </div>
  )
}

export default Week10_01_PropsChild