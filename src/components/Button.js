import React from "react";
import LangaugeContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

const Button = () => {
  // this is how to wire Contexts via classBased Components
  // Similar to the Field component vs the context type approach.. is like the many method
  // All of the Consumers need a {()=>} or a helper method for clarity
  return (
    <ColorContext.Consumer>
      {(color) => (
        <button type="button" className={`ui button ${color}`}>
          <LangaugeContext.Consumer>
            {(value) => (value === "english" ? "Submit" : "Voorleggen")}
          </LangaugeContext.Consumer>
        </button>
      )}
    </ColorContext.Consumer>
  );
};

export default Button;
