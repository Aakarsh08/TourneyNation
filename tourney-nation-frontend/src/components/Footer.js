import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-zinc-800 py-20'>
            <div className='footer flex  justify-between w-[80%] m-auto items-center'>
                <ul className='flex flex-col gap-6'>
                    <li className="text-xl text-white">Tourney-Nation</li>
                    <Link to='https://github.com/exploring-solver'>
                    <li className='text-sm text-zinc-400 w-44 hover:cursor-pointer hover:text-indigo-500'>Created By Aakarsh Gupta</li>
                    </Link>
                </ul> 
                <ul className='flex flex-col gap-2'>
                    <li className='text-base font-semibold text-white my-2'>Explore</li>
                    <Link to='/tournaments'>
                    <li className='text-sm text-zinc-400 hover:text-zinc-200 hover:cursor-pointer'>Search Tournaments</li>
                    </Link>
                    <li className='text-sm  text-zinc-400 hover:text-zinc-200 hover:cursor-pointer'>Bracket Generator</li>
                    <li className='text-sm  text-zinc-400 hover:text-zinc-200 hover:cursor-pointer'>About</li>
                </ul>
                <ul className='flex flex-col gap-2'>
                    <li className='text-base font-semibold text-white my-2'>Resources</li>
                    <li className='text-sm text-zinc-400 hover:text-zinc-200 hover:cursor-pointer'>Knowledge Base</li>
                    <li className='text-sm text-zinc-400 hover:text-zinc-200 hover:cursor-pointer'>Terms</li>
                    <li className='text-sm text-zinc-400 hover:text-zinc-200 hover:cursor-pointer'>Privacy</li>
                </ul>
                <ul className='flex flex-col gap-2'>
                    <li className='text-base font-semibold text-white my-2'>Get In Touch</li>
                    <li className='text-sm text-zinc-400 hover:text-zinc-200 hover:cursor-pointer'>GitHub</li>
                    <li className='text-sm text-zinc-400 hover:text-zinc-200 hover:cursor-pointer'>Contact</li>
                    <li className='text-sm text-zinc-400 hover:text-zinc-200 hover:cursor-pointer'>Instagram</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer