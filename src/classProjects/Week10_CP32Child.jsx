import React from 'react'

function Week10_CP32Child(props) {
  return (
    <div>
        <p>{props.salary}</p>
        <p>{props.taxes}%</p>
        <p>{props.calc(20)}</p>
        <p>{props.salary < 20000 ? `too much taxes`: `ok`}</p>
        <p>{props.arr1}</p>


        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'red' }}>{props.someText}</h2>
          <br />
          <label htmlFor="colourList">List of colours: </label>
          <select name="colourList" id="colourList">
            {props.arr.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
  </div>
  
  )
}

export default Week10_CP32Child