import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Weather from "./components/Weather";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";

function App() {
  const apikey = process.env.REACT_APP_WEATHER_API
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />} ></Route>
            <Route exact path="/weather" element={<Weather apikey={apikey} />} ></Route>
            <Route exact path="*" element={<ErrorPage />} ></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
