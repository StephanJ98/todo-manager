'use client'

import React from 'react'
import { BsSearch } from 'react-icons/bs'
import useBoard from '@/app/hooks/useBoard'

type Props = {}

const Header = (props: Props) => {
    const { searchString, setSearchString } = useBoard()

    return (
        <header className='flex flex-col md:flex-row md:justify-center items-center p-5 bg-gray-500/10 rounded-b-2xl mb-10'>
            <div className='absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50' />

            <div className='w-full md:max-w-[40vw] flex items-center space-x-5 flex-1 justify-end'>
                <form className='flex flex-row items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1'>
                    <BsSearch
                        size={20}
                        className='h-6 text-gray-400'
                    />
                    <input
                        type="text"
                        placeholder='Search'
                        className='flex-1 outline-none p-2'
                        value={searchString}
                        onChange={(e) => setSearchString(e.target.value)}
                    />
                    <button type='submit' hidden>Search</button>
                </form>
            </div>
        </header>
    )
}

export default Header