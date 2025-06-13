import { useTranslation } from "react-i18next";
import documentImg from "../../assets/img/document.webp";

export const Documents = () => {
  const { t } = useTranslation();

  const textDocuments = [
    {
      id: 1,
      title: t("documents.titleDocument"),
      text: t("documents.textDocument"),
    },
    {
      id: 2,
      title: t("documents.titleDocument"),
      text: t("documents.textDocument"),
    },
    {
      id: 3,
      title: t("documents.titleDocument"),
      text: t("documents.textDocument"),
    },
    {
      id: 4,
      title: t("documents.titleDocument"),
      text: t("documents.textDocument"),
    },
    {
      id: 5,
      title: t("documents.titleDocument"),
      text: t("documents.textDocument"),
    },
    {
      id: 6,
      title: t("documents.titleDocument"),
      text: t("documents.textDocument"),
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full bg-gray-400">
        <div className="w-full lg:w-1/2 relative">
          <img
            src={documentImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 bg-bordo text-white py-16 flex justify-center ">
          <div className="w-4/5 ">
            <h1 className="text-4xl font-extrabold mb-4 leading-tight ">
              {t("documents.title")}
            </h1>
            <div className="w-20 h-1 bg-white mb-6"> </div>
            <p className="text-base leading-relaxed mb-12 max-w-xl">
              {t("documents.text")}
            </p>

            <div className="flex flex-wrap md:flex-row flex-col gap-y-8">
              {textDocuments.map((doc) => (
                <div className="w-full md:w-1/2 pr-4" key={doc.id}>
                  <h1 className="text-xl font-semibold mb-2">{doc.title}</h1>
                  <p className="text-sm text-white/90">{doc.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
