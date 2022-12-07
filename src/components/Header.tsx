import React from 'react'
import './header.scss'
import { useNavigate } from 'react-router'

function Header() {
  const navigate = useNavigate();

  return (
    <div className='nav'>
      <ul>
        <li onClick={() => navigate('/')}>Winners by category</li>
        <li onClick={() => navigate('/gender')}>Winners by gender</li>
        <li onClick={() => navigate('/country')}>Winners by country</li>
        <li onClick={() => navigate('/year')}>Winners by year</li>
      </ul>
    </div>
  )
}

export default Header
