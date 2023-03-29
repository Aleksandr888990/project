import Vector5 from './Vector5.svg'
import './Section.scss'
type Props = {}

const Section = (props: Props) => {
  return (
    <div className="section">
      <img className="section-img" src={Vector5} alt="" />
      <div className="text">
        <h1>LOOKING FOR A PARTNER IN BUILDING A SOLUTION?</h1>
        <p>We are ready to discuss your project requirements</p>
      </div>
    </div>
  );
}

export default Section