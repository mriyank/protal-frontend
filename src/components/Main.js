import React from "react";
import "./Main.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
const Title = (props) => <h1 className="title">{props.text}</h1>;

function Dance() {
  return <p>This box will contain dance files.</p>;
}

function Music() {
  return <p>This box will contain Music files.</p>;
}

function Photography() {
  return <p>This box will contain Photography files.</p>;
}

const NavBar = () => (
  <header className="navbar">
    <div className="navbar__title navbar__item">Protal</div>
    <div className="navbar__item">About Us</div>
    <div className="navbar__item">Contact</div>
    <div className="navbar__item">Help</div>
  </header>
);

const Main = (props) => {
  return (
    <div className="box">
      <div>
        <NavBar />
        <main>We sell cutting edge knives.</main>
      </div>
      <div className="sub_box">
        <Title text="Dance"></Title>
        <Dance />
      </div>

      <div className="sub_box">
        <Title text="Music"></Title>
        <Music />
      </div>

      <div className="sub_box">
        <Title text="Photography"></Title>
        <Photography />
      </div>
    </div>
  );
};

export default Main;
