import { Typography } from "@mui/material";
import servicesArray from "../../utils/servicesArray";
import "./Detail.scss";
import DetailItem from "./DetailItem";
import { useParams } from "react-router-dom";

type Props = {
  addNumberCount: (count: number) => void;
  removeNumberCount: (count: number) => void;
};

const Detail = ({ addNumberCount, removeNumberCount }: Props) => {

  const { id } = useParams();
  const vre = servicesArray.find((i) => i.id.toString() === id);

  return (
    <div>
      <Typography className="more-title">More Infomation</Typography>
      <div className="mor">
        {vre && (
          <div className="more">
            <DetailItem
              id={vre.id}
              title={vre.title}
              text={vre.text}
              image={vre.image}
              textmore={vre.textmore}
              addNumberCount={addNumberCount}
              removeNumberCount={removeNumberCount}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
