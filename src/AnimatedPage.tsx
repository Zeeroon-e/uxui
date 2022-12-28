import React from 'react'
import { motion } from "framer-motion"
const animations = {
    sneakup: {
        scale: [0, 0.3, 0.5, 1],
        y: [-200, 0, 5, 0, 5, 0], 
        x: [0, -100, 50, 0],
        transition: {
            duration: 4
        }
        
           
    },
    bouncein: {
        y: [-100, 0, -20, 0, -2, 0],
        transition: {
            duration: 1
        }
    },
    exit: {
        opacity: 0,
        y: -100,
        transition: {
            duration: 1
        }
    }
}

const AnimatedPage = ( {children, animationName}: any ) => {
  return (
    <motion.div variants={animations} 
        animate={animationName} 
        exit="exit"
        >
        {children}
    </motion.div>
  )
}

export default AnimatedPage
