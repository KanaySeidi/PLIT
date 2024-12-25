import { useEffect } from "react";
import Logo from "../atoms/logo";
import LanguageSwitcher from "../molecules/LanguageSwitcher";
import SocialMedia from "../molecules/SocialMedia";
import { useState } from "react";
import MinLogo from "../atoms/MinLogo";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
        {isScroll ? (
          <div className="transition-all duration-1000 opacity-100">
            <MinLogo />
          </div>
        ) : (
          <div className="transition-all duration-1000 opacity-100">
            <Logo />
          </div>
        )}
      </div>
      <div className="w-full h-14 bg-[#63001F] fixed top-0 left-0 z-40">
        <div className="w-11/12 mx-auto h-full">
          <div
            className={`h-full flex justify-between items-center transition-all duration-500  ${
              isScroll ? "text-white " : "text-[#63001F] "
            }`}
          >
            <div className="flex justify-between gap-3  text-2xl w-1/3">
              <p>Главная</p>
              <p>Новости</p>
              <p>Курсы</p>
              <p>Информация</p>
            </div>

            <div
              className={`flex text-[#63001F] justify-end items-center gap-3 text-2xl w-1/3 transition-all duration-500 ${
                isScroll ? "opacity-100 visible" : "opacity-0 invisible"
              } `}
            >
              <SocialMedia />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-14  bg-white  mt-14 ">
        <div className="w-11/12 h-full mx-auto flex justify-between items-center ">
          <div className="flex justify-between gap-3  text-2xl w-1/3">
            <p>Главная</p>
            <p>Новости</p>
            <p>Курсы</p>
            <p>Информация</p>
          </div>
          <div className="flex text-[#63001F] justify-end items-center gap-3 text-2xl w-1/3  ">
            <SocialMedia />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;