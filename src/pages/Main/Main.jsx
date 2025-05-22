import { Atom, Calendar1, Contact, Handshake } from "lucide-react";
import { useTranslation } from "react-i18next";
import TagCloud from "../../components/molecules/WordSphere";
import MainCards from "../../components/atoms/MainCards";
import hero from "../../assets/img/hero.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Main = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.8, // 50% элемента должно быть видно
  });

  return (
    <div className="w-full h-[4000px] bg-gray-400">
      <div className="w-full h-[500px]">
        <img src={hero} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-72 left-16 w-1/2 leading-2">
          <p className="text-white text-xl">{t("PLIT")}</p>
          <p className="text-white text-4xl mt-4 ">{t("PLITDeviz")}</p>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="w-full h-64 mt-10 bg-bordo flex flex-col justify-center shadow-2xl  rounded-md z-50">
          <div className="w-11/12 h-full mx-auto flex flex-col justify-center">
            <p className="text-3xl text-white text-center">{t("PLITNum")}</p>
            <div ref={ref} className="w-full flex justify-around mt-10">
              <div className="flex gap-2">
                <Calendar1 color="white" size={90} />
                <div className="flex flex-col h-full justify-center">
                  <p className="text-3xl text-white">
                    {inView && (
                      <CountUp
                        start={0}
                        end={1971}
                        duration={2}
                        useGrouping={false}
                      />
                    )}
                  </p>
                  <p className="text-xl text-white">{t("numCard1")}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Atom color="white" size={90} />
                <div className="flex flex-col h-full justify-center">
                  <p className="text-3xl text-white">
                    {inView && <CountUp start={0} end={630} duration={2.5} />}
                  </p>
                  <p className="text-xl text-white">{t("numCard2")}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Contact color="white" size={90} />
                <div className="flex flex-col h-full justify-center">
                  <p className="text-3xl text-white">
                    {inView && <CountUp start={0} end={10000} duration={2} />}
                  </p>
                  <p className="text-xl text-white">{t("numCard3")}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Handshake color="white" size={90} />
                <div className="flex flex-col h-full justify-center">
                  <p className="text-3xl text-white">
                    {inView && <CountUp start={0} end={20} duration={4} />}
                  </p>
                  <p className="text-xl text-white">{t("numCard4")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto ml-10">
          <div className="flex justify-between items-center">
            <div className="w-1/2">
              <p className="text-bordo text-4xl mb-10">{t("ourMission")}</p>
              <p className="text-bordo text-xl mb-3">{t("keyOfSuccess")}</p>
              <p className="text-justify text-lg text-bordo">
                {t("keyOfSuccessText")}
              </p>
            </div>
            <div>
              <TagCloud />
            </div>
          </div>
        </div>
        <div className="w-full h-[1200px] bg-bordo flex items-center shadow-2xl">
          <div className="w-full h-[1180px] bg-gray-200  mx-2 shadow-2xl ">
            <p className="text-bordo text-center text-4xl p-10">
              {t("ourDirection")}
            </p>
            <div className="w-full h-full mt-14">
              <MainCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
