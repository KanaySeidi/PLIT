
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
 
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const salaryRef = useRef(null);
  const levelsRef = useRef(null);


  const isTitleInView = useInView(titleRef, { once: true, margin: '-50px' });
  const isTextInView = useInView(textRef, { once: true, margin: '-50px' });
  const isSalaryInView = useInView(salaryRef, { once: true, margin: '-50px' });
  const isLevelsInView = useInView(levelsRef, { once: true, margin: '-50px' });

  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <>
      <div className="w-full flex flex-col items-center mt-12 md:mt-28">
        <img
          src={image}
          alt=""
          className="w-full md:w-[80%] h-[200px] md:h-[300px] object-cover"
        />
        <div className="w-full md:w-[80%] flex flex-col md:flex-row mt-6 md:mt-8 px-4 md:px-0">
          <img
            src={image1}
            alt=""
            className="w-full md:w-[450px] h-[250px] md:h-[400px] object-cover"
          />
          <div className="flex flex-col justify-around text-black mt-4 md:mt-0 md:ml-10">
            <motion.h1
              ref={titleRef}
              className="text-2xl md:text-[30px] font-bold"
              variants={fadeInUp}
              initial="hidden"
              animate={isTitleInView ? 'visible' : 'hidden'}
            >
              {title}
            </motion.h1>
            <motion.p
              ref={textRef}
              className="text-base md:text-lg mt-4"
              variants={fadeInUp}
              initial="hidden"
              animate={isTextInView ? 'visible' : 'hidden'}
            >
              {text}
            </motion.p>
          </div>
        </div>
        <div className="bg-gray-400 w-full h-auto md:h-[500px] flex flex-col justify-around py-8 md:py-0">
          <div className="text-white text-base md:text-[18px] w-full md:w-[600px] mx-auto flex flex-col md:flex-row items-center md:items-start px-4 md:px-0">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={icon} alt="" className="w-6 h-6 mr-2" />
              <p>{txt1}</p>
            </div>
            <div className="flex items-center md:ml-8">
              <img src={icon} alt="" className="w-6 h-6 mr-2" />
              <p>{txt2}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around mt-4 md:mt-[-100px] px-4 md:px-0">
            <motion.div
              ref={levelsRef}
              className="w-full md:w-[450px] flex flex-col items-start justify-around mb-6 md:mb-0"
              variants={fadeInUp}
              initial="hidden"
              animate={isLevelsInView ? 'visible' : 'hidden'}
            >
              <div className="flex flex-col justify-around h-auto md:h-[300px]">
                <h1 className="text-2xl md:text-[30px] font-bold">{master}</h1>
                <p className="mt-2">{lvl1}</p>
                <p className="mt-2">{lvl2}</p>
                <p className="mt-2">{lvl3}</p>
              </div>
            </motion.div>
            <motion.div
              ref={salaryRef}
              className="w-full md:w-[400px] flex flex-col justify-between h-auto md:h-52 mt-4 md:mt-32"
              variants={fadeInUp}
              initial="hidden"
              animate={isSalaryInView ? 'visible' : 'hidden'}>


<div className="w-full h-[60px] bg-[#A1012B] rounded-[10px] text-center text-white flex items-center justify-center">
                {salary}
              </div>
              <div className="h-auto md:h-[120px] flex flex-col justify-around mt-4">
                <div className="flex items-center">
                  <img src={icon2} alt="" className="w-5 h-5" />
                  <p className="ml-4">{junior}</p>
                </div>
                <div className="flex items-center mt-2">
                  <img src={icon2} alt="" className="w-5 h-5" />
                  <p className="ml-4">{middle}</p>
                </div>
                <div className="flex items-center mt-2">
                  <img src={icon2} alt="" className="w-5 h-5" />
                  <p className="ml-4">{senior}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectionPage;


