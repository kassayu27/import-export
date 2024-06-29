import React from 'react'

const Footer = () => {
  return (
    <>
       <footer className="main-footer footer-style-three">
    <div
      className="bg bg-image"
      style={{ backgroundImage: "url(images/background/2.jpg)" }}
    />
    <div className="widgets-section">
      <div className="auto-container">
        <div className="row">
          <div className="footer-column col-lg-4 col-md-6 col-sm-12">
            <div className="footer-widget contact-widget">
              <h4 className="widget-title">Contact Info</h4>
              <div className="widget-content">
                <ul className="contact-list-three light">
                  <li>
                    <i className="fal fa-mobile" />
                    <a href="tel:+11238880000">+1 123 888 0000</a>
                  </li>
                  <li>
                    <i className="fal fa-envelope" />
                    <a href="https://html.kodesolution.com/cdn-cgi/l/email-protection#f78284928599969a92b793989a969e99d994989a">
                      <span
                        className="__cf_email__"
                        data-cfemail="34414751465a55595174505b59555d5a1a575b59"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </li>
                  <li>
                    <i className="fal fa-map-marker-alt" />
                    New Street 012 Broklyn Street, 57 New York, United State
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-column col-lg-4 col-md-6 col-sm-12">
            <div className="footer-widget links-widget">
              <h4 className="widget-title">Quick Links</h4>
              <div className="widget-content">
                <ul className="user-links style-two two-column">
                  <li>
                    <i className="icon fa fa-caret-right" />{" "}
                    <a href="#">About Company</a>
                  </li>
                  <li>
                    <i className="icon fa fa-caret-right" />{" "}
                    <a href="#">Air Freight</a>
                  </li>
                  <li>
                    <i className="icon fa fa-caret-right" />{" "}
                    <a href="#">Latest Services</a>
                  </li>
                  <li>
                    <i className="icon fa fa-caret-right" />{" "}
                    <a href="#">Ocean Freight</a>
                  </li>
                  <li>
                    <i className="icon fa fa-caret-right" />{" "}
                    <a href="#">Why Choose Us</a>
                  </li>
                  <li>
                    <i className="icon fa fa-caret-right" />{" "}
                    <a href="#">Railway Freight</a>
                  </li>
                  <li>
                    <i className="icon fa fa-caret-right" />{" "}
                    <a href="#">Blog &amp; News</a>
                  </li>
                  <li>
                    <i className="icon fa fa-caret-right" />{" "}
                    <a href="#">Warehousing</a>
                  </li>
                  <li>
                    <i className="icon fa fa-caret-right" />{" "}
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <i className="icon fa fa-caret-right" />{" "}
                    <a href="#">Distribution</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-column col-lg-4 col-md-6 col-sm-12">
            <div className="footer-widget gallery-widget">
              <h4 className="widget-title">Photo Gallery</h4>
              <div className="widget-content">
                <div className="insta-gallery">
                  <figure className="image">
                    <a href="#">
                      <img
                        src="images/resource/gallery-thumb-1.jpg"
                        alt="Image"
                      />
                    </a>
                  </figure>
                  <figure className="image">
                    <a href="#">
                      <img
                        src="images/resource/gallery-thumb-2.jpg"
                        alt="Image"
                      />
                    </a>
                  </figure>
                  <figure className="image">
                    <a href="#">
                      <img
                        src="images/resource/gallery-thumb-3.jpg"
                        alt="Image"
                      />
                    </a>
                  </figure>
                  <figure className="image">
                    <a href="#">
                      <img
                        src="images/resource/gallery-thumb-4.jpg"
                        alt="Image"
                      />
                    </a>
                  </figure>
                  <figure className="image">
                    <a href="#">
                      <img
                        src="images/resource/gallery-thumb-5.jpg"
                        alt="Image"
                      />
                    </a>
                  </figure>
                  <figure className="image">
                    <a href="#">
                      <img
                        src="images/resource/gallery-thumb-6.jpg"
                        alt="Image"
                      />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="inner-container">
          <div className="logo">
            <img src="images/logo-2.png" alt="" />
          </div>
          <div className="copyright-text">
            © Copyright 2024 by Purposeblack.eth
          </div>
          <ul className="social-icon-five">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-pinterest-p" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer