import DirectionPage from "../../../components/molecules/DirectionPage";
import { useTranslation } from "react-i18next";

import img from "../../../assets/img/mobDevelop.webp";
import img2 from "../../../assets/img/mobDeveloper.webp";
import time from "../../../assets/icon/time.svg";
import money from "../../../assets/icon/money.svg";

const MobileDevelopment = () => {
  const { t } = useTranslation();

  return (
    <>
      <DirectionPage
        image={img}
        image1={img2}
        name={t("mobDevelopment.name")}
        title={t("mobDevelopment.title")}
        text={t("mobDevelopment.text")}
        icon={time}
        txt1={t("9class")}
        txt2={t("11class")}
        master={t("mobDevelopment.master")}
        lvl1={t("mobDevelopment.1lvl")}
        lvl2={t("mobDevelopment.2lvl")}
        lvl3={t("mobDevelopment.3lvl")}
        salary={t("mobDevelopment.salary")}
        junior={t("mobDevelopment.junior")}
        middle={t("mobDevelopment.middle")}
        senior={t("mobDevelopment.senior")}
        icon2={money}
      />
    </>
  );
};

export default MobileDevelopment;
