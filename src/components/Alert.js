import React, { Component } from 'react';
 
class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.backgroundColor = null;
    this.height = null;
    this.marginTop = null;
    this.fontSize = '16px';
  };

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.backgroundColor,
      height: this.height,
      marginTop: this.marginTop,
      fontSize: this.fontSize,
    };
  }

  render () {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#4285f4';
    this.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    this.height = '33px';
    this.marginTop = '0';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }
}

export { InfoAlert, ErrorAlert };