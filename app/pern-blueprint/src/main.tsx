import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import reactLogo from './assets/react.svg';

let rootEl = document.getElementById('root');

if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

function Home() {
  return (
    <h1>Home</h1>
  )
}

function About() {
  return (
    <h1>About</h1>
  )
}