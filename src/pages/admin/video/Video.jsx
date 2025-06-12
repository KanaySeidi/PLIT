import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAdminStore from "../../../stores/useAdminStore";
import { Link, useNavigate } from "react-router-dom";

function Video() {
  const { handleSubmit, register, reset } = useForm();
  const { postVideo, getVideo, video, isAdmin } = useAdminStore();
  const navigate = useNavigate();
  useEffect(() => {
    isAdmin("/", navigate);
    getVideo();
  }, [getVideo, isAdmin, navigate]);

  const getSign = () => {
    return "-->>";
  };
  const onSubmit = async (data) => {
    try {
      await postVideo(data);
      await getVideo();
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="pl-8 mt-2">
        <h1 className="text-2xl text-emerald-900 ">
          Добавление видео на главную страницу
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="pt-6">
          <label className="block text-sm font-medium mb-1">
            Ссылка на видео
          </label>
          <input
            {...register("link", { required: true })}
            type="text"
            className="w-1/2 px-3 py-2 border rounded-lg"
          />
          <button className="self-end m-4 bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150">
            Добавить
          </button>
        </form>
        <Link to={video} className="red" target="_blank">
          Перейти к видео {getSign()}
        </Link>
      </div>
    </div>
  );
}

export default Video;
