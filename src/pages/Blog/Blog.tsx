import img from './blog.svg'
import me from './me.jpg'
import './Blog.scss'
import Section from '../../components/Section/Section'
import Contacts from '../../components/Contacts/Contacts'
import Reviews from '../../components/Reviews/Reviews'
import { NavLink} from 'react-router-dom'

type Props = {}

const Blog = (props: Props) => {
  return (
    <>
      <div className="Blog">
        <h2>article 1</h2>
        <img src={img} className="bike" alt="" />
        <div className="date">
          <img src={me} className="me" alt="" />
          <p className="date-me">
            By Olecsandr Falchenko <span className="me-s">|</span> March 20,
            2023
          </p>
        </div>
        <p className="blog-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend
          lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum,
          libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet
          libero. In ac enim non lectus convallis feugiat.
          <br />
          <br /> Ut in pharetra tortor. Quisque ligula magna, iaculis non porta
          ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus
          turpis. Etiam suscipit orci eu tristique gravida.
          <br />
          <br /> Fusce consectetur vel urna ut venenatis. Etiam in mauris odio.
          Phasellus sed turpis vitae justo maximus suscipit in ut risus. Quisque
          viverra magna lorem, et placerat velit cursus quis.
          <br />
          <br />
          Maecenas venenatis molestie eros, in pulvinar urna elementum quis.
          Praesent a lorem quis sem cursus feugiat sed nec erat.
          <br />
          <br /> Maecenas venenatis molestie eros, in pulvinar urna elementum
          quis. Praesent a lorem quis sem cursus feugiat sed nec erat.
          <br />
          <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut leo
          eleifend lobortis fringilla non elit. Vivamus mollis, odio ac finibus
          rutrum, libero augue venenatis leo, in maximus ipsum dui et est. In in
          aliquet libero. In ac enim non lectus convallis feugiat.
          <br />
          <br /> Ut in pharetra tortor. Quisque ligula magna, iaculis non porta
          ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac dapibus
          turpis. Etiam suscipit orci eu tristique gravida.
          <br />
          <br /> Fusce consectetur vel urna ut venenatis. Etiam in mauris odio.
          Phasellus sed turpis vitae justo maximus suscipit in ut risus. Quisque
          viverra magna lorem, et placerat velit cursus quis.
          <br />
          <br /> Maecenas venenatis molestie eros, in pulvinar urna elementum
          quis. Praesent a lorem quis sem cursus feugiat sed nec erat. Maecenas
          venenatis molestie eros, in pulvinar urna elementum quis. Praesent a
          lorem quis sem cursus feugiat sed nec erat.
        </p>
        <h3 className="blog-h3">ABOUT THE AUTHOR</h3>
        <NavLink
          to="/author"
          style={{ textDecoration: "none" }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="blog-author">
            <img src={me} className="me-blog" alt="" />
            <div className="blog-text">
              <p className="blog-text-o">Oleksandr Falchenko</p>
              <p className="blog-text-j">Junior</p>
              <hr></hr>
              <p className="blog-text-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sodales eleifend dolor vel cursus. Fusce in ligula ut
                leo eleifend lobortis fringilla non elit. Vivamus mollis, odio
                ac finibus rutrum.
              </p>
            </div>
          </div>
        </NavLink>
      </div>
      <Reviews />
      <Section />
      <Contacts />
    </>
  );
}

export default Blog