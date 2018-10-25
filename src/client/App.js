import React, { Component } from "react";
// import "./i18n";
import i18n from "i18next";
import { reactI18nextModule, NamespacesConsumer } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next"
    }
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à Réagir et réagir-i18next"
    }
  },
  de: {
    translation: {
      "Welcome to React": "Willkommen bei Reagieren und reagieren-i18next"
    }
  }
};
import "./app.css";
import ReactImage from "./react.png";

export default class App extends Component {
  state = { username: null, language: null };

  componentDidMount() {
    fetch("/api/getUsername")
      .then(res => res.json())
      .then(user => {
        i18n
          .use(reactI18nextModule) // passes i18n down to react-i18next
          .init({
            resources,
            lng: user.language,
            keySeparator: false, // we do not use keys in form messages.welcome
            interpolation: {
              escapeValue: false // react already safes from xss
            }
          });
        this.setState({ username: user.username, language: user.language });
      });
  }

  render() {
    const { username, language } = this.state;
    return (
      <div>
        {username ? (
          <div>
            <h1>{`Hello ${username}, your language is ${language}`}</h1>
            <NamespacesConsumer>
              {t => <h1>{t("Welcome to React")}</h1>}
            </NamespacesConsumer>
          </div>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
