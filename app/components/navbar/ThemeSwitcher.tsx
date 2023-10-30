'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FaSun, FaMoon } from 'react-icons/fa';

import { Button } from '@nextui-org/button'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className='flex gap-4'>
      {theme === 'light' ? (
        <Button variant='flat' onClick={() => setTheme('dark')}>
          <FaMoon />
        </Button>
      ) : (
        <Button variant='flat' onClick={() => setTheme('light')}>
          <FaSun />
        </Button>
      )}
    </div>
  )
}
