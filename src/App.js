import './App.css';

import Home from './pages/Home';
import { BrowserRouter, Route, Routes, useParams} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import Blogs from './pages/Blogs';
import BlogPage from './blog/BlogPage';
import Footer from './components/Footer';
import SmoothScroll from './utils/SmmothScroll';



function App() {
  useParams()
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blogs' element={<Blogs />} />
          
          <Route path='/blogs/:blogid' 
          element={
            <BlogPage />
          } />
        </Routes>
      </BrowserRouter>
      <SmoothScroll />
    </div>
  );
}

export default App;
