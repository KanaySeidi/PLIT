
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
    triggerOnce: true,
    threshold: 0.8,
  });

  return (
    <div className="w-full h-[4000px] bg-gray-400">
 
      <div className="w-full h-[500px] sm:h-[400px] relative">
        <img
          src={hero}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-20 sm:top-16 left-4 sm:left-8 md:left-16 w-11/12 sm:w-3/4 md:w-1/2">
          <p className="text-white text-lg sm:text-xl md:text-2xl">
            {t("PLIT")}
          </p>
          <p className="text-white text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-4">
            {t("PLITDeviz")}
          </p>
        </div>
      </div>

      <div className="w-11/12 mx-auto">
      
        <div className="w-full h-auto sm:h-64 mt-6 sm:mt-10 bg-bordo flex flex-col justify-center shadow-2xl rounded-md z-50">
          <div className="w-11/12 mx-auto py-6 sm:py-0">
            <p className="text-2xl sm:text-3xl text-white text-center">
              {t("PLITNum")}
            </p>
            <div
              ref={ref}
              className="w-full flex flex-col sm:flex-row justify-around mt-6 sm:mt-10 gap-6 sm:gap-2"
            >
              <div className="flex gap-2 items-center">
                <Calendar1 color="white" size={60} className="sm:w-90" />
                <div className="flex flex-col justify-center">
                  <p className="text-2xl sm:text-3xl text-white">
                    {inView && (
                      <CountUp
                        start={0}
                        end={1971}
                        duration={2}
                        useGrouping={false}
                      />
                    )}
                  </p>
                  <p className="text-lg sm:text-xl text-white">{t("numCard1")}</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Atom color="white" size={60} className="sm:w-90" />
                <div className="flex flex-col justify-center">
                  <p className="text-2xl sm:text-3xl text-white">
                    {inView && <CountUp start={0} end={630} duration={2.5} />}
                  </p>
                  <p className="text-lg sm:text-xl text-white">{t("numCard2")}</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Contact color="white" size={60} className="sm:w-90" />
                <div className="flex flex-col justify-center">
                  <p className="text-2xl sm:text-3xl text-white">
                    {inView && <CountUp start={0} end={10000} duration={2} />}
                  </p>
                  <p className="text-lg sm:text-xl text-white">{t("numCard3")}</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Handshake color="white" size={60} className="sm:w-90" />
                <div className="flex flex-col justify-center">
                  <p className="text-2xl sm:text-3xl text-white">
                    {inView && <CountUp start={0} end={20} duration={4} />}
                  </p>
                  <p className="text-lg sm:text-xl text-white">{t("numCard4")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="mx-auto mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-full md:w-1/2">
              <p className="text-bordo text-3xl sm:text-4xl mb-6 sm:mb-10">
                {t("ourMission")}
              </p>
              <p className="text-bordo text-lg sm:text-xl mb-3">
                {t("keyOfSuccess")}
              </p>
              <p className="text-justify text-base sm:text-lg text-bordo">
                {t("keyOfSuccessText")}
              </p>
            </div>
            <div className="w-full md:w-auto">
              <TagCloud />
            </div>
          </div>
        </div>

       
        <div className="w-full h-auto sm:h-[1200px] bg-bordo flex items-center shadow-2xl mt-10">
          <div className="w-full h-auto sm:h-[1180px] bg-gray-200 mx-3 shadow-2xl">
            <p className="text-bordo text-3xl sm:text-4xl p-6 sm:p-10">
              {t("ourDirection")}
            </p>
            <div className="w-full h-full mt-6 sm:mt-14">
              <MainCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
