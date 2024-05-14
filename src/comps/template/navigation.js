import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("/home");

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
          style={{
            color: active === "/home" ? "green" : "gray",
            fontSize: "22px"
          }}
          onClick={() => {
            navigate('/home');
            setActive('/home');
          }}
        >
          <i className="bi bi-house-fill"></i>
          <br />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/resources"
          style={{
            color: active === "/resources" ? "green" : "gray",
            fontSize: "20px"
          }}
          onClick={() => {
            navigate('/resources');
            setActive('/resources');
          }}
        >
          <i className="bi bi-archive-fill"></i>
          <br />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/reels"
          style={{
            color: active === "/reels" ? "green" : "gray",
            fontSize: "20px"
          }}
          onClick={() => {
            navigate('/reels');
            setActive('/reels');
          }}
        >
          <i className="bi bi-camera-reels-fill"></i>
          <br />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/podcast"
          style={{
            color: active === "/podcast" ? "green" : "gray",
            fontSize: "20px"
          }}
          onClick={() => {
            navigate('/podcast');
            setActive('/podcast');
          }}
        >
          <i className="bi bi-mic-fill"></i>
          <br />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/profile"
          style={{
            color: active === "/profile" ? "green" : "gray",
            fontSize: "25px"
          }}
          onClick={() => {
            navigate('/profile');
            setActive('/profile');
          }}
        >
          <i className="bi bi-person-fill"></i>
          <br />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;