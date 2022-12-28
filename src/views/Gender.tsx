import React from 'react'
import AnimatedPage from '../AnimatedPage'
import ByGender from '../components/ByGender'
function Gender({animationName}:any) {
  return (
    <AnimatedPage animationName={animationName}>
    <div>
      <ByGender />
    </div>
    </AnimatedPage>
  )
}

export default Gender
