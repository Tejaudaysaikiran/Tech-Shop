import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

export const Footer=()=>{
    return(
        <>
         <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h2 className="logo">Tech-Shop</h2>
          <p>
            Subscribe to our Email alerts to receive early discount offers, and
            new products info.
          </p>

          <div className="subscribe">
            <input type="email" placeholder="Email Address*" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li>FAQs</li>
            <li>Track Order</li>
            <li>Cancel Order</li>
            <li>Return Order</li>
            <li>Warranty Info</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Policies</h4>
          <ul>
            <li>Return Policy</li>
            <li>Security</li>
            <li>Sitemap</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Service Centres</li>
            <li>Careers</li>
            <li>Affiliates</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 | All Rights Reserved.</p>
        <div className="socials">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
        </>
    )
}