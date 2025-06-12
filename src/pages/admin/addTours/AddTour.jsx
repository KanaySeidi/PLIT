import { useForm, useFieldArray, Controller } from "react-hook-form";
import useAdminStore from "../../../stores/useAdminStore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TourCreate = () => {
  const { addTour, isAdmin } = useAdminStore();
  const navigate = useNavigate();
  const [sharedImages, setSharedImages] = useState([]);
  useEffect(() => {
    isAdmin("/", navigate);
  }, [isAdmin, navigate]);

  const { control, handleSubmit, register, setValue } = useForm({
    defaultValues: {
      price: "",
      country: "KG",
      previewImage: null,
      mainImage: null,
      level: "легкий",
      extraPrices: [""],
      translations: [
        {
          title: "",
          description: "",
          startDate: "",
          endDate: "",
          duration: "",
          dayInfo: [{ title: "", text: "", images: [] }],
          languageCode: "RUS",
        },
      ],
    },
  });

  const { fields: extraPriceFields, append: appendExtraPrice } = useFieldArray({
    control,
    name: "extraPrices",
  });

  const { fields: dayInfoFields, append: appendDayInfo } = useFieldArray({
    control,
    name: "translations[0].dayInfo", // ensure you're accessing the correct path
  });

  const { fields: translationFields, append: appendTranslation } =
    useFieldArray({
      control,
      name: "translations",
    });
  const handleFileChange = (e, index, dayIndex) => {
    const images = Array.from(e.target.files);
    setSharedImages(images);
    setValue(`translations[${index}].dayInfo[${dayIndex}].images`, images);
  };
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("price", data.price);
    formData.append("country", data.country);
    formData.append("level", data.level);
    formData.append("previewImage", data.previewImage[0]);
    formData.append("mainImage", data.mainImage[0]);

    data.extraPrices.forEach((extraPrice, index) => {
      formData.append(`extraPrices[${index}]`, extraPrice);
    });

    data.translations.forEach((translation, index) => {
      formData.append(`translations[${index}].title`, translation.title);
      formData.append(
        `translations[${index}].description`,
        translation.description
      );
      formData.append(
        `translations[${index}].startDate`,
        translation.startDate
      );
      formData.append(`translations[${index}].endDate`, translation.endDate);
      formData.append(`translations[${index}].duration`, translation.duration);
      formData.append(
        `translations[${index}].languageCode`,
        translation.languageCode
      );

      translation.dayInfo.forEach((day, dayIndex) => {
        formData.append(
          `translations[${index}].dayInfo[${dayIndex}].title`,
          day.title
        );
        formData.append(
          `translations[${index}].dayInfo[${dayIndex}].text`,
          day.text
        );

        const images = index === 0 ? day.images : sharedImages; // Use shared images for non-Russian translations
        images.forEach((image, imageIndex) => {
          formData.append(
            `translations[${index}].dayInfo[${dayIndex}].images[${imageIndex}]`,
            image
          );
        });
      });
    });

    console.log(data);

    try {
      await addTour(formData);
      if (data.country === "KG") {
        navigate("/admin/tours/kyrgyzstan");
      } else {
        navigate("/admin/tours/centralAsia");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8">
      <h4 className="text-2xl font-bold mb-4">Создать новый тур</h4>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Цена</label>
          <input
            {...register("price", { required: true })}
            type="number"
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Уровень тура</label>
          <select
            {...register("level", { required: true })}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="легкий">Легкий</option>
            <option value="активный">Активный</option>
            <option value="экстремальный">Экстремальный</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Страна</label>
          <select
            {...register("country", { required: true })}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="KG">Кыргызстан</option>
            <option value="KZ">Казахстан</option>
            <option value="UZ">Узбекистан</option>
            <option value="TJK">Тажикистан</option>
            <option value="TM">Туркменистан</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Загрузить превью изображение
          </label>
          <input
            {...register("previewImage", { required: true })}
            type="file"
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Загрузить основное изображение
          </label>
          <input
            {...register("mainImage", { required: true })}
            type="file"
            accept=""
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        {extraPriceFields.map((item, index) => (
          <div key={item.id}>
            <label className="block text-sm font-medium mb-1">{`Дополнительная цена ${
              index + 1
            }`}</label>
            <Controller
              control={control}
              name={`extraPrices[${index}]`}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              )}
            />
          </div>
        ))}

        <button
          type="button"
          onClick={() => appendExtraPrice("")}
          className="w-full px-3 py-2 border rounded-lg text-blue-600"
        >
          Добавить дополнительную цену
        </button>

        {translationFields.map((translation, index) => (
          <div key={translation.id} className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Название тура
              </label>
              <Controller
                control={control}
                name={`translations[${index}].title`}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                )}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Описание</label>
              <Controller
                control={control}
                name={`translations[${index}].description`}
                render={({ field }) => (
                  <textarea
                    {...field}
                    rows={3}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                )}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Дата начала
              </label>
              <Controller
                control={control}
                name={`translations[${index}].startDate`}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                )}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Дата окончания
              </label>
              <Controller
                control={control}
                name={`translations[${index}].endDate`}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                )}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Длительность
              </label>
              <Controller
                control={control}
                name={`translations[${index}].duration`}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                )}
              />
            </div>

            {dayInfoFields.map((day, dayIndex) => (
              <div key={day.id}>
                <label className="block text-sm font-medium mb-1">
                  День {dayIndex + 1} - Название
                </label>
                <Controller
                  control={control}
                  name={`translations[${index}].dayInfo[${dayIndex}].title`}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  )}
                />
                <label className="block text-sm font-medium mb-1">
                  День {dayIndex + 1} - Текст
                </label>
                <Controller
                  control={control}
                  name={`translations[${index}].dayInfo[${dayIndex}].text`}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      rows={3}
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  )}
                />
                {index === 0 && (
                  <>
                    <label className="block text-sm font-medium mb-1">
                      День {dayIndex + 1} - Изображения
                    </label>
                    <input
                      type="file"
                      multiple
                      onChange={(e) => handleFileChange(e, index, dayIndex)}
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </>
                )}
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium mb-1">
                Язык перевода
              </label>
              <Controller
                control={control}
                name={`translations[${index}].languageCode`}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    <option value="RUS">Русский</option>
                    <option value="ENG">Английский</option>
                  </select>
                )}
              />
            </div>

            <button
              type="button"
              onClick={() => appendDayInfo({ title: "", text: "", images: [] })}
              className="w-full px-3 py-2 border rounded-lg text-blue-600"
            >
              Добавить информацию о дне
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() =>
            appendTranslation({
              title: "",
              description: "",
              startDate: "",
              endDate: "",
              duration: "",
              dayInfo: [{ title: "", text: "", images: [] }],
              languageCode: "ENG",
            })
          }
          className="w-full px-3 py-2 border rounded-lg text-blue-600"
        >
          Добавить перевод
        </button>
      </div>

      <button
        type="submit"
        className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Создать тур
      </button>
    </form>
  );
};

export default TourCreate;
