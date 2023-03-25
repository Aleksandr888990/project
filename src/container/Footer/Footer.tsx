import footer from './FOOTER.svg'
import './Footer.scss'
type Props = {}

const Footer = (props: Props) => {
  return (
    <>
      <img className="footer" src={footer} alt="" />
    </>
  );
}

export default Footer