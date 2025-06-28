import DirectionPage from "../../../components/molecules/DirectionPage";
import { useTranslation } from "react-i18next";

import Iimg from "../../../assets/img/Information.jpg";
import Iimg2 from "../../../assets/img/Information2.jpg";
import time from "../../../assets/icon/time.svg";
import money from "../../../assets/icon/money.svg";

const Information = () => {
  const { t } = useTranslation();

  return (
    <>
      <DirectionPage
        image={Iimg}
        image1={Iimg2}
        name={t("Information.name")}
        title={t("Information.title")}
        text={t("Information.text")}
        icon={time}
        txt1={t("9class")}
        txt2={t("11class")}
        master={t("Information.master")}
        lvl1={t("Information.1lvl")}
        lvl2={t("Information.2lvl")}
        lvl3={t("Information.3lvl")}
        salary={t("Information.salary")}
        junior={t("Information.junior")}
        middle={t("Information.middle")}
        senior={t("Information.senior")}
        icon2={money}
      />
    </>
  );
};
export default Information;
