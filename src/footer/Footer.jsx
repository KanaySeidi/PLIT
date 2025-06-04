import React from "react";
import logo from "../assets/icon/plitfoot.svg";

const Footer = () => {
  return (
    <footer className="bg-[#63001F] text-white p-8 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Левый блок: логотип вверху и левее */}
        <div className="flex flex-col items-start">
          <img
            src={logo}
            alt="Логотип лицея"
            className="filter invert brightness-0 mb-4 w-64 h-auto"
          />
          <h3 className="font-semibold text-lg pl-5">Лицей «Наследие»</h3>
          <p className="mt-2 text-sm pl-5">
            Профессиональный лицей №99 — пространство для тех, кто ищет больше,
            чем знания. Здесь рождаются идеи, укрепляется характер и открываются
            горизонты.
          </p>
        </div>

        {/* Центр: быстрые ссылки */}
        <div className="text-sm space-y-1 text-center">
          <h4 className="font-semibold mb-2">Страницы</h4>
          <a href="/courses" className="block hover:underline">
            Курсы
          </a>
          <a href="/info/applicant" className="block hover:underline">
            Абитуриентам
          </a>
          <a href="/info/docs" className="block hover:underline">
            Документация
          </a>
          <a href="/info/npa" className="block hover:underline">
            НПА КР
          </a>
          <a href="/teachers" className="block hover:underline">
            Праздники
          </a>
          <a href="/contacts" className="block hover:underline">
            Субботники
          </a>
          <a href="" className="block hover:underline">
            Жизнь в лицее
          </a>
          <a href="" className="block hover:underline">
            О лицее
          </a>
          <a href="" className="block hover:underline">
            Администрация
          </a>
          <a href="" className="block hover:underline">
            Педагоги
          </a>
          <a href="" className="block hover:underline">
            Мастера
          </a>
        </div>

        {/* Правый блок: связь */}
        <div className="text-sm flex flex-col space-y-6 pr-4">
          <h4 className="font-semibold text-lg">Связаться с нами</h4>
          <div>
            <p className="pt-1">
              Email:{" "}
              <a
                href="mailto:professionalnyylitsey99@gmail.com"
                className="underline"
              >
                professionalnyylitsey99@gmail.com
              </a>
            </p>
            <p className="pt-1">
              Телефон:{" "}
              <a href="tel:+996312123456" className="underline">
                +996 (312) 53-39-05
              </a>
            </p>
            <p className="pt-1">Адрес: 18 ул. Горького, Бишкек</p>
          </div>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/99litsey?igsh=cmp3bDdlOTM5ajFw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 mx-24 rounded-full bg-[#d83529dc] hover:bg-[#b52a22] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0,0,256,256"
              width="24"
              height="24"
              fill="white"
            >
              <g transform="scale(8,8)">
                <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="mt-8 border-t pt-4 flex flex-col items-center text-center text-sm md:text-base font-semibold">
        <div>© {new Date().getFullYear()} «PLIT99». Все права защищены.</div>
      </div>
    </footer>
  );
};

export default Footer;
