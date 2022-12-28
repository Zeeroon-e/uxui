import React from 'react'
import AnimatedPage from '../AnimatedPage'
import ByCategory from '../components/ByCategory'

function Category({animationName}: any) {
  return (
    <AnimatedPage animationName={animationName}>
    <div>
      < ByCategory />
    </div>
    </AnimatedPage>
  )
}

export default Category
