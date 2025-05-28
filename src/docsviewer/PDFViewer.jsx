import { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { pdf } from "../constants/PDF";

const PDFViewer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDoc, setCurrentDoc] = useState(null);

  const openModal = (doc) => {
    setCurrentDoc(doc);
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Отключаем скролл страницы
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentDoc(null);
    document.body.style.overflow = "auto"; // Включаем скролл страницы
  };

  return (
    <div className="w-full h-auto">
      {pdf.map((item) => (
        <div key={item.id} className="flex items-center gap-4">
          {/* Иконка для открытия модального окна */}
          <div
            onClick={() => openModal(item.docs)}
            className="cursor-pointer text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-110"
            style={{ fontSize: "3rem" }}
          >
            <img src={item.icon} alt="" />
            <p>{item.title}</p>
          </div>
        </div>
      ))}

      {/* Модальное окно */}
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10"
        onClose={closeModal}
      >
        {/* Полностью чёрный фон */}
        <div
          className="fixed inset-0 bg-black bg-opacity-90"
          aria-hidden="true"
        ></div>

        {/* Контент модального окна */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-4xl rounded-lg bg-white p-6 shadow-2xl overflow-y-auto max-h-[90vh]">
            {/* Заголовок */}
            <DialogTitle
              as="h3"
              className="text-xl font-bold text-gray-900 mb-4"
            >
              Просмотр документа
            </DialogTitle>

            {/* Текст или PDF-документ */}
            <div className="mt-4">
              {currentDoc ? (
                <Worker workerUrl="/pdfjs/pdf.worker.min.js">
                  <Viewer fileUrl={currentDoc} />
                </Worker>
              ) : (
                <p className="text-gray-700">Текст документа не найден.</p>
              )}
            </div>

            {/* Кнопка "Закрыть" */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Закрыть
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default PDFViewer;