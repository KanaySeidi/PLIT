import { useTranslation } from "react-i18next";
import checkMark from "../../assets/icon/checkMark.svg";
export const InformationLyceum = () => {
  const { t } = useTranslation();

  const advantages = [
    {
      id: 1,
      text: t("informations.advantages.feedback"),
    },
    {
      id: 2,
      text: t("informations.advantages.teachers"),
    },
    {
      id: 3,
      text: t("informations.advantages.potential"),
    },
  ];
  return (
    <>
      <div className="flex justify-center py-16">
        <div className="w-4/5">
          <div className="mx-auto flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 space-y-6">
              <p className="text-bordo font-semibold uppercase">
                {t("informations.title")}
              </p>
              <h1 className="text-4xl font-bold text-gray-800">
                {t("informations.text")}
              </h1>
              <div className="w-20 h-1 bg-bordo mb-4"></div>
              <p className="text-gray-600">{t("informations.information")}</p>
              <div className="flex justify-start flex-wrap gap-4 text-gray-700 text-base">
                {advantages.map((item) => (
                  <span className="flex items-center" key={item.id}>
                    <img src={checkMark} alt="check" className="w-8 h-8 mr-2" />
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                className="shadow-lg w-full"
              />
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/Sm2e3PeHQbI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="shadow-lg w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
