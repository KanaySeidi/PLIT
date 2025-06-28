import DirectionPage from "../../molecules/DirectionPage";
import { useTranslation } from "react-i18next";

import img from "../../../assets/img/td.png";
import img2 from "../../../assets/img/td2.png";
import time from "../../../assets/icon/time.svg";
import money from "../../../assets/icon/money.svg";

const TD = () => {
  const { t } = useTranslation();

  return (
    <>
      <DirectionPage
        image={img}
        image1={img2}
        name={t("TD.name")}
        title={t("TD.title")}
        text={t("TD.text")}
        icon={time}
        txt1={t("9class")}
        txt2={t("11class")}
        master={t("TD.master")}
        lvl1={t("TD.1lvl")}
        lvl2={t("TD.2lvl")}
        lvl3={t("TD.3lvl")}
        salary={t("TD.salary")}
        junior={t("TD.junior")}
        middle={t("TD.middle")}
        senior={t("TD.senior")}
        icon2={money}
      />
    </>
  );
};

export default TD;
