import React, { Component } from "react";
import LangaugeContext from "../contexts/LanguageContext";

class Field extends Component {
    //this is how to wire Contexts via classBased Components
  static contextType = LangaugeContext;

  render() {
    const text = this.context === "english" ? "Name" : "Naam";
    // this static bit checking context is like a single source of contextual data
    return (
      <div className="ui field">
        <label htmlFor="">{text}</label>
        <input type="text" />
      </div>
    );
  }
}

export default Field;
