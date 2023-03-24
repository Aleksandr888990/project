import logo from "./Logo.svg";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className='logo'>
      <img src={logo} alt="" />
    </div>
  );
};

export default Logo;
