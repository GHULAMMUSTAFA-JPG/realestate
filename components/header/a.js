import Link from "next/link";

const Navbar = ({ ClickHandler }) => (
  <nav className="main-menu collapse navbar-collapse">
    <ul>
      <li className="menu-item-has-children active">
        <Link href="/" onClick={ClickHandler}>
          <span>Banking & Tax</span>
        </Link>
        <ul className="submenu">
          <li>
            <Link href="/" onClick={ClickHandler}>
              <span>Immigration</span>
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/" onClick={ClickHandler}>
                  <span>Immigration Submenu 1</span>
                </Link>
              </li>
              <li>
                <Link href="/" onClick={ClickHandler}>
                  <span>Immigration Submenu 2</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/home-studient-visa" onClick={ClickHandler}>
              <span>Student Visa</span>
            </Link>
          </li>
          <li>
            <Link href="/home-travel-agency" onClick={ClickHandler}>
              <span>Travel Agency</span>
            </Link>
          </li>
        </ul>
      </li>
      <li className="menu-item-has-children">
        <Link href="/" onClick={ClickHandler}>
          <span>Business Setup & Residency</span>
        </Link>
        <ul className="submenu">
          <li>
            <Link href="/services" onClick={ClickHandler}>
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link href="/service-single/Tourist-Visa" onClick={ClickHandler}>
              <span>Service Details</span>
            </Link>
          </li>
          <li>
            <Link href="/coaching" onClick={ClickHandler}>
              <span>Coaching</span>
            </Link>
          </li>
          <li>
            <Link href="/coaching-single/Take-IELTS" onClick={ClickHandler}>
              <span>Coaching Details</span>
            </Link>
          </li>
          <li>
            <Link href="/visa" onClick={ClickHandler}>
              <span>Visa</span>
            </Link>
          </li>
          <li>
            <Link href="/visa-single/Commercial-Visa" onClick={ClickHandler}>
              <span>Visa Details</span>
            </Link>
          </li>
          <li>
            <Link href="/team" onClick={ClickHandler}>
              <span>Team</span>
            </Link>
          </li>
          <li>
            <Link href="/team-single/Esther-Howard" onClick={ClickHandler}>
              <span>Team Details</span>
            </Link>
          </li>
          <li>
            <Link href="/testimonial" onClick={ClickHandler}>
              <span>Testimonials</span>
            </Link>
          </li>
          <li>
            <Link href="/faq" onClick={ClickHandler}>
              <span>FAQ</span>
            </Link>
          </li>
          <li>
            <Link href="/404" onClick={ClickHandler}>
              <span>404</span>
            </Link>
          </li>
        </ul>
      </li>
      <li className="menu-item-has-children">
        <Link href="/" onClick={ClickHandler}>
          <span>Wealth Management</span>
        </Link>
        <ul className="submenu">
          <li>
            <Link href="/country" onClick={ClickHandler}>
              <span>Country</span>
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/country-single/Australia" onClick={ClickHandler}>
                  <span>Country Details</span>
                </Link>
                <ul className="submenu">
                  <li>
                    <Link
                      href="/country-single/Australia/detail1"
                      onClick={ClickHandler}
                    >
                      <span>Country Detail 1</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/country-single/Australia/detail2"
                      onClick={ClickHandler}
                    >
                      <span>Country Detail 2</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="menu-item-has-children">
        <Link href="/" onClick={ClickHandler}>
          <span>Other Services</span>
        </Link>
        <ul className="submenu">
          <li>
            <Link href="/blog" onClick={ClickHandler}>
              <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link
              href="/blog-single/Cultural-adjustment-thriving-in-a-new-country"
              onClick={ClickHandler}
            >
              <span>Blog Details</span>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/contact" onClick={ClickHandler}>
          <span>Contact us</span>
        </Link>
      </li>
      <li>
        <Link href="/about" onClick={ClickHandler}>
          <span>About us</span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
