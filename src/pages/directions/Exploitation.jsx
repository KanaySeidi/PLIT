import DirectionExploitation from "../../components/molecules/DirectionExploitation";
import LanguageSwitcher from "../../components/molecules/LanguageSwitcher";
import { useTranslation } from "react-i18next";

import img from "../../assets/img/exploitation1.jpg";
import img2 from "../../assets/img/exploitation2.jpeg";
import time from "../../assets/icon/time.svg";
import money from "../../assets/icon/money.svg";

export const Exploitation = () => {
  const { t } = useTranslation();

  return (
    <>
      <DirectionExploitation
        image={img}
        image1={img2}
        title={t("exploitation.title")}
        text={t("exploitation.text")}
        icon={time}
        txt1={t("9class")}
        txt2={t("11class")}
        master={t("exploitation.master")}
        lvl1={t("exploitation.1lvl")}
        lvl2={t("exploitation.2lvl")}
        lvl3={t("exploitation.3lvl")}
        salary={t("exploitation.salary")}
        beginning={t("exploitation.beginning")}
        experienced={t("exploitation.experienced")}
        professional={t("exploitation.professional")}
        icon2={money}
      />
    </>
  );
};
