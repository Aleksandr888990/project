import { Button, Card } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addLike, removeLike } from "../../redux/likeReducer";
import './MoreServItem.scss'
type Props = {
  id: number;
  title: string;
  text: string;
  image: string;
  textmore: string;
  addNumberCount: (count: number) => void;
  removeNumberCount: (count: number) => void;
};

const MoreServItem = ({
  id,
  title,
  text,
  image,
  textmore,
  addNumberCount,
  removeNumberCount,
}: Props) => {
  const isLiked = useAppSelector((state) => state.productsLikeState[id]);
  const dispatch = useAppDispatch();
console.log({textmore})
  return (
    <Card className="card card-more">
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
      <div className="serv-image more-img">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <div className="serv-title">{title}</div>
        <div className="serv-text">{text}</div>
      </div>
      <div>
        <div className="more-textmore">{textmore}</div>
      </div>
    </Card>
  );
};

export default MoreServItem;
