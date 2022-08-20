import React from 'react'
import square from '../public/icon/red-square.svg';
import Image from 'next/image';

export default function Header({ toggleBlur }) {
  return (
    <header className='header'>
      <a className='logo-link'>
        Red Square
      </a>
      <div className='right-links'>
        <a className='nav-link'
          id='work-link'
          href="https://www.redsquareagency.com/work"
          onMouseEnter={toggleBlur}
          onMouseLeave={toggleBlur}
          onFocus={toggleBlur}
          onBlur={toggleBlur}
        >Work</a>
      </div>
    </header>
  )
}
