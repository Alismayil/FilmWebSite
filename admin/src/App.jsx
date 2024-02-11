
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './layout/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MovieCard from './pages/MovieCard';
import HeadersAndLogin from './pages/HeadersAndLogin';
import ErrorPage from './pages/ErrorPage';


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/moviecard" element={<MovieCard/>} />
          <Route path="/headerandlogin" element={<HeadersAndLogin/>} />
          <Route path="/*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
