import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,createBrowserRouter,RouterProvider } from 'react-router-dom';
import Daillogin from './Component/Daillogin';
import Store from './Component/Store';
import Experience from "./Component/Experience"
import Achievements from './Component/Timepas';

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/dAilylogin", 
    element:<Daillogin/>
  },
  {
    path:"/experience", 
    element:<Achievements/>
  }
])
 ReactDOM.createRoot(document.getElementById('root')).render(
  <Store>
  <RouterProvider router={router}/>

  </Store>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
