import { Button } from "@mui/material";
import main12 from "./main12.svg"
import ori from "./ori.svg"
import './Slide1.scss'
type Props = {}

const Slide1 = (props: Props) => {
  return (
    <div className="slide1">
      <img className="ori" src={ori} alt=""></img>
      <img className="main12" src={main12} alt=""></img>
      <div className="slide1_text">
        <h1>FOCUS ON THE PRODUCT AND LET US DO THE REST!</h1>
        <p>
          We’re an Indian software development company focused on just one thing
          - offshore software development services. We have 16+ years of
          experience and a team of 450+ developers working efficiently to
          deliver unique solutions to start-ups, software development companies,
          enterprises, and digital agencies to simplify their IT outsourcing
          experience & reduce time/cost to market.
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

export default Slide1