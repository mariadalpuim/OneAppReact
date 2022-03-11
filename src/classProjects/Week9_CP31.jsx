import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from 'primereact/radiobutton';
import { Calendar } from 'primereact/calendar';

import _NavBarCP from './_NavBarCP';
import './week9_CP31.css'

function CP31() {
  const [sex, setSex] = useState(null);
  return (
    <div className='app-container'>
      <_NavBarCP />
      <div className="content">
        <div className='bodyE17'>
            <form action="#" className='formMain'>
              <div className='inputE17'>
              <label htmlFor="firstName">First Name:</label>
              <InputText id='firstName'/>
              </div>
              <br />
              <div className='inputE17'>
              <label htmlFor="lastName">Last Name:</label>
              <InputText required id='lastName'/>
              </div>
              <br />
              <div className='inputE17'>
              <label htmlFor="age">Age: </label>
              <InputNumber id='age' />
              </div>
              <br />
              <div className='inputE17'>
              <label htmlFor="sex">Male</label>
              <RadioButton inputId="sex1" name="sex" value="m" onChange={(e) => setSex(e.value)} checked={sex === 'm'} />
              <label htmlFor="sex">Female</label>
              <RadioButton inputId="sex2" name="sex" value="f" onChange={(e) => setSex(e.value)} checked={sex === 'f'}/>
              </div>
              <br />
              <button type='submit'>Submit</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default CP31