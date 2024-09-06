import TestimonialSlide from "./TestimonialSlide";
import PropTypes from "prop-types";
import "./Testimonial.css";

const Testimonial = ({ className = "" }) => {
  return (
    <section className={`testimonial ${className}`}>
      <div className="testimonial-container">
        <h1 className="testimonials">Testimonials</h1>
        <div className="testimonial-navigation">
          <div className="vuesaxlineararrow-right-wrapper">
            <img
              className="vuesaxlineararrow-right-icon"
              loading="lazy"
              alt=""
              src="/vuesaxlineararrowright.svg"
            />
          </div>
          <div className="vuesaxlineararrow-right-wrapper">
            <img
              className="vuesaxlineararrow-right-icon1"
              loading="lazy"
              alt=""
              src="/vuesaxlineararrowright-1.svg"
            />
          </div>
        </div>
      </div>
      <div className="testimonial-container1">
        <div className="testimonial-slide1">
          <div className="testimonial-content">
            <div className="testimonial-author-info">
              <b className="sebastian">Rajesh Malhotra</b>
              <div className="lorem-ipsum1">Marine Environmental Scientist</div>
            </div>
            <div className="testimonial-rating">
              <img
                className="rating-stars-one"
                loading="lazy"
                alt=""
                src="/star-2.svg"
              />
              <img className="rating-stars-one" alt="" src="/star-2.svg" />
              <img className="rating-stars-one" alt="" src="/star-2.svg" />
              <img className="rating-stars-one" alt="" src="/star-2.svg" />
              <img className="rating-stars-one" alt="" src="/star-2.svg" />
            </div>
          </div>
          <div className="lorem-ipsum-is-simply1">
          NIRVANA has revolutionized our ability to detect and respond to oil spills. Its real-time data and precision have significantly enhanced our efforts in ocean conservation.
          </div>
          <img
            className="testimonial-navigation-dots"
            loading="lazy"
            alt=""
            src="/ellipse-7@2x.png"
          />
        </div>

        <div className="testimonial-slide1">
          <div className="testimonial-content">
            <div className="testimonial-author-info">
              <b className="sebastian">Sneha Patel</b>
              <div className="lorem-ipsum1">Sustainability Manager at EcoMarine Solutions</div>
            </div>
            <div className="testimonial-rating">
              <img
                className="rating-stars-one"
                loading="lazy"
                alt=""
                src="/star-2.svg"
              />
              <img className="rating-stars-one" alt="" src="/star-2.svg" />
              <img className="rating-stars-one" alt="" src="/star-2.svg" />
              <img className="rating-stars-one" alt="" src="/star-2.svg" />
              <img className="rating-stars-one" alt="" src="/star-2.svg" />
            </div>
          </div>
          <div className="lorem-ipsum-is-simply1">
          Using NIRVANA has been a game-changer for our team. The tool’s integration of AIS and satellite data allows us to prevent environmental disasters before they escalate.
          </div>
          <img
            className="testimonial-navigation-dots"
            loading="lazy"
            alt=""
            src="/ellipse-7-1@2x.png"
          />
        </div>
        <div className="testimonial-slide1">
          <div className="testimonial-content">
            <div className="testimonial-author-info">
              <b className="sebastian">Vikram Singh</b>
              <div className="lorem-ipsum1">Coastal Operations Director</div>
            </div>
            <div className="testimonial-rating">
              <img
                className="rating-stars-one"
                loading="lazy"
                alt=""
                src="/star-2.svg"
              />
              <img className="rating-stars-one" alt="" src="/star-2.svg" />
              <img className="rating-stars-one" alt="" src="/star-2.svg" />
              <img className="rating-stars-one" alt="" src="/star-2.svg" />
              <img className="rating-stars-one" alt="" src="/star-2.svg" />
            </div>
          </div>
          <div className="lorem-ipsum-is-simply1">
          NIRVANA’s advanced detection capabilities have greatly improved our efficiency in safeguarding marine ecosystems. It’s an indispensable tool in our fight against ocean pollution.
          </div>
          <img
            className="testimonial-navigation-dots"
            loading="lazy"
            alt=""
            src="/ellipse-7-2@2x.png"
          />
        </div>
      </div>
      <div className="navigation-dots-container">
        <div className="dots" />
        <div className="dots1" />
        <div className="dots1" />
        <div className="dots1" />
        <div className="dots1" />
      </div>
    </section>
  );
};

Testimonial.propTypes = {
  className: PropTypes.string,
};

export default Testimonial;
