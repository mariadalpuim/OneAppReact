import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";  

import './index.css';

import App from './App';
import Week9_01_FirstComponent from './classMaterial/week9/Week9_01_FirstComponent';
import Week10_01_Placeholder from './classMaterial/week10/Week10_01_Placeholder';
import Week11_01_Placeholder from './classMaterial/week11/Week11_01_Placeholder';
import Week9_HomeWork1 from './homeWork/Week9_HomeWork1';
import Week9_HomeWork2 from './homeWork/Week9_HomeWork2';
import HomeWork3 from './homeWork/HomeWork3';
import Week9_CP31 from './classProjects/Week9_CP31';
import CP32 from './classProjects/CP32';
import CP33 from './classProjects/CP33';

ReactDOM.render(
  // prettier-ignore
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<App />}/>
      <Route path='/classMaterial/week9/week9_01' element={<Week9_01_FirstComponent />}/>
      <Route path='/classMaterial/week10/week10_01' element={<Week10_01_Placeholder />}/>
      <Route path='/classMaterial/week11/week11_01' element={<Week11_01_Placeholder />}/>
      <Route path='/classProjects/week9_CP31'element={<Week9_CP31 />}/>
      <Route path='/classProjects/classproject2'element={<CP32 />}/>
      <Route path='/classProjects/classproject3'element={<CP33 />}/>
      <Route path='/homeWork/week9_homework1'element={<Week9_HomeWork1 />}/>
      <Route path='/homeWork/week9_homework2'element={<Week9_HomeWork2 />}/>
      <Route path='/homeWork/week10_homework1'element={<HomeWork3 />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
