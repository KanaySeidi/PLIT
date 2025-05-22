const DirectionExploitation = ({
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
  beginning,
  experienced,
  professional,
  icon2,
}) => {
  return (
    <>
      <div className="w-full flex flex-col items-center mt-28">
        <img src={image} alt="" className="w-[80%] h-[380px]" />
        <div className="w-[80%] flex mt-8">
          <img src={image1} alt="" className="w-[500px] h-[400px]" />
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
                  <p className="ml-4">{beginning}</p>
                </div>
                <div className="flex">
                  <img src={icon2} alt="" />
                  <p className="ml-4">{experienced}</p>
                </div>
                <div className="flex">
                  <img src={icon2} alt="" />
                  <p className="ml-4">{professional}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectionExploitation;
