import { useMemo } from "react";
import PropTypes from "prop-types";
import "./TestimonialSlide.css";

const TestimonialSlide = ({
  className = "",
  evangeline,
  propMinWidth,
  ellipse7,
}) => {
  const evangelineStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return
    // <div className={`testimonial-slide ${className}`}>
    //   <div className="frame-parent3">
    //     <div className="evangeline-parent">
    //       <b className="evangeline" style={evangelineStyle}>
    //         {evangeline}
    //       </b>
    //       <div className="lorem-ipsum">Lorem ipsum</div>
    //     </div>
    //     <div className="star-parent">
    //       <img className="star-icon" alt="" src="/star-2.svg" />
    //       <img className="star-icon" alt="" src="/star-2.svg" />
    //       <img className="star-icon" alt="" src="/star-2.svg" />
    //       <img className="star-icon" alt="" src="/star-2.svg" />
    //       <img className="star-icon" alt="" src="/star-2.svg" />
    //     </div>
    //   </div>
    //   <div className="lorem-ipsum-is-simply">
    //     Lorem Ipsum is simply dummy text of the printing and typesetting
    //     industry. Lorem Ipsum has been the industry's standard dummy text.
    //   </div>
    //   <img
    //     className="testimonial-slide-child"
    //     loading="lazy"
    //     alt=""
    //     src={ellipse7}
    //   />
    // </div>
};

TestimonialSlide.propTypes = {
  className: PropTypes.string,
  evangeline: PropTypes.string,
  ellipse7: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default TestimonialSlide;
