
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
import SeriesPage from './pages/SeriesPage';
// import ModeBox from './components/ModeBox';
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import PrivateRoute from './Router/PrivateRouter';
import ScrollToTop from './components/ScrollToTop';
import { userContext } from './context/UserContext';
import AboutPageAdmin from './pages/AboutPageAdmin';
import HeadersAndLoginAdmin from './pages/HeadersAndLoginAdmin';
import HomePageAdmin from './pages/HomePageAdmin';
import MovieCardAdmin from './pages/MovieCardAdmin';
import UserPageAdmin from './pages/UserPageAdmin';
import ChangeColorBox from './components/ChangeColorBox';
import { Toaster } from 'react-hot-toast';
import ChartAdmin from './components/ChartAdmin';
import ChartPageAdmin from './pages/ChartPageAdmin';



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
      <Toaster
        position="top-left"
        reverseOrder={false}
        toastOptions={{
          className: '',
          style: {
            zIndex:"10",
            backgroundColor: "var(--bg-color-1)",
            color: "var(--mode-color-2)",
          },
        }}
      />
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
            <Route element={<PrivateRoute check={["admin"]} />}>
              <Route path="/admin" element={<ChartPageAdmin />} />
              <Route path="/AdminHome" element={<HomePageAdmin />} />
              <Route path="/AdminAbout" element={<AboutPageAdmin />} />
              <Route path="/AdminFilm" element={<MovieCardAdmin />} />
              <Route path="/AdminHeaderAndLogin" element={<HeadersAndLoginAdmin />} />
              <Route path="/AdminUsers" element={<UserPageAdmin />} />
            </Route>
         

        </Routes>
        {
            loading ? "" : <ChangeColorBox />
          }
      </BrowserRouter>


    </>
  )
}

export default App
