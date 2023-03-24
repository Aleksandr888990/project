import Section from '../../components/Section/Section'
import Services from '../../components/Serv/Services'
import Technologies from '../../components/Technologies/Technologies'
import Slider from "../../components/Slider/Slider";
import Contacts from '../../components/Contacts/Contacts';

type Props = {
  addNumberCount: (count: number) => void;
  removeNumberCount: (count: number) => void;
};

const Main = ({ addNumberCount, removeNumberCount }: Props) => {
  return (
    <div>
      <Slider />
      <Technologies />
      <Services
        addNumberCount={addNumberCount}
        removeNumberCount={removeNumberCount}
      />
      <Section />
      <Contacts />
    </div>
  );
};

export default Main