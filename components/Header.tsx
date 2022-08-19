import React from 'react'
import square from '../public/icon/red-square.svg';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='header'>
        <a className='logo-link'>
            Red Square
        </a>
        <div className='right-links'>
        <a className='nav-link' href="https://www.redsquareagency.com/work">Work</a>
        </div>
    </header>
  )
}
