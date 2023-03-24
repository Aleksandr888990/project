import { useAppSelector } from "../../redux/hooks";
import servicesArray from "../../utils/servicesArray";
import FavouritesItem from "./FavouritesItem";

type Props = {
  removeNumberCount: (count: number) => void;
};

const Favourites = ({ removeNumberCount }: Props) => {
  const productsLikeState = useAppSelector((state) => state.productsLikeState);

  const likedServices = servicesArray.filter(({ id }) => productsLikeState[id]);
  return (
    <>
      <div className="servi">Yuor favourite items</div>
      <div className="servic">
        {likedServices.map(({ id, title, text, image }) => (
          <div className="service" key={id}>
            <FavouritesItem
              id={id}
              title={title}
              text={text}
              image={image}
              removeNumberCount={removeNumberCount}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Favourites;
