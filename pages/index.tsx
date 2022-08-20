import type { NextPage } from 'next'
import Header from '../components/Header'
import MainPage from '../components/MainPage'
import Footer from '../components/Footer';
import { useState } from 'react';

const Home: NextPage = () => {
  const [blurBody, setBlurBody] = useState<boolean>(false);

  function toggleBlur() {
    setBlurBody(!blurBody);
  }

  return (
    <div className={`page-wrapper ${blurBody ? 'active' : ''}`}>
      <Header toggleBlur={toggleBlur} />
      <MainPage />
      <Footer toggleBlur={toggleBlur} />
    </div>
  )
}

export default Home
