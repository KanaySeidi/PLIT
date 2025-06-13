import DirectionPage from "../../components/molecules/DirectionPage";
import { useTranslation } from "react-i18next";

import Cimg from "../../assets/img/CarMechanic.jpg";
import Cimg2 from "../../assets/img/CarMechanic2.jpg";
import time from "../../assets/icon/time.svg";
import money from "../../assets/icon/money.svg";
const AutoMechanic = () => {
  const { t } = useTranslation();

  return (
    <>
      <DirectionPage
        image={Cimg}
        image1={Cimg2}
        name={t("AutoMechanic.name")}
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
        junior={t("AutoMechanic.junior")}
        middle={t("AutoMechanic.middle")}
        senior={t("AutoMechanic.senior")}
        icon2={money}
      />
    </>
  );
};
export default AutoMechanic;
