import brand from "./images/artadokht.jpg";
import paypal from "./images/paypal.png";
import Visacard from "./images/visa.png";
import Master from "./images/Mastercard.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container_1 grid--footer">
        <div className="logo-col">
          <a className="footer-logo" href="/">
            <img src={brand} alt="BrandName" className="logo" />
          </a>
          <ul className="social-links">
            <li>
              <a className="footer-link" href="/">
                <ion-icon class="social-icon " name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a className="footer-link" href="/">
                <ion-icon class="social-icon " name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                <ion-icon class="social-icon " name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>

          <p className="copyright" href="/">
            copyright &copy; 2027 by Brand X, Inc. All rights reserved
          </p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address class="contacts">
            <p>Your address</p>

            <p>
              <a className="footer-link" href="tel:415-201-6370">
                415-201-6370
              </a>{" "}
              <br />
              <a className="footer-link" href="mailto:hello@omnifood.com">
                hello@YourBrand.com
              </a>
            </p>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="/">
                Create account
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Sign in
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                iOS app
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="/">
                About Us
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                For Business
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Cooking partners
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Payment Methods</p>
          <ul className="footer-nav">
            <div className="footer-nav_wrapper">
              <li>
                <a className="footer-link" href="/">
                  <img src={paypal} alt="paypal" className="Payment" />
                </a>
              </li>
              <li>
                <a className="footer-link" href="/">
                  <img src={Visacard} alt="Visacard" className="Payment" />
                </a>
              </li>
              <li>
                <a className="footer-link" href="/">
                  <img src={Master} alt="MasterCard" className="Payment" />
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
