import React from 'react'

const Header = () => {
  return (
    <>
       <header className="main-header header-style-three">
    <div className="header-top">
      <div className="auto-container">
        <div className="inner-container">
          <div className="top-left">
            <ul className="social-icon-four">
              <li>
                <a href="#">
                  <i className="icon fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon fab fa-pinterest-p" />
                </a>
              </li>
            </ul>
          </div>
          <div className="top-right">
            <ul className="list-style-one light">
              <li>
                <i className="fa fa-phone" />{" "}
                <a href="tel:0123456789"> (+251)9-146-54545</a>
              </li>
              <li>
                <i className="fa fa-envelope" />{" "}
                <a href="https://html.kodesolution.com/cdn-cgi/l/email-protection#9bf5fefefff3fef7ebdbf8f4f6ebfaf5e2b5f8f4f6">
                  <span
                    className="__cf_email__"
                    data-cfemail="077274627569666a624763686a666e692964686a"
                  >
                    
                    export@purposeblack.et
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="header-lower">
      <div className="auto-container">
        <div className="main-box">
          <div className="logo-box">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo-2.png" alt="Logo" title="Caargo" />
              </a>
            </div>
          </div>
          <div className="nav-outer">
            <nav className="nav main-menu">
              <ul className="navigation">
                <li className="current dropdown">
                  <a href="index.html">Home</a>
                  <ul>
                    <li>
                      <a href="index-3.html">Home 03</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Header Styles</a>
                      <ul>
                        <li>
                          <a href="index.html">Header Style One</a>
                        </li>
                        <li>
                          <a href="index-2.html">Header Style Two</a>
                        </li>
                        <li>
                          <a href="index-3.html">Header Style Three</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Pages</a>
                  <ul>
                    <li>
                      <a href="page-about.html">About</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Projects</a>
                      <ul>
                        <li>
                          <a href="page-projects.html">Projects List</a>
                        </li>
                        <li>
                          <a href="page-project-details.html">
                            Project Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Team</a>
                      <ul>
                        <li>
                          <a href="page-team.html">Team List</a>
                        </li>
                        <li>
                          <a href="page-team-details.html">Team Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Shop</a>
                      <ul>
                        <li>
                          <a href="shop-products.html">Products</a>
                        </li>
                        <li>
                          <a href="shop-products-sidebar.html">
                            Products with Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-details.html">
                            Product Details
                          </a>
                        </li>
                        <li>
                          <a href="shop-cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="shop-checkout.html">Checkout</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="page-testimonial.html">Testimonial</a>
                    </li>
                    <li>
                      <a href="page-pricing.html">Pricing</a>
                    </li>
                   
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Services</a>
                  <ul>
                    <li>
                      <a href="page-services.html">Services</a>
                    </li>
                    <li>
                      <a href="page-service-details.html">Services Details</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">News</a>
                  <ul>
                    <li>
                      <a href="news-grid.html">News Grid</a>
                    </li>
                    <li>
                      <a href="news-details.html">News Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="page-contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="outer-box">
            <button className="ui-btn search-btn">
              <span className="icon lnr lnr-icon-search" />
            </button>
            <div className="btn-box">
              <a href="page-contact.html" className="theme-btn btn-style-one">
                <span className="btn-title">Purposeblack.et</span>
              </a>
            </div>
            <div className="mobile-nav-toggler">
              <span className="icon lnr-icon-bars" />
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <div className="search-popup">
      <span className="search-back-drop" />
      <button className="close-search">
        <span className="fa fa-times" />
      </button>
      <div className="search-inner">
        <form
          method="post"
          action="https://html.kodesolution.com/2024/caargo-html/index.html"
        >
          <div className="form-group">
            <input
              type="search"
              name="search-field"
              defaultValue=""
              placeholder="Search..."
              required
            />
            <button type="submit">
              <i className="fa fa-search" />
            </button>
          </div>
        </form>
      </div>
    </div>
    <div className="sticky-header">
      <div className="auto-container">
        <div className="inner-container">
          <div className="logo">
            <a href="index.html" title="">
              <img src="images/logo.png" alt="" />
            </a>
          </div>
          <div className="nav-outer">
            <nav className="main-menu">
              <div className="navbar-collapse show collapse clearfix">
                <ul className="navigation clearfix"></ul>
              </div>
            </nav>
            <div className="mobile-nav-toggler">
              <span className="icon lnr-icon-bars" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
    </>
  )
}

export default Header