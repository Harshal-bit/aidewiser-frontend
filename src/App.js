import './App.css';

import Home from './pages/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Toaster />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
