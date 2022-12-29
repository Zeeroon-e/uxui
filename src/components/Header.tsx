import React, { useEffect } from 'react'
import './header.scss'
import { useNavigate } from 'react-router'

function Header({animationName,setAnimationName}: any) {
  const navigate = useNavigate();
  const btnClicked = (e: any) => {
    if (animationName !== e) {
      setAnimationName(e)
    }
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
        <h6> animation styles:</h6>
        <button onClick={(e) => btnClicked('sneakup')}>SneakUp</button>
        <button onClick={(e) => btnClicked('bouncein')}>BounceIn</button>
        <button onClick={(e) => btnClicked('slidein')}>SlideIn</button>
      </section>
    </div>
  )
}

export default Header
