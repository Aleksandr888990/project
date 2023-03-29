import "./Services.scss";
import { Card } from "@mui/material";
import { NavLink } from "react-router-dom";
type Props = {
};

const Services = (props: Props) => {
  return (
    <>
      <h2 className="servi">Categories</h2>
      <Card className="card">
        <NavLink
          className="nav"
          to="/VR App Development"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="serv-image">
            <img src="/images/Main/Illustration 4.svg" alt="" />
          </div>
          <div className="content">
            <div className="serv-title">VR App Development</div>
          </div>
        </NavLink>
      </Card>
      <Card className="card">
        <NavLink
          className="nav"
          to="/Game Development"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="serv-image">
            <img src="/images/Main/Illustration 2.svg" alt="" />
          </div>
          <div className="content">
            <div className="serv-title game">GAME DEVELOPMENT</div>
          </div>
        </NavLink>
      </Card>
      <Card className="card">
        <NavLink
          className="nav"
          to="/SDK 3d Modeling"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="serv-image">
            <img src="/images/Main/Illustration 3.svg" alt="" />
          </div>
          <div className="content">
            <div className="serv-title">SDK 3D Modeling services</div>
          </div>
        </NavLink>
      </Card>
    </>
  );
};

export default Services;
