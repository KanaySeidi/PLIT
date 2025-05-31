import { useEffect, useState } from "react";
import LanguageSwitcher from "../molecules/LanguageSwitcher";
import MinLogoKy from "../atoms/MinLogoKy";
import MinLogoRu from "../atoms/MinLogoRu";
import NormLogoKy from "../atoms/NormLogoKy";
import NormLogoRu from "../atoms/NormLogoRu";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BurgerMenu from "../../BurgerMenu";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScroll, setIsScroll] = useState(false);
  const [isKG, setIsKy] = useState(i18n.language === "KG");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Обработка скролла
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY >= 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Подписка на смену языка
  useEffect(() => {
    const handleLangChange = (lng) => {
      setIsKy(lng === "KG");
    };

    i18n.on("languageChanged", handleLangChange);
    return () => {
      i18n.off("languageChanged", handleLangChange);
    };
  }, [i18n]);

  // Выбор логотипа
  const renderLogo = () => {
    if (isKG) {
      return isScroll ? <MinLogoKy /> : <NormLogoKy />;
    } else {
      return isScroll ? <MinLogoRu /> : <NormLogoRu />;
    }
  };

  return (
    <>
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-1000 opacity-100">
        {renderLogo()}
      </div>

      <div className="w-full h-14 bg-[#63001F] fixed top-0 left-0 z-40 shadow-2xl">
        <div className="w-11/12 mx-auto h-full gap-8">
          <div
            className={`h-full flex justify-between items-center transition-all duration-500 ${
              isScroll ? "text-white" : "text-[#63001F]"
            }`}
          >
            <div className="flex justify-between gap-3 text-2xl w-1/3  font-semibold">
              <Link to="/">{t("header.home")}</Link>
              <Link to="/courses">{t("header.course")}</Link>
              <Popover>
                {({ open }) => (
                  <>
                    <PopoverButton className="focus:outline-none">
                      {t("header.info")}
                    </PopoverButton>
                    <PopoverPanel
                      className={`absolute ml-[-26px] mt-2 w-46 bg-[#63001F] text-white shadow-lg rounded-lg transition-opacity duration-300 ${
                        open ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                    >
                      <div className="p-2 flex flex-col text-white">
                        <Link
                          to="/info/applicant"
                          className="block px-3 py-2 hover:bg-gray-400 rounded"
                        >
                          {t("info.applicant")}
                        </Link>
                        <Link
                          to="/info/docs"
                          className="block px-3 py-2 hover:bg-gray-400 rounded"
                        >
                          {t("info.docs")}
                        </Link>
                      </div>
                    </PopoverPanel>
                  </>
                )}
              </Popover>
            </div>

            <div className="md:hidden flex w-1/3 ">
              <BurgerMenu
                isOpen={isMobileMenuOpen}
                toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>

            <div
              className={`text-[#63001F] flex justify-around items-center gap-3 text-2xl w-1/3  ${
                isScroll ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div
                className={`h-full flex justify-end items-center transition-all duration-500 font-semibold ${
                  isScroll ? "text-white" : "text-[#63001F]"
                }`}
              >
                <Popover className="relative mr-20">
                  {({ open }) => (
                    <>
                      <PopoverButton className="focus:outline-none">
                        {t("header.news")}
                      </PopoverButton>
                      <PopoverPanel
                        className={`absolute ml-[-38px] mt-2 w-46 bg-[#63001F] shadow-lg rounded-lg transition-opacity duration-300 ${
                          open ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                      >
                        <div className="p-2 flex flex-col">
                          <Link
                            to="/info/applicant"
                            className="block px-3 py-2 hover:bg-gray-400 rounded"
                          >
                            {t("news.holidays")}
                          </Link>
                          <Link
                            to="/info/docs"
                            className="block px-3 py-2 hover:bg-gray-400 hover:text-white rounded"
                          >
                            {t("news.saturdays")}
                          </Link>
                          <Link
                            to="/info/docs"
                            className="block px-3 py-2 hover:bg-gray-400 hover:text-white rounded"
                          >
                            {t("news.lifeLyceum")}
                          </Link>
                        </div>
                      </PopoverPanel>
                    </>
                  )}
                </Popover>
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <PopoverButton className="focus:outline-none">
                        {t("header.plit")}
                      </PopoverButton>
                      <PopoverPanel
                        className={`absolute ml-[-60px] mt-2 w-46 bg-[#63001F] shadow-lg rounded-lg transition-opacity duration-300 ${
                          open ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                      >
                        <div className="p-2 flex flex-col">
                          <Link
                            to="/info/applicant"
                            className="block px-3 py-2 hover:bg-gray-400 rounded"
                          >
                            {t("plit.about")}
                          </Link>
                          <Link
                            to="/info/docs"
                            className="block px-3 py-2 hover:bg-gray-400 hover:text-white rounded"
                          >
                            {t("plit.administration")}
                          </Link>
                          <Link
                            to="/info/docs"
                            className="block px-3 py-2 hover:bg-gray-400 hover:text-white rounded"
                          >
                            {t("plit.teachers")}
                          </Link>
                          <Link
                            to="/info/docs"
                            className="block px-3 py-2 hover:bg-gray-400 hover:text-white rounded"
                          >
                            {t("plit.masters")}
                          </Link>
                        </div>
                      </PopoverPanel>
                    </>
                  )}
                </Popover>
              </div>

              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-14 bg-white mt-14">
        <div className="w-11/12 h-full mx-auto flex justify-between items-center">
          <div className="flex justify-between gap-3 text-2xl w-1/3 font-semibold">
            <Link to="/">{t("header.home")}</Link>
            <Link to="/courses">{t("header.course")}</Link>
            <Popover className="relative z-20">
              {({ open }) => (
                <>
                  <PopoverButton className="focus:outline-none">
                    {t("header.info")}
                  </PopoverButton>
                  <PopoverPanel
                    className={`absolute ml-[-20px] mt-2 w-46 bg-white shadow-lg rounded-lg transition-opacity duration-300 ${
                      open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    <div className="p-2 flex flex-col">
                      <Link
                        to="/info/applicant"
                        className="block px-3 py-2 hover:bg-[#63001F] hover:text-white rounded"
                      >
                        {t("info.applicant")}
                      </Link>
                      <Link
                        to="/info/docs"
                        className="block px-3 py-2 hover:bg-[#63001F] hover:text-white rounded"
                      >
                        {t("info.docs")}
                      </Link>
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>
          </div>

          <div className="flex justify-around items-center gap-3 text-2xl w-1/3 font-semibold">
            <Popover className="relative z-20 mr-8">
              {({ open }) => (
                <>
                  <PopoverButton className="focus:outline-none">
                    {t("header.news")}
                  </PopoverButton>
                  <PopoverPanel
                    className={`absolute ml-[-38px] mt-2 w-46 bg-white shadow-lg rounded-lg transition-opacity duration-300 ${
                      open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    <div className="p-2 flex flex-col">
                      <Link
                        to="/info/applicant"
                        className="block px-3 py-2 hover:bg-[#63001F] hover:text-white rounded"
                      >
                        {t("news.holidays")}
                      </Link>
                      <Link
                        to="/info/docs"
                        className="block px-3 py-2 hover:bg-[#63001F] hover:text-white rounded"
                      >
                        {t("news.saturdays")}
                      </Link>
                      <Link
                        to="/info/docs"
                        className="block px-3 py-2 hover:bg-[#63001F] hover:text-white rounded"
                      >
                        {t("news.lifeLyceum")}
                      </Link>
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>
            <Popover className="relative z-20">
              {({ open }) => (
                <>
                  <PopoverButton className="focus:outline-none">
                    {t("header.plit")}
                  </PopoverButton>
                  <PopoverPanel
                    className={`absolute ml-[-60px] mt-2 w-46 bg-white shadow-lg rounded-lg transition-opacity duration-300 ${
                      open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    <div className="p-2 flex flex-col">
                      <Link
                        to="/info/applicant"
                        className="block px-3 py-2 hover:bg-[#63001F] hover:text-white rounded"
                      >
                        {t("plit.about")}
                      </Link>
                      <Link
                        to="/info/docs"
                        className="block px-3 py-2 hover:bg-[#63001F] hover:text-white rounded"
                      >
                        {t("plit.administration")}
                      </Link>
                      <Link
                        to="/info/docs"
                        className="block px-3 py-2 hover:bg-[#63001F] hover:text-white rounded"
                      >
                        {t("plit.teachers")}
                      </Link>
                      <Link
                        to="/info/docs"
                        className="block px-3 py-2 hover:bg-[#63001F] hover:text-white rounded"
                      >
                        {t("plit.masters")}
                      </Link>
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>

            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-14 left-0 w-full bg-[#63001F] text-white z-30 flex flex-col items-start p-4 gap-3 text-xl shadow-lg ">
          <p>{t("header.home")}</p>
          <p>{t("header.course")}</p>
          <Popover className="relative z-50">
            {({ open }) => (
              <>
                <PopoverButton className="focus:outline-none">
                  {t("header.info")}
                </PopoverButton>
                <PopoverPanel
                  className={`absolute ml-[-20px] mt-2 w-46 bg-white shadow-lg rounded-lg transition-opacity duration-300 ${
                    open ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  <div className="p-2 flex flex-col">
                    <Link
                      to="/info/applicant"
                      className="block px-3 py-2 hover:bg-[#63001F] hover:text-white rounded"
                    >
                      {t("info.applicant")}
                    </Link>
                    <Link
                      to="/info/docs"
                      className="block px-3 py-2 hover:bg-[#63001F] hover:text-white rounded"
                    >
                      {t("info.docs")}
                    </Link>
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>
        </div>
      )}
    </>
  );
};

export default Header;

{
  /* <div className="w-full h-14 bg-[#63001F] fixed top-0 left-0 z-40 shadow-2xl ">
        <div className="w-11/12 mx-auto h-full">
          <div
            className={`h-full flex justify-between items-center transition-all duration-500 ${
              isScroll ? "text-white" : "text-[#63001F]"
            }`}
          >
            <div className="flex justify-between gap-3 text-2xl w-1/3">
              <Link to="/">{t("header.home")}</Link>
              <Link to="/courses">{t("header.course")}</Link>
              <Link to="/info">{t("header.info")}</Link>
            </div>
            <div className="md:hidden flex w-1/3 ">
              <BurgerMenu
                isOpen={isMobileMenuOpen}
                toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>

            <div
              className={`flex text-[#63001F] justify-end items-center gap-3 text-2xl w-1/3  ${
                isScroll ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-14 bg-white mt-14">
        <div className="w-11/12 h-full mx-auto flex justify-between items-center">
          <div className="flex justify-between gap-3 text-2xl w-1/3">
            <Link to="/">{t("header.home")}</Link>
            <Link to="/courses">{t("header.course")}</Link>
            <Link to="/info">{t("header.info")}</Link>
          </div>

          <div className="flex text-[#63001F] justify-end items-center gap-3 text-2xl w-1/3">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-14 left-0 w-full bg-[#63001F] text-white z-30 flex flex-col items-start p-4 gap-3 text-xl shadow-lg ">
          <p>{t("header.home")}</p>
          <p>{t("header.course")}</p>
          <p>{t("header.info")}</p>
        </div>
      )} */
}
