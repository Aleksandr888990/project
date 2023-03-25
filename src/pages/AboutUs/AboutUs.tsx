import img1 from './Us1.svg'
import img2 from "./Us2.svg";
import img3 from "./Us3.svg";
import './AboutUs.scss'
import Contacts from '../../components/Contacts/Contacts';
import Section from '../../components/Section/Section';


type Props = {}

const AboutUs = (props: Props) => {
  return (
    <>
      <div className="about-first">
        <h2 className="about-first-text">
          We are an outsourcing team focused on{" "}
          <span className="about-span">Games, VR, 3D, SDK,</span> and{" "}
          <span className="about-span">Unity packages.</span>
        </h2>
        <img className="about-first-img" src={img1} alt="" />
      </div>
      <div className="about-second">
        <img className="about-second-img" src={img2} alt="" />
        <p className="about-second-text">
          Stan's Assets were founded in 2013 with the story of Stan, who worked
          at night after his main job and developed the first Unity packages.
          Later other developers who have shared Stan’s passion joined the
          company and became our co-founders.
          <br />
          <br /> Hundreds of thousands of developers are using them in their
          development. That’s how we’ve understood we can really save
          developer’s time and help them become more effective at their job.
        </p>
      </div>
      <div className="about-third">
        <div className="about-third-text">
          <p className="about-third-text1">
            Thank for our plugins we became recognizible and started working
            with top worlknown companies like{" "}
            <span className="about-span2">
              Moon Studios, Roomful and others.
              <br />
              <br />
            </span>{" "}
            Now our team has more than{" "}
            <span className="about-span2">15 developers</span> who create{" "}
            <span className="about-span2">
              games, VR spaces, mobile applications
            </span>{" "}
            for our clients.
          </p>
          <p className="about-third-text1 blue">
            If you share our values we'd love to see you as a part of our team!
          </p>
          <h4 className="about-third-text3 blue">Our mission</h4>
          <p className="about-third-text1">
            To create slick code that will be understandable to all developers
            who may work on a project after us and to make the developer's life
            easier with our plugins.
          </p>
        </div>
        <img className="about-third-img" src={img3} alt="" />
      </div>
      <Section />
      <Contacts />
    </>
  );
}

export default AboutUs