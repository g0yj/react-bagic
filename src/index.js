import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import AppProducts from './AppProducts';
//import AppCounter from './AppCounter';
//import 조건주는방법 from './basic/react/조건주는방법';
//import AppXY from './AppXY';
//import 객체사용방법 from './basic/react/객체사용방법'
//import 배열상태관리 from './basic/react/배열상태관리'
//import Reducer사용방법 from './basic/react/Reducer사용방법';
import Immer사용방법 from './basic/react/Immer사용방법';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Immer사용방법/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
