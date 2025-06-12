import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
import useAdminStore from "../../stores/useAdminStore";

function Card({ tour }) {
  const navigate = useNavigate();
  const { deleteTour, getCentralAsiaTours, getKyrgyzstanTours } =
    useAdminStore();
  const [menu, setMenu] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const setMenuVisible = () => {
    setMenu(!menu);
  };

  const openModal = () => {
    setIsModal(!isModal);
    setMenuVisible();
  };

  const mainTranslation =
    tour.translations.find((t) => t.languageCode === "RUS") ||
    tour.translations.find((t) => t.languageCode === "ENG") ||
    tour.translations[0];

  return (
    <>
      <Modal isOpen={isModal} onClose={() => setIsModal(!isModal)}>
        <div className="flex flex-col items-center">
          <p className="mb-4">
            Вы уверены, что хотите удалить?<b>{mainTranslation.title}</b>
          </p>
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={async () => {
                try {
                  await deleteTour(tour.id);
                  if (tour.country === "KG") {
                    getKyrgyzstanTours();
                  } else {
                    await getCentralAsiaTours();
                  }
                  setIsModal(false);
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              Да
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => setIsModal(false)}
            >
              Нет
            </button>
          </div>
        </div>
      </Modal>
      <div
        className="h-max max-w-sm rounded overflow-hidden shadow-lg m-4 relative"
        key={tour.id}
      >
        <img className="w-full" src={tour.previewImage} alt="Tour" />
        <div className="px-6 py-4">
          <p className="font-bold text-xl mb-2">{mainTranslation.title}</p>
          <p className="text-gray-700 text-base">
            {mainTranslation.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {mainTranslation.startDate} - {mainTranslation.endDate}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Duration: {mainTranslation.duration}
          </span>
        </div>
        <div className="px-6 py-4">
          {tour.translations.map((t, index) => (
            <div key={index} className="mb-4">
              <div className="font-bold text-lg">
                {t.languageCode}: {t.title}
              </div>
              <p className="text-gray-700 text-base">{t.description}</p>
              {/* <div>
                {t.dayInfo.map((day, idx) => (
                  <div key={idx} className="ml-4">
                    <div className="font-bold">{day.title}</div>
                    <p className="text-gray-700">{day.text}</p>
                  </div>
                ))}
              </div> */}
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          {menu && (
            <div className="flex flex-col items-end mt-2 bg-white border rounded shadow-lg absolute right-3 bottom-14">
              <button
                className="px-4 py-2 hover:bg-green-200 w-full text-left"
                onClick={() => navigate(`/admin/tour_detail/${tour.id}`)}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 hover:bg-red-200 w-full text-left"
                onClick={openModal}
              >
                Delete
              </button>
            </div>
          )}
          <button
            className="self-end w-fit rounded-md p-2 mt-2 hover:bg-gray-200"
            onClick={setMenuVisible}
          >
            <b>. . .</b>
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
