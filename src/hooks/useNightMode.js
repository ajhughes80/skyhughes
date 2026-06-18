import { useState, useEffect } from 'react'

export function useNightMode() {
  const [nightMode, setNightMode] = useState(
    () => localStorage.getItem('skyNightMode') === 'true'
  )

  useEffect(() => {
    document.body.classList.toggle('night-mode', nightMode)
    localStorage.setItem('skyNightMode', String(nightMode))
  }, [nightMode])

  return [nightMode, setNightMode]
}
