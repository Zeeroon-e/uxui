import { useState } from 'react'
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

  return (
    <div className="app">
      <section className='app-nav'>
        <Header />
      </section>
      
      <section className='app-display'>
        <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route element={ < Category /> } path='/' />
          <Route element={ < Gender /> } path='/gender' />
          <Route element={ < Country /> } path='/country' />
          <Route element={ < Year /> } path='/year' />
        </Routes>
        </AnimatePresence>
      </section>
      
    </div>
  )
}

export default App
