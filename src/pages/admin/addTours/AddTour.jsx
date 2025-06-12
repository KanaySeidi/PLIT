import { useForm, Controller } from "react-hook-form";
import useAdminStore from "../../../stores/useAdminStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AddTour = () => {
  const { AddTour, isAdmin } = useAdminStore(); // Используем метод для добавления курса
  const navigate = useNavigate();

  useEffect(() => {
    isAdmin("/", navigate);
  }, [isAdmin, navigate]);

  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: "",
      duration: "",
      level: "легкий",
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("duration", data.duration);
    formData.append("level", data.level);

    try {
      await addCourse(formData); // Отправляем запрос на добавление курса
      navigate("/admin/courses"); // Перенаправляем на страницу курсов
    } catch (error) {
      console.error("Ошибка при добавлении курса:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8">
      <h4 className="text-2xl font-bold mb-4">Добавить новый курс</h4>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Название курса
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Описание</label>
          <textarea
            {...register("description", { required: true })}
            rows={3}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Цена</label>
          <input
            {...register("price", { required: true })}
            type="number"
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Длительность</label>
          <input
            {...register("duration", { required: true })}
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Уровень</label>
          <select
            {...register("level", { required: true })}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="легкий">Легкий</option>
            <option value="средний">Средний</option>
            <option value="сложный">Сложный</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Добавить курс
      </button>
    </form>
  );
};

export default AddCourse;
