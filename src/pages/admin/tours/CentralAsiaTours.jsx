import React, { useEffect } from "react";
import Card from "../../../components/card/Card";
import { useNavigate } from "react-router-dom";
import useAdminStore from "../../../stores/useAdminStore";

function CentralAsiaTours() {
  const navigate = useNavigate();
  const { getCentralAsiaTours, centralAsiaTours, isAdmin } = useAdminStore();

  useEffect(() => {
    isAdmin("/", navigate);
    getCentralAsiaTours();
  }, [getCentralAsiaTours, isAdmin, navigate]);

  return (
    <div className="h-full w-full">
      <div className="flex flex-wrap flex-col">
        <div className="flex justify-between items-center pl-8">
          <h1 className="text-2xl text-green-800">Туры Центральной Азии</h1>
          <button
            onClick={() => navigate("/admin/tours/addKGTours")}
            className="self-end m-4 bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150"
          >
            Добавить Тур
          </button>
        </div>
        <div className="flex flex-wrap">
          {centralAsiaTours?.map((tour) => (
            <Card key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CentralAsiaTours;
