
import { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MainLayOut from './layout/MainLayOut';
import AboutPage from './pages/AboutPage';
import AnimationsPage from './pages/AnimationsPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import FilmsPage from './pages/FilmsPage';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import MoviesDetailPage from './pages/MoviesDetailPage';
import MoviesPage from './pages/MoviesPage';
import PlaylistPage from './pages/PlaylistPage';
import PricePage from './pages/PricePage';
import RegisterPage from './pages/RegisterPage';
import SeriesPage from './pages/SeriesPage';
import ChangeColorBox from './components/ChangeColorBox';
import ModeBox from './components/ModeBox';
import AOS from "aos";
import "aos/dist/aos.css";
import 'animate.css';
import ScrollToTop from './components/ScrollToTop';
import { userContext } from './context/UserContext';
import PrivateRoute from './Router/PrivateRouter';
import Loading from './components/Loading';
import EmailForm from './pages/ContactPage/EmailForm';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const { user, setUser } = useContext(userContext);
  const [loading, setloading] = useState(true)

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setloading(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {/* <div className="cursor" style={{ left: cursorPos.x + 'px', top: cursorPos.y + 'px', position: 'absolute' }}></div> */}
      {
        loading ? (
          <Loading />
        ) : (
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<MainLayOut />} >
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/price" element={<PricePage />} />
                <Route element={<PrivateRoute check={["user", "admin"]} />}>
                  <Route path="/watch/:id" element={<MoviesDetailPage />} />
                  <Route path="/playlist" element={<PlaylistPage />} />
                </Route>
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LogInPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/series" element={<SeriesPage />} />
                <Route path="/films" element={<FilmsPage />} />
                <Route path="/animations" element={<AnimationsPage />} />
              </Route>
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
            <ChangeColorBox />
            <ModeBox />
          </BrowserRouter>
        )
      }

    </>
  )
}

export default App
