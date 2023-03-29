import { Button, Card } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addLike, removeLike } from "../../redux/likeReducer";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  text: string;
  image: string;
  category: string;
  addNumberCount: (count: number) => void;
  removeNumberCount: (count: number) => void;
};

const VrItem = ({
  id,
  title,
  text,
  image,
  category,
  addNumberCount,
  removeNumberCount,
}: Props) => {
  const isLiked = useAppSelector((state) => state.productsLikeState[id]);
  const dispatch = useAppDispatch();
  return (
    <Card className="card">
      <Button
        className="btn"
        variant="outlined"
        onClick={() => {
          if (isLiked) {
            dispatch(removeLike(id));
            removeNumberCount(1);
          } else {
            dispatch(addLike(id));
            addNumberCount(1);
          }
        }}
      >
        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </Button>
      <Button
        className="btn-more"
        variant="outlined"
        component={Link}
        to={`/${category}/${id}`}
      >
        More
      </Button>
      <div className="serv-image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <div className="serv-title">{title}</div>
        <div className="serv-text">{text}</div>
      </div>
    </Card>
  );
};

export default VrItem;
