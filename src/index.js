import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";  

import './index.css';

import App from './App';
import Week9_01_FirstComponent from './classMaterial/week9/Week9_01_FirstComponent';
import Week10_01_PropsParent from './classMaterial/week10/Week10_01_PropsParent';
import Week10_02_useState from './classMaterial/week10/Week10_02_useState';
import Week10_03_useState from './classMaterial/week10/Week10_03_useState';
import Week10_04_useEffect from './classMaterial/week10/Week10_04_useEffect';
import Week11_01_Placeholder from './classMaterial/week11/Week11_01_Placeholder';
import Week9_HomeWork1 from './homeWork/Week9_HomeWork1';
import Week9_HomeWork2 from './homeWork/Week9_HomeWork2';
import Week10_HomeWork1 from './homeWork/Week10_HomeWork1';
import Week9_CP31 from './classProjects/Week9_CP31';
import Week10_CP32Parent from './classProjects/Week10_CP32Parent';
import Week10_CP33 from './classProjects/Week10_CP33';

ReactDOM.render(
  // prettier-ignore
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<App />}/>
      <Route path='/classMaterial/week9/week9_01' element={<Week9_01_FirstComponent />}/>
      <Route path='/classMaterial/week10/week10_01' element={<Week10_01_PropsParent />}/>
      <Route path='/classMaterial/week10/week10_02' element={<Week10_02_useState />}/>
      <Route path='/classMaterial/week10/week10_03' element={<Week10_03_useState />}/>
      <Route path='/classMaterial/week10/week10_04' element={<Week10_04_useEffect />}/>
      <Route path='/classMaterial/week11/week11_01' element={<Week11_01_Placeholder />}/>
      <Route path='/classProjects/week9_CP31'element={<Week9_CP31 />}/>
      <Route path='/classProjects/week10_CP32'element={<Week10_CP32Parent />}/>
      <Route path='/classProjects/week10_CP33'element={<Week10_CP33 />}/>
      <Route path='/homeWork/week9_homework1'element={<Week9_HomeWork1 />}/>
      <Route path='/homeWork/week9_homework2'element={<Week9_HomeWork2 />}/>
      <Route path='/homeWork/week10_homework1'element={<Week10_HomeWork1 />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
