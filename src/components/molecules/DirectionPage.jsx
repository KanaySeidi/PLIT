import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="w-full flex flex-col items-center mt-10 md:mt-28"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Main Image */}
      <motion.img
        src={image}
        alt=""
        className="w-full md:w-[80%] h-[200px] md:h-[400px] object-cover"
        variants={imageVariants}
      />

      {/* Content Section */}
      <motion.div
        className="w-full md:w-[80%] flex flex-col md:flex-row mt-6 md:mt-8"
        variants={containerVariants}
      >
        <motion.img
          src={image1}
          alt=""
          className="w-full md:w-[450px] h-[200px] md:h-[400px] object-cover"
          variants={imageVariants}
        />
        <motion.div
          className="flex flex-col justify-around text-black mt-4 md:mt-0 md:ml-10"
          variants={itemVariants}
        >
          <h1 className="text-[24px] md:text-[30px] font-bold">{title}</h1>
          <p className="text-[14px] md:text-[16px] mt-2">{text}</p>
        </motion.div>
      </motion.div>

      {/* Gray Section */}
      <motion.div
        className="bg-gray-400 w-full min-h-[600px] md:h-[500px] flex flex-col justify-around items-center py-6 md:py-0"
        variants={containerVariants}
      >
        <motion.div
          className="text-white text-[16px] md:text-[18px] w-full md:w-[600px] flex flex-col md:flex-row items-center md:items-start px-4 md:ml-36"
          variants={itemVariants}
        >
          <div className="flex items-center mb-4 md:mb-0">
            <img src={icon} alt="" className="w-6 h-6 mr-2" />
            <p>{txt1}</p>
          </div>
          <div className="flex items-center md:ml-6">
            <img src={icon} alt="" className="w-6 h-6 mr-2" />
            <p>{txt2}</p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-center md:justify-around w-full px-4 md:px-0 mt-4 md:mt-[-100px] md:ml-[-50px]"
          variants={containerVariants}
        >
          <motion.div
            className="w-full md:w-[450px] flex flex-col items-start justify-around mb-6 md:mb-0"
            variants={itemVariants}
          >
            <div className="flex flex-col justify-around min-h-[250px] md:h-[300px]">
              <h1 className="text-[24px] md:text-[30px] font-bold text-white">
                {master}
              </h1>
              <p className="text-[14px] md:text-[16px] text-white">{lvl1}</p>
              <p className="text-[14px] md:text-[16px] text-white">{lvl2}</p>
              <p className="text-[14px] md:text-[16px] text-white">{lvl3}</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-between w-full md:w-[400px] md:h-52 md:mt-32"
            variants={itemVariants}
          >
            <div className="w-full h-[60px] bg-[#A1012B] rounded-[10px] text-center text-white flex items-center justify-center mb-6 md:mb-18">
              {salary}
            </div>
            <div className="flex flex-col justify-around">
              <div className="flex items-center mb-4">
                <img src={icon2} alt="" className="w-5 h-5" />
                <p className="ml-4 text-white text-[14px] md:text-[16px]">
                  {junior}
                </p>
              </div>
              <div className="flex items-center mb-4">
                <img src={icon2} alt="" className="w-5 h-5" />
                <p className="ml-4 text-white text-[14px] md:text-[16px]">
                  {middle}
                </p>
              </div>
              <div className="flex items-center">
                <img src={icon2} alt="" className="w-5 h-5" />
                <p className="ml-4 text-white text-[14px] md:text-[16px]">
                  {senior}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DirectionPage;
