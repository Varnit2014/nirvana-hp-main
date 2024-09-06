import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`homepage-child ${className}`}>
      <header className="frame-group">
        <nav className="nav-bar-wrapper">
          <nav className="nav-bar">
            <a className="home" href="#" onClick={() => window.location.reload()}>Home</a>
            <a className="about-us" href="#" onClick={() => window.location.reload()}>About Us</a>
            <a className="community" href="#" onClick={() => window.location.reload()}>Community</a>
            <a className="dashboard" href="http://localhost:5173" target="_blank" rel="noopener noreferrer">Dashboard</a>
          </nav>
        </nav>
      </header>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
