import React from 'react'
import AnimatedPage from '../AnimatedPage'
import AveragePrizeByYear from '../components/AveragePrizeByYear'
function Year({animationName}:any) {
  return (
    <AnimatedPage animationName={animationName}>
    <div>
      <AveragePrizeByYear />
    </div>
    </AnimatedPage>
  )
}

export default Year
