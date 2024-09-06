import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`exciting-features-wrapper ${className}`}>
      <div className="exciting-features">
        <h1 className="exciting-features1">Exciting Features!</h1>
        <div className="feature-list">
          <div className="feature-grid">
            <div className="mapping-feature">
              <div className="mapping-container">
                <div className="mapping-content">
                  <div className="mapping-content">
                    <div className="mapping-image-container">
                      <img
                        className="image-15-icon"
                        loading="lazy"
                        alt=""
                        src="/image-15@2x.png"
                      />
                      <b className="interactive-spill-mapping">
                        Interactive spill mapping
                      </b>
                      <div className="a-dynamic-map">
                        A dynamic map that visualizes the locations of detected
                        oil spills.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-pair">
              <div className="feature-content">
                <div className="feature-icon-pair">
                  <div className="mapping-container">
                    <div className="mapping-content">
                      <div className="mapping-image-container">
                        <img
                          className="image-15-icon"
                          loading="lazy"
                          alt=""
                          src="/image-16@2x.png"
                        />
                        <b className="interactive-spill-mapping">
                          AI-Powered Analytics
                        </b>
                        <div className="advanced-ai-algorithms">
                          Advanced AI algorithms analyze AIS and satellite data
                          to predict and detect oil spills with high accuracy
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-pair1">
              <div className="mapping-image-container">
                <img
                  className="image-15-icon"
                  loading="lazy"
                  alt=""
                  src="/image-17@2x.png"
                />
                <b className="multi-language-support">Multi-Language Support</b>
                <div className="the-website-offers">
                  The website offers support for multiple languages, including
                  Hindi and English, to cater to need of diverse audience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
