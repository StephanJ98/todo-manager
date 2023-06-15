'use client'

import Header from '@/app/components/Header/Header'
import Board from './components/Board/Board'
import useLog from './hooks/useLog'
import { KeyboardEvent, useState } from 'react'

export default function Home() {
  const { logged, setLogged } = useLog()
  const [value, setValue] = useState('')
  const [bgBtn, setBgBtn] = useState<boolean>(true)

  const checkPass = (): boolean => {
    if (value === process.env.NEXT_PUBLIC_PASS) {
      setLogged()
    } else {
      setBgBtn(false)
    }
    return true
  }

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      checkPass()
    }
  }

  return (
    <main>

      {
        logged ? (
          <>
            <Header />
            <Board />
          </>
        ) : (
          <>
            <Header />
            <div className='flex flex-col h-[30vh] w-full items-center justify-center'>
              <div className={`${bgBtn ? 'bg-white' : 'bg-red-400'} p-5 shadow-md rounded-xl flex items-center justify-center w-[90vw] md:w-auto`}>
                <input
                  type="password"
                  placeholder='Password'
                  className='focus:outline-none w-full rounded-md bg-inherit'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={(e) => handleSubmit(e)}
                />
              </div>
            </div>
          </>
        )
      }
    </main>
  )
}
