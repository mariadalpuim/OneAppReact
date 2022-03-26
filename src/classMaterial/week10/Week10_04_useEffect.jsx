import React, {useEffect, useState} from 'react'
import _NavBarCM from '../_NavBarCM'

function Week10_04_useEffect() {
    const [count, setCount] = useState(0);
    const [rawData, setRawData] = useState('Hello everyone')

    useEffect(() => {
                // alert('Hello')
        console.log('useEffect');
        fetch('https://jsonplaceholder.typicode.com/comments/2')
        .then((res) => res.json())
        // .then((data)=> console.log(data))
        .then((data) => updateData(data))
    }, []);

    const tempFunc = () => {
        setCount((c) => c + 1);
        console.log('Hello');
    };

    // this is updating the data inside the object, brining only the value name inside
    const updateData = (d) => {
        console.log(d);
        setRawData(d.name)
    }

  return (
    //prettier-ignore
    <div className='app-container'>
      <_NavBarCM />
      <div className="content">
        <h2>useEffects</h2>
        <br />
        <p>{count}</p>
        <button onClick={tempFunc}>Click Me</button>
        <br />
        <br />
        <p>{rawData}</p>
      </div>
    </div>
  )
}

export default Week10_04_useEffect