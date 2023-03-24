import Logo from "../Logo/Logo";
import Menu from '../Menu/Menu'
import {Button} from "@mui/material"
import './AppBar.scss'
import { NavLink } from "react-router-dom";

type Props = {
  likesCounter: number
};

const AppBar = ({ likesCounter }: Props) => {
  return (
    <div className="app-bar">
      <Logo />
      <Menu likesCounter={likesCounter} />
      <Button variant="outlined" className="contact_us">
        <NavLink
          to="/"
          style={{ textDecoration: "none", color: "white" }}
          onClick={() => window.scrollTo(0, 4100)}
        >
          Contact us
        </NavLink>
      </Button>
    </div>
  );
};

export default AppBar;
