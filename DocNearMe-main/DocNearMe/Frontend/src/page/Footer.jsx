import "../styles/Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">DocNearMe</span>
            </a>
            <div className="footer-contact pt-3">
              <p>Pune,Maharashtra</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+1 800 123 4567</span>
              </p>
              <p>
                <strong>Email:</strong> <span>DocNearMe@gmail.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/appointments">Book Appointment</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#">General Dentistry</a>
              </li>
              <li>
                <a href="#">Orthodontics</a>
              </li>
              <li>
                <a href="#">Pediatric Dentistry</a>
              </li>
              <li>
                <a href="#">Teeth Whitening</a>
              </li>
              <li>
                <a href="#">Emergency Dental Care</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Insurance & Payment</a>
              </li>
              <li>
                <a href="#">Patient Reviews</a>
              </li>
              <li>
                <a href="#">Dental Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Live Chat</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">DocNearMe</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          <span>Designed by DocNearMe</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;