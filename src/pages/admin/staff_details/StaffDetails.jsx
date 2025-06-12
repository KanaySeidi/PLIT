import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAdminStore from "../../../stores/useAdminStore";
import { useForm } from "react-hook-form";

function StaffDetails() {
  const { id } = useParams();
  const { getOneStaff, initialStaff, editStaff, isAdmin } = useAdminStore();
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  useEffect(() => {
    isAdmin("/", navigate);
    getOneStaff(id);
  }, [getOneStaff, id, isAdmin, navigate]);

  useEffect(() => {
    Object.keys(initialStaff).forEach((key) => {
      setValue(key, initialStaff[key]);
    });
  }, [initialStaff, setValue]);

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    if (data.profile_image[0]) {
      formData.append("profile_image", data.profile_image[0]);
    }
    if (data.background_image[0]) {
      formData.append("background_image", data.background_image[0]);
    }
    formData.append("name", data.name);
    formData.append("position", data.position);
    formData.append("description", data.description);
    formData.append("descriptionEng", data.descriptionEng);
    formData.append("nameEng", data.nameEng);
    formData.append("positionEng", data.positionEng);
    formData.append("instagram", data.instagram);
    formData.append("whatsapp", data.whatsapp);
    formData.append("youtube", data.youtube);

    try {
      await editStaff(id, formData);
      navigate("/admin/staff");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded-md"
    >
      <h1 className="mb-8">
        <b> Edition for {initialStaff.name} </b>
      </h1>
      <input type="hidden" {...register("id")} />
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Profile Image URL:
        </label>
        <input
          type="file"
          {...register("profile_image")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Background Image URL:
        </label>
        <input
          type="file"
          {...register("background_image")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Имя:
        </label>
        <input
          type="text"
          {...register("name")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          {...register("nameEng")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Должность:
        </label>
        <input
          type="text"
          {...register("position")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Position:
        </label>
        <input
          type="text"
          {...register("positionEng")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Описание:
        </label>
        <textarea
          {...register("description")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description:
        </label>
        <textarea
          {...register("descriptionEng")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Instagram URL:
        </label>
        <input
          type="text"
          {...register("instagram")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          WhatsApp URL:
        </label>
        <input
          type="text"
          {...register("whatsapp")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          YouTube URL:
        </label>
        <input
          type="text"
          {...register("youtube")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Profile
        </button>
      </div>
    </form>
  );
}

export default StaffDetails;
