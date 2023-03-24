import Services from "./Services/Services";
import MenuItem from "./MenuItem";
import { Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import './Menu.scss'

type Props = {
  likesCounter: number
};

const Menu = ({ likesCounter }: Props) => {
  return (
    <Typography style={{ display: "flex" }}>
      <MenuItem to="/">Home</MenuItem>
      <Services />
      <MenuItem to="/blog">Blog</MenuItem>
      <MenuItem to="/about us">About Us</MenuItem>
      <MenuItem to="/favourites">Favourites</MenuItem>
      <div className="heart">
        <FavoriteBorderIcon className="heart1" />
        <div className="heart2">
          {likesCounter}
        </div>
      </div>
    </Typography>
  );
};

export default Menu;
