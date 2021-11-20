import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkedAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './footer.css';

class Footer extends React.Component{
	render(){
		return (
      <div class="f-body">
			<footer>
        <div class="f-container">
        <div class="sec footer-left">
          <h2>About Us</h2>
          <p>
          Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellente squefelis.
          </p>

          <ul class="sci">
          <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
        </ul>
        </div>
        <div class="sec footer-mid">
          <h2>Quick Links</h2>

          <ul>
          <li><a style={{fontFamily:'"Zilla Slab", serif'}}href="#">About</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Help</a></li>
        </ul>
        </div>
        <div class="sec footer-right">
          <h2>How To Find Us</h2>
          <ul class="info">
          <li>
              <span><FontAwesomeIcon icon={faMapMarkedAlt} /></span>
              <p>Avenue Marina 34568 NY (U.S)</p>
          </li>
          <li>
              <span><FontAwesomeIcon icon={faPhone} /></span>
              <p>+0987 193-34-76</p>
          </li>
          <li>
              <span><FontAwesomeIcon icon={faEnvelope} /></span>
              <p>statumsupport@mail.com</p>
          </li>
        </ul>
        </div>
        </div>
      </footer>
      <div class="copyrightText">
        <p>Copyright &copy; 2020 Koad Bistro. All rights reserved.</p>
        </div>
      </div>
		)
	}
}

export default Footer;