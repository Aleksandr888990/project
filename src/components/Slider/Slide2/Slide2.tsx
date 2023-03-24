import main21 from "./main21.svg";
import { Button } from "@mui/material";

import './Slide2.scss'
type Props = {}

const Slide2 = (props: Props) => {
  return (
    <div className="slide2">
      <img className="main21" src={main21} alt=""></img>
      <div className="slide1_text">
        <h1>stan’s assets - IT Outsourcing Development Company</h1>
        <h3>FOCUS ON THE PRODUCT AND LET US DO THE REST!</h3>
        <p>
          Forgot about the stress because of missed deadlines. Save time and
          resources on development — Stan’s Assets engineers for hire will do it
          for you. Our primary value is transparent client-company
          relationships. Our biggest draws are considerable experience in AAA
          projects, sleek and understandable code, effective plugins and tools
          designed to save your time.<br></br>
          Find out what else we can do.
        </p>
        <div>
          <Button
            className="button-more"
            variant="outlined"
            onClick={() => window.scrollTo(0, 1600)}
          >
            More
          </Button>
          <Button
            className="button-contact"
            variant="contained"
            sx={{ marginLeft: "24px" }}
            onClick={() => window.scrollTo(0, 4100)}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Slide2