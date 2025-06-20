import { useTranslation } from "react-i18next";
import { languages } from "../../constants/languages";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lngkey) => {
    if (languages.find((lang) => lang.key === lngkey)) {
      i18n.changeLanguage(lngkey);
      localStorage.setItem("language", lngkey);
    }
  };

  return (
    <div className="w-32 flex justify-evenly cursor-pointer">
      {languages.map((lang) => (
        <img
          key={lang.key}
          src={lang.img}
          alt={lang.key}
          className={`h-10 w-12 rounded-md cursor-pointer ${
            currentLanguage === lang.key ? "scale-100" : "scale-75"
          }`}
          onClick={() => changeLanguage(lang.key)}
        />
      ))}
    </div>
  );
};

export default LanguageSwitcher;
