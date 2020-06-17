import React, { Component } from "react";
import UserCreate from '../components/UserCreate';
import LangaugeContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext'
class App extends Component {
  constructor() {
    super();
    this.state = { language: "english" };
  }

  onLanguageChange = (language) => {
    this.setState({language})
  }

  render() {
    const selectLanguage = "Select a language:";
    return (
      <div className="ui container">
        <div>
          {selectLanguage}
          <i
            role="button"
            tabIndex="-1"
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            role="button"
            tabIndex="-1"
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <ColorContext.Provider value="red">
          <LangaugeContext.Provider value={this.state.language}>
            <UserCreate />
          </LangaugeContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
