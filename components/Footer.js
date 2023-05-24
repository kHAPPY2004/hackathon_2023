import React from "react";
import { Button } from "reactstrap";

const Footer = () => {
  return (
    <>
      <div>Follow Us</div>
      <Button
        className="btn-icon-only rounded-circle"
        color="facebook"
        type="button"
      >
        {" "}
        <span className="btn-inner--icon">
          <i className="fab fa-facebook"></i>
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle"
        color="twitter"
        type="button"
      >
        {" "}
        <span className="btn-inner--icon">
          <i className="fab fa-twitter"></i>
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle"
        color="google-plus "
        type="button"
      >
        {" "}
        <span className="btn-inner--icon">
          <i className="fab fa-google-plus-g"></i>
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle"
        color="instagram"
        type="button"
      >
        {" "}
        <span className="btn-inner--icon">
          <i className="fab fa-instagram"></i>
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle"
        color="pinterest"
        type="button"
      >
        {" "}
        <span className="btn-inner--icon">
          <i className="fab fa-pinterest"></i>
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle"
        color="youtube"
        type="button"
      >
        {" "}
        <span className="btn-inner--icon">
          <i className="fab fa-youtube"></i>
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle"
        color="vimeo"
        type="button"
      >
        {" "}
        <span className="btn-inner--icon">
          <i className="fab fa-vimeo-v"></i>
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle"
        color="slack"
        type="button"
      >
        {" "}
        <span className="btn-inner--icon">
          <i className="fab fa-slack"></i>
        </span>
      </Button>
      <Button
        className="btn-icon-only rounded-circle"
        color="dribbble"
        type="button"
      >
        {" "}
        <span className="btn-inner--icon">
          <i className="fab fa-dribbble"></i>
        </span>
      </Button>
    </>
  );
};

export default Footer;
