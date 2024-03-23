import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter, Route } from "react-router-dom";
import App from './App'
import './App.css'
import Url from './components/Url'
import Home from './components/Home'
import Projects from './components/Projects'
import EducationWEPage from './components/EducationWEPage'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/workexperienceandeducation' element={<EducationWEPage />} />
      <Route path=':url' element={<Url />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)