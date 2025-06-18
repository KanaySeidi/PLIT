import { Link } from "react-router-dom";

const LDocs = () => {
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-11/12 mx-auto h-full flex items-center justify-between">
          <Link to="/info/position">
            <button className="w-auto px-5 py-2 bg-bordo text-white rounded-md hover:bg-red-700">
              НПА Положение ПЛИТ №99
            </button>
          </Link>
          <Link to="/info/op">
            <button className="w-auto px-5 py-2 bg-bordo text-white rounded-md hover:bg-red-700">
              Образовательные программы
            </button>
          </Link>
          <Link to="/info/npakr">
            <button className="w-auto px-5 py-2 bg-bordo text-white rounded-md hover:bg-red-700">
              НПА КР
            </button>
          </Link>
          <Link to="/info/selfreport">
            <button className="w-auto px-5 py-2 bg-bordo text-white rounded-md hover:bg-red-700">
              Отчеты по самооценке
            </button>
          </Link>
          <Link to="/info/generalseceducation">
            <button className="w-auto px-5 py-2 bg-bordo text-white rounded-md hover:bg-red-700">
              Среднее общее образование
            </button>
          </Link>
          <Link to="/info/rpobraz">
            <button className="w-auto px-5 py-2 bg-bordo text-white rounded-md hover:bg-red-700">
              РП Общеобразовательные
            </button>
          </Link>
          <Link to="/info/rpprof">
            <button className="w-auto px-5 py-2 bg-bordo text-white rounded-md hover:bg-red-700">
              РП Общепрофессиональные
            </button>
          </Link>
          <Link to="/info/npa99">
            <button className="w-auto px-5 py-2 bg-bordo text-white rounded-md hover:bg-red-700">
              НПА ПЛИТ №99
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LDocs;
