// Import React
import React from "react";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = {
  logo: require("../assets/logo.png")
};

const footerContainerStyle = {
    position: 'fixed',
    bottom: '10px',
    right: '5px',
    color: '#888',
    zIndex: '3',
    margin: '0',
    background: 'white',
    borderRadius: '5px',
	left: '80%'
}

const footerStyle = {
    fontSize: '100%',
    color: '#888',
    margin: '0',
    padding: '10px',
    color: '#324648',
    width: '89%'
}

const footerLogo = {
	maxWidth: '64px',
    maxHeight: '64px',
    margin: '0',
    position: 'absolute',
    right: '0',
    bottom: '0',
    padding: '5px',
    backgroundColor: 'white',
    borderRadius: '3px'
}

preloader(images);

const Test = (props) => (
          <div style={footerContainerStyle}>
			<div style={footerStyle}>
            @mattboll
			</div>
            <img style={footerLogo} src={images.logo}/>
          </div>
        );

export default class Footer extends React.Component {
  render() {
    return (
            <Test/>
    );
  }
}
