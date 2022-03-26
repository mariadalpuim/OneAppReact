import React, {useEffect, useState} from 'react'
import _NavBarCP from './_NavBarCP';

function Week10_CP34() {
    const [dataId, setDataId] = useState(1);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        // .then((data) => setData(data))
        .then((data) => console.log(data));
    }, []);

    const changeId = () => {
        setDataId((i)=>(i=== 1 ? 2 : 1));
    }


  return (
    //prettier-ignore
    <div className='app-container'>
      <_NavBarCP />
      <div className="content">
        <h2>useEffect</h2>
        {/* <h3>{data[dataId].title}</h3> */}
        <button onClick={changeId}>
          {dataId === 1 ? 'change to Title of Id 2' : 'change to Title of Id 2'}
          </button>
      </div>
    </div>
  )
}

export default Week10_CP34