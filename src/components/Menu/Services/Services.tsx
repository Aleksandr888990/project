import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import './Services.scss'
import { Link } from "react-router-dom";
const StyledMenu = styled((props: MenuProps) => (
  <Menu
    className="five"
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))
(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,    
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow: "2px 4px 16px rgba(158, 158, 158, 0.3)",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 12,
        
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className="second"
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        SERVICES
      </Button>
      <StyledMenu
        className="four"
        id="demo-customized-menu"
        // MenuListProps={{
        //   "aria-labelledby": "demo-customized-button",
        // }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          disableRipple
        >
          <Link to="vr" style={{ textDecoration: "none", color: "#242424" }}>
            VR App Development
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Link to="gd" style={{ textDecoration: "none", color: "#242424" }}>
            Game Development
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Link to="sdk" style={{ textDecoration: "none", color: "#242424" }}>
            SDK 3d Modeling
          </Link>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
