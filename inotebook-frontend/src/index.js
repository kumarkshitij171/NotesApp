import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './components/Layout';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HeroSection/>} />
      <Route path="addnote" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="services" element={<h1>Services</h1>} />
      <Route path="contact" element={<Contact/>} />
    </Route>
  ))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


