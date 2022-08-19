import React from 'react'
import Image from 'next/image';
import nugs from '../public/icon/nugs-logo.svg';
import twitter from '../public/icon/twitter.svg';
import instagram from '../public/icon/instagram.svg';
import linkedin from '../public/icon/linkedin.svg';
import work from '../public/photos/work.avif';
import useScreenSize from '../hooks/useScreenSize';

export default function Footer() {
    const windowWidth = useScreenSize();
    const desktopSize = 650;

    return (
        <footer>
            <section className='footer-first-section'>
                <section className='footer-first-links'>
                    <h4>Let&apos;s talk. <span className='red'>hi@rsq.com</span></h4>
                </section>
                <section className='footer-second-links'>
                    <ul className='footer-second-links--social-list'>
                        <li>
                            <button>
                                <span className='plus-icon'></span>
                                <Image src={nugs} alt='nugs logo' />
                            </button>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/redsquareagency/">
                                <Image src={instagram} alt='instragram logo' />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/redsquareagency">
                                <Image src={twitter} alt='twitter logo' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/red-square-agency/">
                                <Image src={linkedin} alt='linkedin logo' />
                            </a>
                        </li>
                    </ul>
                    <ul className='footer-second-links--cities-list'>
                        <li>
                            <h5>Mobile, AL</h5>
                        </li>
                        <li>
                            <h5> Chicago, IL</h5>
                        </li>
                        <li>
                            <h5>Tulsa, OK</h5>
                        </li>
                    </ul >
                </section>
            </section>
            <section className='footer-second-section'>
                <div className='footer-last-section-container'>
                    <a className='footer-last-section-link' href="">
                        <div className='footer-last-section-text-container'>
                            {windowWidth >= desktopSize && <h3 className='footer-projects-link'>All Projects</h3>}
                            <span>Work</span>
                        </div>
                        <div className='footer-image-wrapper'>
                            <Image src={work} alt='' />
                        </div>
                    </a>
                </div>
            </section>
        </footer>
    )
}
