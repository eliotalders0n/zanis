// Your Navigation Component

import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <Nav
      variant="tabs"
      justify
      defaultActiveKey="/home"
      className="fixed-bottom"
      style={{ backgroundColor: "black" }}
    >
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/home"
          style={{ color: "grey" }}
          onClick={() => navigate('/home')}
        >
          <i className="bi bi-house"></i>
          <br />
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/reels"
          style={{ color: "grey" }}
          onClick={() => navigate('/reels')}
        >
          <i className="bi bi-tv"></i>
          <br />
          Reels
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/profile"
          style={{ color: "grey" }}
          onClick={() => navigate('/profile')}
        >
          <i className="bi bi-person"></i>
          <br />
          Profile
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
