import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const catchErrors = (fn) => {
  return function (...args) {
    return fn(...args).catch((err) => {
      console.error(err)
    })
  }
}

export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export const formatDuration = (millis) => {
  const minutes = Math.floor(millis / 60000)
  const seconds = ((millis % 60000) / 1000).toFixed(0)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

export const useWindowDimensions = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}
