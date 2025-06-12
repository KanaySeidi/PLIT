import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAdminStore from "../../../stores/useAdminStore";
import { useForm, Controller } from "react-hook-form";

const TourDetail = () => {
  const { id } = useParams();
  const { getTour, tour, editTour, isAdmin } = useAdminStore();
  const navigate = useNavigate();
  const {
    setValue,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      extraPrices: [],
      translations: [],
    },
  });

  useEffect(() => {
    isAdmin("/", navigate);
    const fetchTour = async () => {
      try {
        await getTour(id);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTour();
  }, [getTour, id, isAdmin, navigate]);

  useEffect(() => {
    if (tour) {
      setValue("price", tour.price);
      setValue("country", tour.country);
      setValue("previewImage", tour.previewImage);
      setValue("mainImage", tour.mainImage);
      setValue("extraPrices", tour.extraPrices);
      setValue("translations", tour.translations);
    }
  }, [tour, setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Append regular fields
    formData.append("price", data.price);
    formData.append("country", data.country);
    formData.append("level", data.level);
    if (data.extraPrices) {
      data.extraPrices.forEach((price, index) => {
        formData.append(`extraPrices[${index}]`, price);
      });
    }

    if (data.previewImage[0]) {
      formData.append("previewImage", data.previewImage[0]);
    }
    if (data.mainImage[0]) {
      formData.append("mainImage", data.mainImage[0]);
    }
    // if (data.images.length > 0) {
    //   for (const image of data.images) {
    //     formData.append("images", image);
    //   }
    // }

    data.translations.forEach((translation, translationIndex) => {
      formData.append(
        `translations[${translationIndex}].title`,
        translation.title
      );
      formData.append(
        `translations[${translationIndex}].description`,
        translation.description
      );
      formData.append(
        `translations[${translationIndex}].duration`,
        translation.duration
      );
      formData.append(
        `translations[${translationIndex}].languageCode`,
        translation.languageCode
      );
      formData.append(
        `translations[${translationIndex}].startDate`,
        translation.startDate
      );
      formData.append(
        `translations[${translationIndex}].endDate`,
        translation.endDate
      );
      translation.dayInfo.forEach((day, dayIndex) => {
        formData.append(
          `translations[${translationIndex}].dayInfo[${dayIndex}].id`,
          day.id
        );
        formData.append(
          `translations[${translationIndex}].dayInfo[${dayIndex}].title`,
          day.title
        );
        formData.append(
          `translations[${translationIndex}].dayInfo[${dayIndex}].text`,
          day.text
        );
        if (day.images && day.images.length > 0) {
          Array.from(day.images).forEach((image, imageIndex) => {
            formData.append(
              `translations[${translationIndex}].dayInfo[${dayIndex}].images[${imageIndex}]`,
              image
            );
          });
        }
      });
    });

    try {
      await editTour(id, formData);
      if (data.country === "KG") {
        navigate("/admin/tours/kyrgyzstan");
      } else {
        navigate("/admin/tours/centralAsia");
      }
    } catch (error) {
      console.error("Error updating tour:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 w-1/2 m-auto mt-8 space-y-6"
    >
      <h1 className="text-2xl font-bold mb-4">Редактирование Тура {id}</h1>

      <div>
        <label className="block text-sm font-medium mb-1">Цена</label>
        <input
          {...register("price", { required: "Цена обязательна" })}
          type="number"
          className={`w-full px-3 py-2 border rounded-lg ${
            errors.price ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium mb-1 hidden">Страна</label>
        <select
          {...register("country", { required: "Страна обязательна" })}
          className={`w-full px-3 py-2 border rounded-lg ${
            errors.country ? "border-red-500" : "border-gray-300 hidden"
          }`}
        >
          <option value="">Выберите страну</option>
          <option value="KZ">Казахстан</option>
          <option value="KG">Киргизия</option>
          <option value="UZ">Узбекистан</option>
          <option value="TM">Туркменистан</option>
        </select>
        {errors.country && (
          <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Загрузить превью изображение
        </label>
        <input
          {...register("previewImage", {
            required: "Превью изображение обязательно",
          })}
          type="file"
          className={`w-full px-3 py-2 border rounded-lg ${
            errors.previewImage ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.previewImage && (
          <p className="text-red-500 text-sm mt-1">
            {errors.previewImage.message}
          </p>
        )}
        <img src={tour.previewImage} alt="" className="w-96 mt-2" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Загрузить основное изображение
        </label>
        <input
          {...register("mainImage", {
            required: "Основное изображение обязательно",
          })}
          type="file"
          className={`w-full px-3 py-2 border rounded-lg ${
            errors.mainImage ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.mainImage && (
          <p className="text-red-500 text-sm mt-1">
            {errors.mainImage.message}
          </p>
        )}
        <img src={tour.mainImage} alt="" className="w-96 mt-2" />
      </div>

      {/* <div>
        <label className="block text-sm font-medium mb-1">
          Загрузите дневные изображения
        </label>
        <input
          {...register("images", {
            required: "Дневные изображения обязательны",
          })}
          type="file"
          multiple
          className={`w-full px-3 py-2 border rounded-lg ${
            errors.images ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.images && (
          <p className="text-red-500 text-sm mt-1">{errors.images.message}</p>
        )}
      </div> */}

      {tour.translations?.map((translation, translationIndex) => (
        <div key={translationIndex} className="mb-4">
          <h2 className="text-lg font-semibold mb-2">
            {translation.languageCode === "RUS" ? "Русский" : "English"}{" "}
            Translation
          </h2>
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium mb-1">
                Заголовок
              </label>
              <input
                {...register(`translations.${translationIndex}.title`, {
                  required: "Заголовок обязателен",
                })}
                type="text"
                defaultValue={translation.title}
                className={`w-full px-3 py-2 border rounded-lg ${
                  errors.translations?.[translationIndex]?.title
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors.translations?.[translationIndex]?.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.translations[translationIndex].title.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Описание</label>
              <textarea
                {...register(`translations.${translationIndex}.description`, {
                  required: "Описание обязательно",
                })}
                defaultValue={translation.description}
                className={`w-full px-3 py-2 border rounded-lg ${
                  errors.translations?.[translationIndex]?.description
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors.translations?.[translationIndex]?.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.translations[translationIndex].description.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Duration</label>
              <textarea
                {...register(`translations.${translationIndex}.duration`, {
                  required: "Длительность обязательна",
                })}
                defaultValue={translation.duration}
                className={`w-full px-3 py-2 border rounded-lg ${
                  errors.translations?.[translationIndex]?.description
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors.translations?.[translationIndex]?.duration && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.duration[translationIndex].duration.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Start Date
              </label>
              <textarea
                {...register(`translations.${translationIndex}.startDate`, {
                  required: "Длительность обязательна",
                })}
                defaultValue={translation.startDate}
                className={`w-full px-3 py-2 border rounded-lg ${
                  errors.startDate?.[translationIndex]?.startDate
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors.translations?.[translationIndex]?.duration && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.startDate[translationIndex].startDate.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">End Date</label>
              <textarea
                {...register(`translations.${translationIndex}.endDate`, {
                  required: "Длительность обязательна",
                })}
                defaultValue={translation.endDate}
                className={`w-full px-3 py-2 border rounded-lg ${
                  errors.endDate?.[translationIndex]?.endDate
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors.translations?.[translationIndex]?.endDate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.endDate[translationIndex].endDate.message}
                </p>
              )}
            </div>
            {translation.dayInfo?.map((day, dayIndex) => (
              <div key={dayIndex} className="mt-4">
                <h3 className="font-medium mb-1">День {dayIndex + 1}</h3>
                <div className="space-y-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Заголовок
                    </label>
                    <input
                      {...register(
                        `translations.${translationIndex}.dayInfo.${dayIndex}.title`
                      )}
                      type="text"
                      defaultValue={day.title}
                      className={`w-full px-3 py-2 border rounded-lg ${
                        errors.translations?.[translationIndex]?.dayInfo?.[
                          dayIndex
                        ]?.title
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.translations?.[translationIndex]?.dayInfo?.[
                      dayIndex
                    ]?.title && (
                      <p className="text-red-500 text-sm mt-1">
                        {
                          errors.translations[translationIndex].dayInfo[
                            dayIndex
                          ].title.message
                        }
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Описание
                    </label>
                    <textarea
                      {...register(
                        `translations.${translationIndex}.dayInfo.${dayIndex}.text`
                      )}
                      defaultValue={day.text}
                      className={`w-full px-3 py-2 border rounded-lg ${
                        errors.translations?.[translationIndex]?.dayInfo?.[
                          dayIndex
                        ]?.text
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.translations?.[translationIndex]?.dayInfo?.[
                      dayIndex
                    ]?.text && (
                      <p className="text-red-500 text-sm mt-1">
                        {
                          errors.translations[translationIndex].dayInfo[
                            dayIndex
                          ].text.message
                        }
                      </p>
                    )}
                  </div>
                  <label className="block text-sm font-medium mb-1">
                    День {dayIndex + 1} - Изображения
                  </label>
                  <input
                    {...register(
                      `translations[${translationIndex}].dayInfo[${dayIndex}].images`
                    )}
                    type="file"
                    multiple
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {tour.extraPrices?.map((price, index) => (
        <div key={index}>
          <label className="block text-sm font-medium mb-1">
            Дополнительная цена {index + 1}
          </label>
          <Controller
            name={`extraPrices[${index}]`}
            control={control}
            defaultValue={price}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                className={`w-full px-3 py-2 border rounded-lg ${
                  errors.extraPrices?.[index]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
            )}
          />
          {errors.extraPrices?.[index] && (
            <p className="text-red-500 text-sm mt-1">
              {errors.extraPrices[index].message}
            </p>
          )}
        </div>
      ))}

      <div>
        <label className="block text-sm font-medium mb-1">Level</label>
        <select
          {...register("level", { required: "Уровень обязателен" })}
          className={`w-full px-3 py-2 border rounded-lg ${
            errors.level ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="легкий">Легкий</option>
          <option value="активный">Активный</option>
          <option value="экстремальный">Экстремальный</option>
        </select>
        {errors.level && (
          <p className="text-red-500 text-sm mt-1">{errors.level.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Сохранить
      </button>
    </form>
  );
};

export default TourDetail;
