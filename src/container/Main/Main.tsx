import Section from '../../components/Section/Section'
import Services from '../../components/Serv/Services'
import Technologies from '../../components/Technologies/Technologies'
import Slider from "../../components/Slider/Slider";
import Contacts from '../../components/Contacts/Contacts';

type Props = {
};

const Main = (props: Props) => {
  return (
    <div>
      <Slider />
      <Technologies />
      <Services />
      <Section />
      <Contacts />
    </div>
  );
};

export default Main