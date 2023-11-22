import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const Close = (props) => <FontAwesomeIcon {...props} icon={faX} />;

export const Menu = (props) => <FontAwesomeIcon {...props} icon={faBars} />;

export const Youtube = (props) => (
  <FontAwesomeIcon {...props} icon={faYoutube} />
);

export const Instagram = (props) => (
  <FontAwesomeIcon {...props} icon={faInstagram} />
);

export const Twitter = (props) => (
  <FontAwesomeIcon {...props} icon={faXTwitter} />
);
