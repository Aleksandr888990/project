import me from "./me.jpg";
import './Author.scss'
import Section from "../../components/Section/Section";
import Contacts from "../../components/Contacts/Contacts";
type Props = {};

const Author = (props: Props) => {
  return (
    <>
      <div className="author">
        <h2 className="author-name">OLEKSANDR FALCHENKO</h2>
        <hr></hr>
        <h4 className="author-j">Junior</h4>
        <div className="author-block">
          <img className="author-img" src={me} alt="" />
          <p className="auther-text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend
            lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum,
            libero augue venenatis leo, in maximus ipsum dui et est. In in
            aliquet libero. In ac enim non lectus convallis feugiat.
            <br />
            <br />
            <br /> Ut in pharetra tortor. Quisque ligula magna, iaculis non
            porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac
            dapibus turpis. Etiam suscipit orci eu tristique gravida.
            <br />
            <br />
            <br /> Fusce consectetur vel urna ut venenatis. Etiam in mauris
            odio. Phasellus sed turpis vitae justo maximus suscipit in ut risus.
            Quisque viverra magna lorem, et placerat velit cursus quis.{" "}
          </p>
        </div>
        <p className="auther-text1">
          Maecenas venenatis molestie eros, in pulvinar urna elementum quis.
          Praesent a lorem quis sem cursus feugiat sed nec erat. Maecenas
          venenatis molestie eros, in pulvinar urna elementum quis. Praesent a
          lorem quis sem cursus feugiat sed nec erat.
          <br />
          <br />
          <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo
          eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus
          rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in
          aliquet libero. In ac enim non lectus convallis feugiat.
          <br /> <br />
          <br />
          Ut in pharetra tortor. Quisque ligula magna, iaculis non porta ut,
          suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus
          turpis. Etiam suscipit orci eu tristique gravida.
          <br /> Fusce consectetur vel urna ut venenatis. Etiam in mauris odio.
          Phasellus sed turpis vitae justo maximus suscipit in ut risus. Quisque
          viverra magna lorem, et placerat velit cursus quis.
          <br />
          <br />
          <br /> Maecenas venenatis molestie eros, in pulvinar urna elementum
          quis. Praesent a lorem quis sem cursus feugiat sed nec erat. Maecenas
          venenatis molestie eros, in pulvinar urna elementum quis. Praesent a
          lorem quis sem cursus feugiat sed nec erat.
        </p>
      </div>
      <Section />
      <Contacts />
    </>
  );
};

export default Author;
