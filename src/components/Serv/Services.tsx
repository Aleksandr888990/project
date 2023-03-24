import ServicesItem from "./ServicesItem";
import servicesArray from '../../utils/servicesArray';
import './Services.scss'
type Props = {
  addNumberCount: (count: number) => void;
  removeNumberCount: (count: number) => void;
};

const Services = ({ addNumberCount, removeNumberCount }: Props) => {
  return (
    <>
      <div className="servi">Services</div>
      <div className="servic">
        {servicesArray.map(({ id, title, text, image }) => (
          <div className="service" key={id}>
            <ServicesItem
              id={id}
              title={title}
              text={text}
              image={image}
              addNumberCount={addNumberCount}
              removeNumberCount={removeNumberCount}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
