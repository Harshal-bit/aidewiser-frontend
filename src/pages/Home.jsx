import React from 'react'
import About from '../components/About';
import Clients from '../components/Clients';
import Connect from '../components/Connect';
import Footer from '../components/Footer';
import Information from '../components/Information';
import NavBar from '../components/NavBar';
import Services from '../components/Services';
import Team from '../components/Team';
import WelcomeContent from '../components/WelocomeContent';
import SmoothScroll from '../utils/SmmothScroll';


const Home = () => {
  return (
    <>
        <NavBar></NavBar>
        <WelcomeContent></WelcomeContent>
        <Services></Services>
        <Clients></Clients>
        <Team></Team>
        <About></About>
        <Information></Information>
        <Connect></Connect>
        <Footer></Footer>
        <SmoothScroll></SmoothScroll>
    </>
  )
}

export default Home