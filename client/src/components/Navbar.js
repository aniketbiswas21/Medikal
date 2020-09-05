import React, { useEffect } from "react";
import "./css/NavBar.css";
import logo from "../images/logo2.PNG";
import { useDispatch } from "react-redux";
import { getProfile } from "../redux/actions/authActions";

const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return (
    <div className="topnav" id="myTopnav">
      <img src={logo} className="logo" />
      <a href="/" className="active" style={{ marginLeft: "13rem" }}>
        Home
      </a>
      <a href="/about">About</a>
      <a href="/services">Services</a>
      <a href="/doctors">Doctors</a>
      <a href="/blog">Blog</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/contact">Contact</a>
      <button className="btn">Appointment</button>
    </div>
  );
};

export default Navbar;
