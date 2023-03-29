import { useParams } from "react-router-dom";
import "./Categories.scss";
import CategoriesItem from "./CategoriesItem";
import servicesArray from "../../utils/servicesArray";

type Props = {
  addNumberCount: (count: number) => void;
  removeNumberCount: (count: number) => void;
};

const Categories = ({ addNumberCount, removeNumberCount }: Props) => {
  const { category } = useParams();
  const vr = servicesArray.filter((i) => i.category === category);
  return (
    <>
      <h2 className="servi">{category}</h2>
      <div className="servic">
        {vr.map(({ id, title, text, image, category }) => (
          <div className="service">
            <CategoriesItem
              id={id}
              title={title}
              text={text}
              image={image}
              category={category}
              addNumberCount={addNumberCount}
              removeNumberCount={removeNumberCount}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
