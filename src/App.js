import './App.css';
import { WelcomeContent } from './components/WelocomeContent';
import NavBar from './components/NavBar';
import Services from './components/Services';
import Clients from './components/Clients';


function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <WelcomeContent></WelcomeContent>
        <Services></Services>
        <Clients></Clients>
        <div className='division'></div>
    </div>
  );
}

export default App;
