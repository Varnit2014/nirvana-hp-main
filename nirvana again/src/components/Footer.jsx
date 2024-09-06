import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <img src='public\footer.png' alt="Footer of page" className="image-class" />
    // <footer className={`footer ${className}`}>
    //   <div className="footer-child" />
    //   <div className="footer-content">
    //   <img src='public\logo.png' alt="Description of the image" className="image-class" />
    //     <div className="footer-links-title-parent">
    //       <div className="footer-links-title">
          
    //         <div className="follow-us">Follow us</div>
    //         {/* <div className="useful-links">Useful Links</div> */}
    //       </div>
    //       <div className="social-links">
    //         {/* <div className="social-icons">
    //           <img
    //             className="ettwitter-icon"
    //             loading="lazy"
    //             alt=""
    //             src="/ettwitter.svg"
    //           />
    //           <img
    //             className="etlinkedin-icon"
    //             loading="lazy"
    //             alt=""
    //             src="/etlinkedin.svg"
    //           />
    //           <img
    //             className="circumfacebook-icon"
    //             loading="lazy"
    //             alt=""
    //             src="/circumfacebook.svg"
    //           />
    //           <img
    //             className="bxlinstagram-icon"
    //             loading="lazy"
    //             alt=""
    //             src="/bxlinstagram.svg"
    //           />
    //         </div> */}
            
    //         <div className="our-projects-faqs-container">
    //           <ul className="our-projects-faqs-news-and-up">
    //             <li className="our-projects">Our Projects</li>
    //             <li className="our-projects">FAQ’s</li>
    //             <li>News and Updates</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="copyright">
    //       <div className="all-copyrights-reserved">All Copyrights reserved</div>
    //     </div>
    //   </div>
    //   <div className="contact-info">
    //     <div className="contacts">Contacts</div>
    //     <div className="address-4-5-container">
    //       <p className="email-nirvanagmailcom">
    //         Address : 4-5 Main road , Delhi
    //       </p>
    //       <p className="email-nirvanagmailcom">Email : nirvana@gmail.com</p>
    //       <p className="phone-number">Phone Number : +91 4533433265</p>
    //     </div>
    //   </div>
    // </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
