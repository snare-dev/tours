import React from "react";

import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

const nav__links = [
  {
    path: "/home",
    display: "/home",
  },
  {
    path: "#",
    display: "/about",
  },
  {
    path: "/tours",
    display: "/tours",
  },
  {
    path: "/contact",
    display: "/contact",
  },
];

const Header = () => {
  return (
    <Container>
      <Row>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          {/* logo start */}
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          {/* logo end */}

          {/* menu start */}
          <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink to={item.path}>{item.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* menu end */}

          <div className="nav__right d-flex align-items-center gap-4">
            <div className="nav__btns d-flex align-items-center gap-4">
              <Button className="btn secondary__btn">
                <Link to='/login'>Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Header;
