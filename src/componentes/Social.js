import React from "react";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Social = () => {
  return (
    <div className="social">
      <a href="http://twitter.com" rel="noopenernoreferrer">
        <FontAwesomeIcon icon={faTwitter} size="xl" />
      </a>
      <a href="http://facebook.com" rel="noopenernoreferrer">
        <FontAwesomeIcon icon={faFacebook} size="xl" />
      </a>
      <a href="http://instagram.com" rel="noopenernoreferrer">
        <FontAwesomeIcon icon={faInstagram} size="xl" />
      </a>
    </div>
  );
};
