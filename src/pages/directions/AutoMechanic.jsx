import DirectionPage from "../../components/molecules/DirectionPage";
import { useTranslation } from "react-i18next";

import Cimg from "../../assets/img/CarMechanic.jpg";
import Cimg2 from "../../assets/img/CarMechanic2.jpg";
import time from "../../assets/icon/time.svg";
import money from "../../assets/icon/money.svg";

export const AutoMechanic = () => {
  const { t } = useTranslation();

  return (
    <>
      <DirectionPage
        image={Cimg}
        image1={Cimg2}
        title={t("AutoMechanic.title")}
        text={t("AutoMechanic.text")}
        icon={time}
        txt1={t("9class")}
        txt2={t("11class")}
        master={t("AutoMechanic.master")}
        lvl1={t("AutoMechanic.1lvl")}
        lvl2={t("AutoMechanic.2lvl")}
        lvl3={t("AutoMechanic.3lvl")}
        salary={t("AutoMechanic.salary")}
        beginning={t("AutoMechanic.beginning")}
        experienced={t("AutoMechanic.experienced")}
        professional={t("AutoMechanic.professional")}
        icon2={money}
      />
    </>
  );
};
