import { Atom, Calendar1, Contact, Handshake } from "lucide-react";
import { useTranslation } from "react-i18next";
import TagCloud from "../../components/molecules/WordSphere";
import MainCards from "../../components/atoms/MainCards";
import hero from "../../assets/img/hero.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import ExampleTabs from "../../components/ExampleTabs";
import Example from "../../components/Example";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Main = () => {
  const { t } = useTranslation();

  const heroTextRef = useRef(null);
  const statsRef = useRef(null);
  const missionRef = useRef(null);
  const directionRef = useRef(null);

  const isHeroTextInView = useInView(heroTextRef, {
    once: true,
    margin: "-50px",
  });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });
  const isMissionInView = useInView(missionRef, {
    once: true,
    margin: "-50px",
  });
  const isDirectionInView = useInView(directionRef, {
    once: true,
    margin: "-50px",
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full h-auto bg-gray-400">
      <div className="w-full h-[300px] md:h-[500px] relative">
        <img src={hero} alt="Hero" className="w-full h-full object-cover" />
        <motion.div
          ref={heroTextRef}
          className="absolute top-24 md:top-72 left-4 md:left-16 w-11/12 md:w-1/2 leading-tight"
          variants={fadeInUp}
          initial="hidden"
          animate={isHeroTextInView ? "visible" : "hidden"}
        >
          <p className="text-white text-lg md:text-xl">{t("PLIT")}</p>
          <p className="text-white text-2xl md:text-4xl mt-2 md:mt-4">
            {t("PLITDeviz")}
          </p>
        </motion.div>
      </div>

      <div className="w-11/12 md:w-11/12 mx-auto">
        <motion.div
          ref={statsRef}
          className="w-full h-auto md:h-64 mt-6 md:mt-10 bg-bordo flex flex-col justify-center shadow-2xl rounded-md"
          variants={fadeInUp}
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
        >
          <div className="w-11/12 mx-auto flex flex-col justify-center py-6 md:py-0">
            <p className="text-2xl md:text-3xl text-white text-center">
              {t("PLITNum")}
            </p>
            <div className="w-full flex flex-col md:flex-row justify-around mt-6 md:mt-10 gap-4 md:gap-2">
              <div className="flex gap-2 items-center">
                <Calendar1 color="white" size={60} md={{ size: 90 }} />
                <div className="flex flex-col h-full justify-center">
                  <p className="text-2xl md:text-3xl text-white">
                    {isStatsInView && (
                      <CountUp
                        start={0}
                        end={1971}
                        duration={2}
                        useGrouping={false}
                      />
                    )}
                  </p>
                  <p className="text-base md:text-xl text-white">
                    {t("numCard1")}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Atom color="white" size={60} md={{ size: 90 }} />
                <div className="flex flex-col h-full justify-center">
                  <p className="text-2xl md:text-3xl text-white">
                    {isStatsInView && (
                      <CountUp start={0} end={630} duration={2.5} />
                    )}
                  </p>
                  <p className="text-base md:text-xl text-white">
                    {t("numCard2")}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Contact color="white" size={60} md={{ size: 90 }} />
                <div className="flex flex-col h-full justify-center">
                  <p className="text-2xl md:text-3xl text-white">
                    {isStatsInView && (
                      <CountUp start={0} end={10000} duration={2} />
                    )}
                  </p>
                  <p className="text-base md:text-xl text-white">
                    {t("numCard3")}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Handshake color="white" size={60} md={{ size: 90 }} />
                <div className="flex flex-col h-full justify-center">
                  <p className="text-2xl md:text-3xl text-white">
                    {isStatsInView && (
                      <CountUp start={0} end={20} duration={4} />
                    )}
                  </p>
                  <p className="text-base md:text-xl text-white">
                    {t("numCard4")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={missionRef}
          className="mx-auto mt-8 md:mt-12"
          variants={fadeInUp}
          initial="hidden"
          animate={isMissionInView ? "visible" : "hidden"}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-1/2 px-4 md:px-0">
              <p className="text-bordo text-2xl md:text-4xl mb-6 md:mb-10">
                {t("ourMission")}
              </p>
              <p className="text-bordo text-lg md:text-xl mb-3">
                {t("keyOfSuccess")}
              </p>
              <p className="text-justify text-base md:text-lg text-bordo">
                {t("keyOfSuccessText")}
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <TagCloud />
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={directionRef}
          className="w-full h-[1200px] bg-bordo flex items-center shadow-2xl"
          variants={fadeInUp}
          initial="hidden"
          animate={isDirectionInView ? "visible" : "hidden"}
        >
          <div className="w-full h-[1180px] bg-gray-200  mx-2 shadow-2xl ">
            <p className="text-bordo text-4xl p-10">{t("ourDirection")}</p>
            <div className="w-full h-full mt-14">
              <MainCards />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
