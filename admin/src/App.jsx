
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './layout/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MovieCard from './pages/MovieCard';
import HeadersAndLogin from './pages/HeadersAndLogin';
import UserPage from './pages/UserPage';
import ScrollToTop from './Components/ScrollToTop';
import OpenSignIn from './pages/OpenSignIn';
import PrivateRoute from '../../client/src/Router/PrivateRouter';


function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route element={<PrivateRoute check={["user"]} />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/moviecard" element={<MovieCard />} />
            <Route path="/headerandlogin" element={<HeadersAndLogin />} />
            <Route path="/user" element={<UserPage />} />

          </Route>

          <Route path="/" element={<OpenSignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
