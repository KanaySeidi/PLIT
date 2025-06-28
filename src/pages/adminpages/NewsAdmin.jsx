import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const NewsAdmin = () => {
  const { id } = useParams();
  const [mainImage, setMainImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [videoSrc, setVideoSrc] = useState("");

  // Загрузка медиа по ID
  useEffect(() => {
    const raw = localStorage.getItem(`newsMedia_${id}`);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setMainImage(parsed.mainImage || null);
        setGalleryImages(parsed.galleryImages || []);
        setVideoSrc(parsed.videoSrc || "");
      } catch (err) {
        console.error("Ошибка при загрузке newsMedia:", err);
      }
    }
  }, [id]);

  // Обработчики
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setMainImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleGalleryUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setGalleryImages((prev) => [...prev, reader.result]);
    };
    reader.readAsDataURL(file);
  };

  const removeGalleryImage = (index) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleVideoChange = (e) => {
    setVideoSrc(e.target.value);
  };

  const handleSave = () => {
    const data = {
      mainImage,
      galleryImages,
      videoSrc,
    };
    localStorage.setItem(`newsMedia_${id}`, JSON.stringify(data));
  };

  return (
    <div className="p-4 border rounded bg-white shadow mt-6 space-y-6">
      <Link
        to="/admin/newsCards"
        className="inline-flex items-center text-white hover:bg-red-900 transform transition duration-300 mb-8 bg-bordo rounded p-2"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Назад
      </Link>

      <h2 className="text-2xl font-bold mb-4">Редактирование новости {id}</h2>

      <div>
        <label className="block font-semibold mb-2">Главное изображение:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {mainImage && (
          <img
            src={mainImage}
            alt="main"
            className="mt-2 w-40 h-24 object-cover rounded"
          />
        )}
      </div>

      <div>
        <label className="block font-semibold mb-2">Галерея:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleGalleryUpload}
          className="mb-4"
        />
        <div className="flex flex-wrap gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="relative">
              <img
                src={img}
                alt={`gallery-${i}`}
                className="w-40 h-24 object-cover rounded"
              />
              <button
                onClick={() => removeGalleryImage(i)}
                className="absolute top-0 right-0 bg-red-600 text-white px-1 rounded-bl"
                title="Удалить"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-2">Видео:</label>
        <input
          type="text"
          value={videoSrc}
          onChange={handleVideoChange}
          className="border p-2 w-full rounded"
          placeholder="Вставьте ссылку на YouTube или файл"
        />
      </div>

      <div className="text-right">
        <button
          onClick={handleSave}
          className="bg-bordo hover:bg-red-900 text-white px-6 py-2 rounded transition"
        >
          Сохранить
        </button>
      </div>
    </div>
  );
};
