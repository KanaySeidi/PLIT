import React, { useEffect, useState } from "react";
import useAdminStore from "../../../stores/useAdminStore";
import PictureCard from "../../../components/card/PictureCard";
import Modal from "../../../components/modal/Modal";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Pictures() {
  const {
    getPolaroids,
    polaroids,
    uploadPolaroid,
    postGalleryImage,
    getGalleryImages,
    gallery,
    deleteGalleryImage,
    isAdmin,
  } = useAdminStore();
  const { register, handleSubmit } = useForm();
  const [isModal, setIsModal] = useState(false);
  const [isModal2, setIsModal2] = useState(false);
  const [isModal3, setIsModal3] = useState(false);
  const [imageId, setImageId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    isAdmin("/", navigate);
    getPolaroids();
    getGalleryImages();
  }, [getPolaroids, getGalleryImages, isAdmin, navigate]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    console.log(data.image[0]);
    try {
      await uploadPolaroid(formData);
      await getPolaroids();
      setIsModal(!isModal);
    } catch (error) {}
  };

  const fillGallery = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    try {
      await postGalleryImage(formData);
      setIsModal2(!isModal2);
    } catch (error) {}
  };

  return (
    <>
      <div className="flex flex-col mt-10">
        <div className="flex justify-between items-center pl-8">
          <h1 className="text-2xl text-emerald-900 ">
            Добавить картинки для полароида
          </h1>
          <button
            className="self-end m-4 bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150"
            onClick={() => setIsModal(!isModal)}
          >
            Добавить полароид
          </button>
        </div>
        <Modal isOpen={isModal} onClose={() => setIsModal(!isModal)}>
          <form onSubmit={handleSubmit(onSubmit)} className="p-8">
            <div>
              <label className="block text-md font-medium mb-2">
                Загрузите изображения полароид
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                accept=""
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <button className="self-end m-4 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150">
              Загрузить
            </button>
          </form>
        </Modal>

        <div className="flex">
          {polaroids.map((polaroid) => (
            <PictureCard polaroid={polaroid} key={polaroid.id} />
          ))}
        </div>

        <div className="bg-green-800 w-full mt-10 h-12"></div>

        <div className=" flex items-center justify-between pl-8">
          <h1 className="text-2xl text-emerald-900 ">
            Добавить картинки для слайдера
          </h1>
          <button
            className="self-end m-4 bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150"
            onClick={() => setIsModal2(!isModal2)}
          >
            Добавить картину для слайдера
          </button>
        </div>
        <Modal isOpen={isModal2} onClose={() => setIsModal2(!isModal2)}>
          <form onSubmit={handleSubmit(fillGallery)} className="p-8">
            <div>
              <label className="block text-md font-medium mb-2">
                Загрузите изображения для слайдера
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                multiple
                accept=""
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <button className="self-end m-4 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150">
              Загрузить
            </button>
          </form>
        </Modal>
        <div className="flex flex-wrap gap-10 pl-4 mb-10">
          {gallery.map((image) => (
            <div
              className="h-72 w-80 flex flex-col items-center p-2 shadow-2xl"
              key={image.id}
            >
              <img src={image.image} alt="" className="w-72 h-60" />
              <button
                className="self-end w-fit rounded-md p-2 mt-2 hover:bg-gray-200"
                onClick={() => {
                  setIsModal3(!isModal3);
                  setImageId(image.id);
                }}
              >
                <b>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                  </svg>
                </b>
              </button>
            </div>
          ))}
        </div>
        <Modal isOpen={isModal3} onClose={() => setIsModal3(!isModal3)}>
          <div className="flex flex-col items-center">
            <p className="mb-4">Вы уверены, что хотите удалить?</p>
            <div className="flex space-x-4">
              <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={async () => {
                  try {
                    await deleteGalleryImage(imageId);
                    await getGalleryImages();
                    setIsModal3(false);
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                Да
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => setIsModal3(false)}
              >
                Нет
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Pictures;
