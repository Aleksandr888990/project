import { Button, Card, CardActions } from "@mui/material";
import "./FavouritesItem.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {  removeLike } from "../../redux/likeReducer";


type Props = {
  id: number;
  title: string;
  text: string;
  image: string;
  removeNumberCount: (count: number) => void;
};

const FavouritesItem = ({
  id,
  title,
  text,
  image,
  removeNumberCount,
}: Props) => {
  const isLiked = useAppSelector((state) => state.productsLikeState[id]);
  const dispatch = useAppDispatch();

  return (
    <Card className="card">
      <div className="serv-image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <div className="serv-title">{title}</div>
        <div className="serv-text">{text}</div>
      </div>
      <CardActions>
        <Button
          className="btn-favourite"
          variant="outlined"
          onClick={() => {if (isLiked) {
            dispatch(removeLike(id))
            removeNumberCount(1)
          }}} 
        >
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default FavouritesItem;
