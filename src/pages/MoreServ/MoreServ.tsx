import { Typography } from "@mui/material";
import servicesArray from "../../utils/servicesArray";
import "./MoreServ.scss";
import MoreServItem from "./MoreServItem";
type Props = {
  addNumberCount: (count: number) => void;
  removeNumberCount: (count: number) => void;
};

const MoreServ = ({ addNumberCount, removeNumberCount }: Props) => {
  const serviceID = new URLSearchParams(window.location.search).get("id");

  const service = servicesArray.find((i) => i.id.toString() === serviceID);
  return (
    <div>
      <Typography className="more-title">More Infomation</Typography>
      <div className="mor">
        {service && (
          <div className="more">
            <MoreServItem
              id={service.id}
              title={service.title}
              text={service.text}
              image={service.image}
              textmore={service.textmore}
              addNumberCount={addNumberCount}
              removeNumberCount={removeNumberCount}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MoreServ;
