import "./navbar.styles.css";

type NavBarProps = {
  username: string;
};

const NavBar = ({ username }: NavBarProps) => (
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto">
        <a href="index.html">SocialHub</a>
      </h1>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li>
            <a className="nav-link active" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#about">
              Contact
            </a>
          </li>
          <li className="dropdown">
            <a href="#appointment" className="appointment-btn">
              {username} <i className="bi bi-chevron-down"></i>
            </a>
            <ul>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
              <li>
                <hr />
              </li>
              <li>
                <a href="#">Log off</a>
              </li>
            </ul>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>
);

export default NavBar;
