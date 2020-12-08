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

import profile from "../assets/profile.jpg";
// console.log(profile);

const Title = (props) => <h1 className="title">{props.text}</h1>;

function Status() {
  return <p>This box will contain Status files.</p>;
}

// function statusDp() {
//   return <p>This box will contain Status files.</p>;
//   <div className="status_dp">
//     <img src={profile} alt="profile" />;
//   </div>;
// }

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
    <div>
      <Form>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 text-left"
        />
      </Form>
    </div>
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
      </div>

      <div className="sub_box">
        <Title text="Status"></Title>
        <Status>
          <div className="dp">
            
            <img src={profile} width="500px" alt="profile" />;
          </div>
        </Status>
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
