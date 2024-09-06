import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import "./Homepage.css";
import Input from "../components/SearchInput";

const Homepage = () => {
  return (
    <div className="homepage">
      <section className="ship-image-parent">
        <img className="ship-image-icon" alt="" src="/ship-image@2x.png" />
        <img
          className="image-14-icon"
          loading="lazy"
          alt=""
          src="/image-14@2x.png"
        />
      </section>
      <FrameComponent />
      <section className="homepage-inner">
        <div className="frame-parent">
          <div className="hello-parent">
            <h1 className="hello">NIRVANA</h1>
            <h1 className="leveraging-advanced-ais-container">
              <p className="leveraging-advanced-ais">
                <i>Neer Incident Response Vigilance And Notification Alert</i>
              </p>
              <p className="leveraging-advanced-ais">
                <br></br>Leveraging advanced AIS and satellite data for real-time detection and prevention of oil-spills, safeguarding our oceans
              </p>
            </h1>
          </div>
          <div className="enter-the-location-and-check-f-parent">
          <Input />
          </div>
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent2 />
      <FrameComponent3 />
      <div className="alert-container-wrapper">
        <div className="alert-container">
          <h1 className="stay-informed-on">
            Stay informed on the latest alerts and updates- Visit our
            Notifications and News Panel now!
          </h1>
          <div className="alert-container-inner">
            <div className="vector-parent">
              <img className="frame-child" alt="" src="/rectangle-182.svg" />
              <h3 className="click-here">Click Here</h3>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
      <Footer />
      <img className="design-element-icon" alt="" src="/design-element.svg" />
    </div>
  );
};

export default Homepage;
