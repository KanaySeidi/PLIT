import DirectionPage from "../../components/molecules/DirectionPage";
import LanguageSwitcher from "../../components/molecules/LanguageSwitcher";
import { useTranslation } from "react-i18next";

import img from "../../assets/img/front.png";
import img2 from "../../assets/img/front2.png";
import time from "../../assets/icon/time.svg";
import money from "../../assets/icon/money.svg";

export const Frontend = () => {
  const { t } = useTranslation();

  return (
    <>
      <DirectionPage
        image={img}
        image1={img2}
        title={t("front.title")}
        text={t("front.text")}
        icon={time}
        txt1={t("9class")}
        txt2={t("11class")}
        master={t("front.master")}
        lvl1={t("front.1lvl")}
        lvl2={t("front.2lvl")}
        lvl3={t("front.3lvl")}
        salary={t("front.salary")}
        junior={t("front.junior")}
        middle={t("front.middle")}
        senior={t("front.senior")}
        icon2={money}
      />
    </>
  );
};
