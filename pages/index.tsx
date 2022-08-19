import type { NextPage } from 'next'
import Header from '../components/Header'
import MainPage from '../components/MainPage'
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div >
      <Header />
      <MainPage />
      <Footer />
    </div>
  )
}

export default Home
