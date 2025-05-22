import { Link } from "react-router-dom";

const DirectionPage = ({
  image,
  image1,
  title,
  text,
  icon,
  txt1,
  txt2,
  master,
  lvl1,
  lvl2,
  lvl3,
  salary,
  junior,
  middle,
  senior,
  icon2,
}) => {
  return (
    <>
      <div className="relative w-full flex flex-col items-center justify-around h-[1450px]">
        <div className="relative w-full h-[500px]">
          <img src={image} alt="cover" className="w-full h-full object-cover" />
          <Link to={"/"}>
            <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 bg-gray-200 hover:bg-gray-300 text-black rounded shadow">
              <span className="text-xl">←</span>
              <span>Назад</span>
            </div>
          </Link>
        </div>

        <div className="w-[80%] flex">
          <img src={image1} alt="" className="w-[450px] h-[400px]" />
          <div className="flex flex-col justify-around text-black ml-10">
            <h1 className="text-[30px]">{title}</h1>
            <p>{text}</p>
          </div>
        </div>
        <div className="bg-gray-400 w-full h-[500px] flex flex-col justify-around">
          <div className="text-white text-[18px] w-[600px] ml-36 flex">
            <img src={icon} alt="" />
            <p className="">{txt1}</p>
            <img src={icon} alt="" />
            <p>{txt2}</p>
          </div>
          <div className="flex justify-around mt-[-100px] ml-[-50px]">
            <div className="w-[450px] flex flex-col h-[400px] items-start justify-around">
              <div className="flex flex-col justify-around h-[300px]">
                <h1 className="text-[30px]">{master}</h1>
                <p>{lvl1}</p>
                <p>{lvl2}</p>
                <p>{lvl3}</p>
              </div>
            </div>
            <div className="flex flex-col justify-between h-52 ml-[-200px] mt-32">
              <div className="w-[400px] h-[60px] bg-[#A1012B] rounded-[10px] text-center text-white ml-10 mb-18">
                {salary}
              </div>
              <div className="h-[120px] flex flex-col justify-around">
                <div className="flex">
                  <img src={icon2} alt="" />
                  <p className="ml-4">{junior}</p>
                </div>
                <div className="flex">
                  <img src={icon2} alt="" />
                  <p className="ml-4">{middle}</p>
                </div>
                <div className="flex">
                  <img src={icon2} alt="" />
                  <p className="ml-4">{senior}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectionPage;
