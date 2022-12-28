import { useState,useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css'
import Header from './components/Header'
import ByCategory from './components/ByCategory'
import Category from './views/Category';
import Gender from './views/Gender';
import Country from './views/Country';
import Year from './views/Year';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  const [animationName, setAnimationName] =useState('');

  return (
    <div className="app">
      <section className='app-nav'>
        <Header setAnimationName={setAnimationName} animationName={animationName}/>
      </section>
      
      <section className='app-display'>
        <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route element={ < Category animationName={animationName} /> } path='/' />
          <Route element={ < Gender animationName={animationName}/> } path='/gender' />
          <Route element={ < Country animationName={animationName} /> } path='/country' />
          <Route element={ < Year animationName={animationName} /> } path='/year' />
        </Routes>
        </AnimatePresence>
      </section>
      
    </div>
  )
}

export default App
