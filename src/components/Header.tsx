import React, { useState } from 'react'
import './header.scss'
import { useNavigate } from 'react-router'

function Header() {
  const navigate = useNavigate();
  const [animation, setAnimation] = useState('');

  const sneakupBtn = () => {
    if (animation == 'bouncein') {
      setAnimation('sneakup')
   }
    console.log(animation);
    
  }
  const bounceinBtn = () => {
    if (animation == 'sneakup') {
      setAnimation('bouncein')
   }
    console.log(animation);
    
  }
  return (
    <div className='nav'>
      <ul>
        <li onClick={() => navigate('/')}>Winners by category</li>
        <li onClick={() => navigate('/gender')}>Winners by gender</li>
        <li onClick={() => navigate('/country')}>Winners by country</li>
        <li onClick={() => navigate('/year')}>Price by year</li>
      </ul>
      <section className='btn-section'>
        <button onClick={sneakupBtn}>SneakUp</button>
        <button onClick={bounceinBtn}>BounceIn</button>
      </section>
    </div>
  )
}

export default Header
