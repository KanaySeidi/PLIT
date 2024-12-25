import { Atom, Calendar1, Contact, Handshake } from "lucide-react";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[4000px] bg-gray-400">
      <div className="w-11/12 mx-auto py-32">
        <div className="w-full h-64 bg-bordo flex flex-col justify-center shadow-2xl p-10 rounded-md">
          <div className="w-11/12 mx-auto ">
            <p className="text-5xl text-center mb-4 text-white">
              {t("BannerWords")}
            </p>
            <p className="w-full text-right text-lg italic text-white">
              {t("BannerAuthor")}
            </p>
          </div>
        </div>
        <div className="w-full h-96 bg-white absolute left-0 mt-32 z-10">
          <div className="w-11/12 h-full mx-auto  flex flex-col justify-center">
            <p className="text-3xl text-bordo">{t("PLITNum")}</p>
            <div className="w-full flex justify-around mt-10">
              <div className="flex gap-2">
                <Calendar1 color="#63001F" size={90} />
                <div className="flex flex-col h-full justify-center">
                  <p className="text-3xl text-bordo">1971</p>
                  <p className="text-xl text-bordo">{t("numCard1")}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Atom color="#63001F" size={90} />
                <div className="flex flex-col h-full justify-center">
                  <p className="text-3xl text-bordo">630</p>
                  <p className="text-xl text-bordo">{t("numCard2")}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Contact color="#63001F" size={90} />
                <div className="flex flex-col h-full justify-center">
                  <p className="text-3xl text-bordo">10000</p>
                  <p className="text-xl text-bordo">{t("numCard3")}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Handshake color="#63001F" size={90} />
                <div className="flex flex-col h-full justify-center">
                  <p className="text-3xl text-bordo">20</p>
                  <p className="text-xl text-bordo">{t("numCard4")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
