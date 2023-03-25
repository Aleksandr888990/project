import android from './img/android.svg'
import apple from './img/apple.svg'
import cube from './img/cube.svg'
import stars from "./img/stars.svg";
import logo from "./img/logo.svg";
import {Button} from "@mui/material";
import "./Technologies.scss";
import { NavLink } from "react-router-dom";

type Props = {}

const Technologies = (props: Props) => {
  return (
    <div className="tech">
      <h2>Technologies</h2>
      <p>
        <span className="tech-first">Stan’s</span> &nbsp;
        <span className="tech-second">Assets</span>is a team of developers that
        are committed to developing high quality and engaging entertainment
        software
      </p>
      <div className="icons">
        <div className="android">
          <img src={android} alt=""></img>
        </div>
        <div className="apple">
          <img src={apple} alt=""></img>
        </div>
        <div className="cube">
          <img src={cube} alt=""></img>
        </div>
      </div>
      <p>Our engineers develop applications for the most popular platforms.</p>
      <div className="tec-logo">
        <div className="inside">
          <img src={logo} alt="" />
          <img src={stars} alt="" />
          <Button variant="contained" color="success" sx={{ height: "42px" }}>
            <NavLink
              to="blog"
              style={{ textDecoration: "none", color: "white" }}
              onClick={() => window.scrollTo(0, 1300)}
            >
              Check out reviews
            </NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Technologies