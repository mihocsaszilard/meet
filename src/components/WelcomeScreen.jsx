import React from "react";
import '../scss/WelcomeScreen.scss';

import logo from '../img/meetME.png';

function WelcomeScreen(props) {

  return props.showWelcomeScreen ?
  (
    <div className="WelcomeScreen">
      <div className="map"></div>
      <h1>Welcome to the <img src={logo} alt="meetME logo"/> app</h1>
      <h4>Log in to see upcoming events around the world for full-stack developers</h4>
      <div className="button_cont" align="center">
        <div className="google-btn">
          <div className="google-icon-wrapper">
            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google sign-in" />
          </div>
          <button onClick={() => { props.getAccessToken() }} rel="nofollow noopener" className="btn-text" >
            <b>Sign in with google</b>
          </button>
        </div>
      </div>
      <a className="policy" href="https://YOUR_GITHUB_USERNAME.github.io/meet/privacy.html" rel="nofollow noopener" > Privacy policy </a>

      <div className="shapes">
          <div className="shapes shape7"><div className="circle"></div></div>
          <div className="shapes shape8"><div className="circle"></div></div>
          <div className="shapes shape9"><div className="circle"></div></div>
          <div className="shapes shape10"><div className="circle"></div></div>
          <div className="shapes shape11"><div className="circle"></div></div>
          <div className="shapes shape12"><div className="circle"></div></div>
        </div>
    </div>
  )
  : null
}

export default WelcomeScreen;