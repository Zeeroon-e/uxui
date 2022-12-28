import React from 'react'
import AnimatedPage from '../AnimatedPage'
import ByCountry from '../components/ByCountry'
function Country({animationName}: any) {
  return (
    <AnimatedPage animationName={animationName}>
    <div>
      <ByCountry />
    </div>
    </AnimatedPage>
  )
}

export default Country
