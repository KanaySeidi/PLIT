import DirectionPage from "../../molecules/DirectionPage";
import { useTranslation } from "react-i18next";

import img from "../../../assets/img/sisAdm.png";
import img2 from "../../../assets/img/sisAdmin2.png";
import time from "../../../assets/icon/time.svg";
import money from "../../../assets/icon/money.svg";

const SisAdm = () => {
  const { t } = useTranslation();

  return (
    <>
      <DirectionPage
        image={img}
        image1={img2}
        name={t("SisAdm.name")}
        title={t("SisAdm.title")}
        text={t("SisAdm.text")}
        icon={time}
        txt1={t("9class")}
        txt2={t("11class")}
        master={t("SisAdm.master")}
        lvl1={t("SisAdm.1lvl")}
        lvl2={t("SisAdm.2lvl")}
        lvl3={t("SisAdm.3lvl")}
        salary={t("SisAdm.salary")}
        junior={t("SisAdm.junior")}
        middle={t("SisAdm.middle")}
        senior={t("SisAdm.senior")}
        icon2={money}
      />
    </>
  );
};

export default SisAdm;
