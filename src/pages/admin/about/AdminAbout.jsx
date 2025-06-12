import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAdminStore from "../../../stores/useAdminStore";
import UserCard from "../../../components/card/UserCard";
import Modal from "../../../components/modal/Modal";
import { useNavigate } from "react-router-dom";

function AdminAbout() {
  const { postStuff, getStuff, stuff, isAdmin } = useAdminStore();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    isAdmin("/", navigate);
    getStuff();
  }, [getStuff, isAdmin, navigate]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("profile_image", data.profile_image[0]);
    formData.append("background_image", data.background_image[0]);
    formData.append("name", data.name);
    formData.append("nameEng", data.nameEng);
    formData.append("position", data.position);
    formData.append("positionEng", data.positionEng);
    formData.append("instagram", data.instagram);
    formData.append("description", data.description);
    formData.append("descriptionEng", data.descriptionEng);
    formData.append("whatsapp", data.whatsapp);
    formData.append("youtube", data.youtube);

    try {
      await postStuff(formData);
      await getStuff();
      setIsModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const validateFiles = (files) => {
    const validExtensions = ["image/jpeg", "image/png"];
    for (let i = 0; i < files.length; i++) {
      if (!validExtensions.includes(files[i].type)) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className=" w-full justify-between flex flex-wrap flex-col">
      <div className="flex justify-between items-center pl-8">
        <h1 className="text-2xl text-green-800">Персоны</h1>
        <button
          className="self-end m-4 bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150"
          onClick={() => setIsModal(!isModal)}
        >
          Добавить Персону
        </button>
      </div>

      <Modal isOpen={isModal} onClose={() => setIsModal(!isModal)}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-1"
        >
          <label
            className="block text-green-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Имя
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Введите имя" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name.message}</p>
          )}
          <label
            className="block text-green-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="nameEng"
            {...register("nameEng", { required: "Введите имя" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name.message}</p>
          )}

          <label
            className="block text-green-700 text-sm font-bold mb-2"
            htmlFor="position"
          >
            Должность
          </label>
          <input
            type="text"
            id="position"
            {...register("position", { required: "Введите должность" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.position && (
            <p className="text-red-500 text-xs italic">
              {errors.position.message}
            </p>
          )}
          <label
            className="block text-green-700 text-sm font-bold mb-2"
            htmlFor="position"
          >
            Position
          </label>
          <input
            type="text"
            id="positionEng"
            {...register("positionEng", { required: "Введите должность" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.position && (
            <p className="text-red-500 text-xs italic">
              {errors.position.message}
            </p>
          )}

          <label
            className="block text-green-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Описание
          </label>
          <textarea
            type="text"
            id="description"
            rows={3}
            {...register("description", { required: "Введите описание" })}
            className="shadow appearance-none border rounded w-full py-7 overflow-y-auto px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.position && (
            <p className="text-red-500 text-xs italic">
              {errors.description.message}
            </p>
          )}
          <label
            className="block text-green-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            type="text"
            id="descriptionEng"
            {...register("descriptionEng", { required: "Введите описание" })}
            className="shadow appearance-none border rounded w-full py-7 overflow-y-auto px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.position && (
            <p className="text-red-500 text-xs italic">
              {errors.description.message}
            </p>
          )}

          <label
            className="block text-green-700 text-sm font-bold mb-2"
            htmlFor="instagram"
          >
            Instagram
          </label>
          <input
            type="text"
            id="instagram"
            {...register("instagram", { required: "Введите Инстаграм" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.instagram && (
            <p className="text-red-500 text-xs italic">
              {errors.instagram.message}
            </p>
          )}

          <label
            className="block text-green-700 text-sm font-bold mb-2"
            htmlFor="whatsapp"
          >
            WhatsApp
          </label>
          <input
            type="text"
            id="whatsapp"
            {...register("whatsapp", { required: "Введите Ватсап" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.whatsapp && (
            <p className="text-red-500 text-xs italic">
              {errors.whatsapp.message}
            </p>
          )}

          <label
            className="block text-green-700 text-sm font-bold mb-2"
            htmlFor="youtube"
          >
            Youtube
          </label>
          <input
            type="text"
            id="youtube"
            {...register("youtube", { required: "Введите Youtube" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.whatsapp && (
            <p className="text-red-500 text-xs italic">
              {errors.youtube.message}
            </p>
          )}

          <label
            className="block text-green-700 text-sm font-bold mb-2"
            htmlFor="profile_image"
          >
            Выберите фотографию профиля
          </label>
          <input
            type="file"
            id="profile_image"
            {...register("profile_image", {
              required: "Необходимо выбрать хотя бы одну фотографию",
              validate: {
                acceptedFormats: (files) =>
                  validateFiles(files) ||
                  "Недопустимый формат файла. Допускаются только JPEG, PNG.",
              },
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.profile_image && (
            <p className="text-red-500 text-xs italic">
              {errors.profile_image.message}
            </p>
          )}

          <label
            className="block text-green-700 text-sm font-bold mb-2"
            htmlFor="background_image"
          >
            Выберите фон
          </label>
          <input
            type="file"
            id="background_image"
            {...register("background_image", {
              required: "Необходимо выбрать хотя бы одну фотографию",
              validate: {
                acceptedFormats: (files) =>
                  validateFiles(files) ||
                  "Недопустимый формат файла. Допускаются только JPEG, PNG.",
              },
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.background_image && (
            <p className="text-red-500 text-xs italic">
              {errors.background_image.message}
            </p>
          )}

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Добавить
          </button>
        </form>
      </Modal>
      <div className="flex w-full flex-wrap gap-10 pl-6">
        {stuff?.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}

export default AdminAbout;
