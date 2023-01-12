import React from "react";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Social = () => {
  return (
    <div className="social mt-2">
      <a
        href="https://www.linkedin.com/in/agustin-ruben-fernandez/"
        rel="noopenernoreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} size="xl" className="icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/agustin-ruben-fernandez/"
        rel="noopenernoreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} size="xl" className="icon" />
      </a>
      <a href="https://www.instagram.com/endolft8/" rel="noopenernoreferrer">
        <FontAwesomeIcon icon={faInstagram} size="xl" className="icon" />
      </a>
    </div>
  );
};
