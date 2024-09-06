import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`call-to-action-container-parent ${className}`}>
      <div className="call-to-action-container">
        <div className="call-to-action-container-child" />
        <div className="call-to-action-content">
          <h1 className="join-us-in">
            Join us in safeguarding our oceans-<br />Sign in or Sign up to get started!
          </h1>
        </div>
        <div className="rectangle-parent">
          <div className="rectangle-div" />
            <h2>
              <input type="email" id="email-input" className="rectangle-input" />
            </h2>
          <button className="vector-container">
            <img className="rectangle-icon" alt="" src="/rectangle-181.svg" />
            <h2 className="sign-in">Sign In</h2>
        </button>
        </div>
        {/* <div className="group-div">
          <img className="frame-child1" alt="" src="/rectangle-182.svg" />
          <div className="sign-up">Sign Up</div>
        </div>
      </div>
      <div className="sign-up-divider-parent">
        <div className="sign-up-divider" />
        <h3 className="dont-have-an">Don’t have an account?Sign up here!</h3>
      </div> */}
      </div>
      <img
        className="earth-removebg-preview-1-icon"
        loading="lazy"
        alt=""
        src="/earthremovebgpreview-1@2x.png"
      />
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
