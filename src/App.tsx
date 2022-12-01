import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ByCategory from './components/ByCategory'

function App() {

  return (
    <div className="app">
      <section className='app-nav'>
        <Header />
      </section>
      
      <section className='app-display'>
        <ByCategory />
      </section>
      
    </div>
  )
}

export default App
