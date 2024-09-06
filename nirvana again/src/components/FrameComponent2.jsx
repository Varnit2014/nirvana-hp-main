import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`revolution-container-wrapper ${className}`}>
      <div className="revolution-container">
        <div className="how-ais-and-satellite-data-rev-wrapper">
          <h1 className="how-ais-and-container">
            <p className="how-ais-and">
              How AIS and Satellite Data Revolutionize
            </p>
            <p className="how-ais-and">{`Oil Spill Detection `}</p>
          </h1>
        </div>
        <div className="frame-container">
          <img className="frame-inner" alt="" src="/group-2508.svg" />
          <div className="benefits-content">
            <div className="monitoring-benefit">
              <div className="real-time-monitoring-wrapper">
                <b className="real-time-monitoring">Real-Time Monitoring</b>
              </div>
              <div className="ais-and-satellite">
                AIS and satellite data offer real-time detection of oil spills
                for immediate response.
              </div>
            </div>
          </div>
          <div className="frame-div">
            <div className="image-19-wrapper">
              <img
                className="image-19-icon"
                loading="lazy"
                alt=""
                src="/image-19@2x.png"
              />
            </div>
            <div className="frame-parent1">
              <div className="wide-coverage-wrapper">
                <b className="real-time-monitoring">Wide Coverage</b>
              </div>
              <div className="ais-and-satellite">
                Satellite imagery ensures comprehensive monitoring of vast ocean
                areas, detecting spills globally.
              </div>
            </div>
          </div>
          <div className="accuracy-benefit">
            <div className="accuracy-content">
              <div className="image-20-wrapper">
                <img
                  className="image-20-icon"
                  loading="lazy"
                  alt=""
                  src="/image-20@2x.png"
                />
              </div>
              <div className="frame-parent2">
                <div className="high-accuracy-wrapper">
                  <b className="real-time-monitoring">High Accuracy</b>
                </div>
                <div className="ais-and-satellite">
                  AIS data identifies vessels responsible for spills, improving
                  accuracy in pinpointing spill sources.
                </div>
              </div>
            </div>
          </div>
          <div className="cost-benefit">
            <div className="cost-content">
              <img
                className="cost-content-child"
                loading="lazy"
                alt=""
                src="/group-2511.svg"
              />
            </div>
            <div className="cost-effective-wrapper">
              <b className="real-time-monitoring">Cost-Effective</b>
            </div>
            <div className="ais-and-satellite">
              Combined data reduces the need for extensive manual surveillance,
              lowering overall monitoring costs.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
