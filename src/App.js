import './App.css';
import { WelcomeContent } from './components/WelocomeContent';
import NavBar from './components/NavBar';
import Services from './components/Services';
import Clients from './components/Clients';
import Team from './components/Team';
import About from './components/About';
import Information from './components/Information';
import Footer from './components/Footer';
import SmoothScroll from './utils/SmmothScroll';
import Connect from './components/Connect';


function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
