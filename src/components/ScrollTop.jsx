import React, { useState, useEffect } from 'react'
import { IconButton } from '@mui/material'
import ArrowIcon from '@mui/icons-material/ArrowUpward'

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 700) {
        setShowButton(true)
      }
      else {
        setShowButton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className='scroll-up' onClick={scrollToTop}>
      {showButton && <IconButton size="large">
        <ArrowIcon />
      </IconButton>
      }
    </div>
  )
}

export default ScrollTop