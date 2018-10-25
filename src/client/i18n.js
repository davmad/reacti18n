import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
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

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
export default i18n;
