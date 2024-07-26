<nav className="main-menu collapse navbar-collapse">
  <ul>
    <li className="menu-item-has-children active">
      <Link onClick={ClickHandler} href="/">
        <span>Banking & Tax</span>
      </Link>
      <ul className="submenu">
        {/* <li>
          <Link onClick={ClickHandler} href="/">
            <span>Immigration</span>
          </Link> */}
        {/* here  */}
        <li className="menu-item-has-children active">
          <Link onClick={ClickHandler} href="/">
            <span>Banking & Tax</span>
          </Link>
          <ul className="submenu">
            <li>
              <Link onClick={ClickHandler} href="/">
                <span>Immigration</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/home-studient-visa">
                <span>Studient Visa</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/home-travel-agency">
                <span>Travel Agency</span>
              </Link>
            </li>
          </ul>
        </li>
        {/* and here  */}
        {/* </li> */}
        <li>
          <Link onClick={ClickHandler} href="/home-studient-visa">
            <span>Studient Visa</span>
          </Link>
        </li>
        <li>
          <Link onClick={ClickHandler} href="/home-travel-agency">
            <span>Travel Agency</span>
          </Link>
        </li>
      </ul>
    </li>
    <li className="menu-item-has-children">
      <Link onClick={ClickHandler} href="/">
        <span>Business Setup & Residency</span>
      </Link>
      <ul className="submenu">
        <li>
          <Link onClick={ClickHandler} href="/services">
            <span>Services</span>
          </Link>
          <ul className="submenu">
            <li>
              <Link onClick={ClickHandler} href="/services">
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/service-single/Tourist-Visa">
                <span>Service Details</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/coaching">
                <span>Coaching</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/coaching-single/Take-IELTS">
                <span>Coaching Details</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/visa">
                <span>Visa</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/visa-single/Commercial-Visa">
                <span>Visa Details</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/team">
                <span>Team</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/team-single/Esther-Howard">
                <span>Team Details</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/testimonial">
                <span>Testimonials</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/faq">
                <span>FAQ</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href="/404">
                <span>404</span>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link onClick={ClickHandler} href="/service-single/Tourist-Visa">
            <span>Service Details</span>
          </Link>
        </li>
        <li>
          <Link onClick={ClickHandler} href="/coaching">
            <span>Coaching</span>
          </Link>
        </li>
        <li>
          <Link onClick={ClickHandler} href="/coaching-single/Take-IELTS">
            <span>Coaching Details</span>
          </Link>
        </li>
        <li>
          <Link onClick={ClickHandler} href="/visa">
            <span>Visa</span>
          </Link>
        </li>
        <li>
          <Link onClick={ClickHandler} href="/visa-single/Commercial-Visa">
            <span>Visa Details</span>
          </Link>
        </li>
        <li>
          <Link onClick={ClickHandler} href="/team">
            <span>Team</span>
          </Link>
        </li>
        <li>
          <Link onClick={ClickHandler} href="/team-single/Esther-Howard">
            <span>Team Details</span>
          </Link>
        </li>
        <li>
          <Link onClick={ClickHandler} href="/testimonial">
            <span>Testimonials</span>
          </Link>
        </li>
        <li>
          <Link onClick={ClickHandler} href="/faq">
            <span>FAQ</span>
          </Link>
        </li>
        <li>
          <Link onClick={ClickHandler} href="/404">
            <span>404</span>
          </Link>
        </li>
      </ul>
    </li>
    <li className="menu-item-has-children">
      <Link onClick={ClickHandler} href="/">
        <span>Wealth Managment</span>
      </Link>
      <ul className="submenu">
        <li>
          <Link onClick={ClickHandler} href="/country">
            <span>Country</span>
          </Link>
        </li>
        <li>
          <Link onClick={ClickHandler} href="/country-single/Australia">
            <span>Country Details</span>
          </Link>
        </li>
      </ul>
    </li>
    <li className="menu-item-has-children">
      <Link onClick={ClickHandler} href="/">
        <span>Other Services</span>
      </Link>
      <ul className="submenu">
        <li>
          <Link onClick={ClickHandler} href="/blog">
            <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={ClickHandler}
            href="/blog-single/Cultural-adjustment-thriving-in-a-new-country"
          >
            <span>Blog Details</span>
          </Link>
        </li>
      </ul>
    </li>
    <li>
      <Link onClick={ClickHandler} href="/contact">
        <span>Contact us</span>
      </Link>
    </li>
    <li>
      <Link onClick={ClickHandler} href="/about">
        <span>About us</span>
      </Link>
    </li>
  </ul>
</nav>;
