import { StyledEngineProvider } from "@mui/material/styles";
import "./App.scss";
import Main from "../Main/Main";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "./icon.svg";
import VR from "../../pages/VR/VR";
import GD from "../../pages/GD/GD";
import SDK from "../../pages/SDK/SDK";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Favourites from "../../pages/Favourites/Favourites";
import Blog from "../../pages/Blog/Blog";
import Author from "../../pages/Author/Author";
import AboutUs from "../../pages/AboutUs/AboutUs";
import AppBar from "../../components/AppBar/AppBar";
import { useState } from "react";
import MoreServ from "../../pages/MoreServ/MoreServ";

type Props = {};

const App = (props: Props) => {
  const [likesCounter, setLikesCounter] = useState<number>(0);
  const addNumberCount = () => {
    setLikesCounter((prevState) => prevState + 1);
  };
  const removeNumberCount = () => {
    setLikesCounter((prevState) => prevState - 1);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ScrollToTop smooth component={<MySVG />} />
      <AppBar likesCounter={likesCounter} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              addNumberCount={addNumberCount}
              removeNumberCount={removeNumberCount}
            />
          }
        ></Route>
        <Route path="vr" element={<VR />}></Route>
        <Route path="gd" element={<GD />}></Route>
        <Route path="sdk" element={<SDK />}></Route>
        <Route
          path="favourites"
          element={<Favourites removeNumberCount={removeNumberCount} />}
        ></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="author" element={<Author />}></Route>
        <Route path="about us" element={<AboutUs />}></Route>
        <Route
          path="moreserv"
          element={
            <MoreServ
              addNumberCount={addNumberCount}
              removeNumberCount={removeNumberCount}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </StyledEngineProvider>
  );
};

export default App;
