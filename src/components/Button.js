import React, { Component } from "react";
import LangaugeContext from "../contexts/LanguageContext";

class Button extends Component {
  //this is how to wire Contexts via classBased Components
  static contextType = LangaugeContext;
  render() {
    // good way of checking the wiring if its working correctly
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
    return (
        <button className="ui button primary">{text}</button>
    );
  }
}

export default Button;
