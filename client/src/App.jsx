
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
import PayNow from './components/PayNow';



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

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setloading(false)
  //   }, 2000)

  //   return () => clearTimeout(timeout)
  // }, [])

  return (
    <>
      {/* <div className="cursor" style={{ left: cursorPos.x + 'px', top: cursorPos.y + 'px', position: 'absolute' }}></div> */}

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayOut setloading={setloading} loading={loading} />} >
            <Route path="/" element={<HomePage setloading={setloading} loading={loading} />} />
            <Route path="/about" element={<AboutPage setloading={setloading} loading={loading} />} />
            <Route path="/movies" element={<MoviesPage setloading={setloading} loading={loading} />} />
            <Route path="/price" element={<PricePage setloading={setloading} loading={loading} />} />
            <Route element={<PrivateRoute check={["user", "admin"]} />}>
              <Route path="/watch/:id" element={<MoviesDetailPage setloading={setloading} loading={loading} />} />
              <Route path="/playlist" element={<PlaylistPage setloading={setloading} loading={loading} />} />
            </Route>
            <Route path="/contact" element={<ContactPage setloading={setloading} loading={loading} />} />
            <Route path="/login" element={<LogInPage setloading={setloading} loading={loading} />} />
            <Route path="/series" element={<SeriesPage setloading={setloading} loading={loading} />} />
            <Route path="/films" element={<FilmsPage setloading={setloading} loading={loading} />} />
            <Route path="/animations" element={<AnimationsPage setloading={setloading} loading={loading} />} />
          </Route>
          <Route path="/*" element={<ErrorPage setloading={setloading} loading={loading} />} />
          {/* <Route path="/" element={<ErrorPage setloading={setloading} loading={loading} />} />mellimnen sorus */}
        </Routes>
        {
          loading ? "" : <ChangeColorBox />
        }

      </BrowserRouter>


    </>
  )
}

export default App
