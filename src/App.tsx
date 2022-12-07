import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import './App.css'
import Header from './components/Header'
import ByCategory from './components/ByCategory'
import Category from './views/Category';
import Gender from './views/Gender';
import Country from './views/Country';
import Year from './views/Year';

function App() {

  return (
    <div className="app">
      <section className='app-nav'>
        <Header />
      </section>
      
      <section className='app-display'>
        <Routes>
          <Route element={ < Category /> } path='/' />
          <Route element={ < Gender /> } path='/gender' />
          <Route element={ < Country /> } path='/country' />
          <Route element={ < Year /> } path='/year' />
        </Routes>
      </section>
      
    </div>
  )
}

export default App
