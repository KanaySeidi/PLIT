import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import girl from '../../assets/img/girl.png';

export const TeacherInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const skillBarVariants = useMemo(() => ({
    hidden: { width: 0 },
    visible: (percentage) => ({
      width: percentage + '%',
      transition: { duration: 1.5, ease: 'easeInOut' },
    }),
  }), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    if (!name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Пожалуйста, введите email';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Пожалуйста, введите корректный email';
    }
    
    if (!message.trim()) {
      newErrors.message = 'Пожалуйста, введите сообщение';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Форма отправлена:', { name, email, message });
    }
  };

  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto p-5 font-sans">
      <div className="md:w-1/3 w-full md:mr-5">
        <img
          src={girl}
          alt="Profile"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <div className="bg-gray-100 p-5 rounded-lg mt-5 shadow-md">
          <p className="mb-2"><strong>Телефон:</strong> (+996) 123 456 789</p>
          <p className="mb-2"><strong>Email:</strong> email@zamira.com</p>
          <p className="mb-2"><strong>Сайт:</strong> www.yourwebsitehere.com</p>
          <p className="mb-2"><strong>Адрес:</strong> токтогулова 47 А</p>
          <div className="flex gap-4 mt-4">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#63001F] hover:text-[#4a0017] transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#63001F] hover:text-[#4a0017] transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#63001F] hover:text-[#4a0017] transition-colors duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#63001F] hover:text-[#4a0017] transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="md:w-2/3 w-full" ref={ref}>
        <h1 className="text-4xl font-bold mb-4 text-[#63001F]">Замира Эже</h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          Замира эже — опытный и талантливый педагог, прекрасно разбирающийся в химии и биологии. 
          Её уроки всегда проходят интересно и понятно, благодаря её умению объяснять сложные вещи простым языком. 
          Ученики ценят её за терпение, доброжелательность и глубокие знания в предметах. 
          Благодаря Замира эже многие школьники начинают любить химию и биологию, а некоторые даже выбирают эти науки своей будущей профессией.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#63001F]">Навыки преподавателя</h2>
        <div className="space-y-4">
          <div>
            <span className="block mb-2">Химия</span>
            <div className="flex items-center bg-gray-200 rounded-full h-2.5 relative">
              <motion.div
                className="bg-[#63001F] h-2.5 rounded-full"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={skillBarVariants}
                custom={85}
              />
              <span className="absolute right-2 text-sm text-gray-700">85%</span>
            </div>
          </div>
          <div>
            <span className="block mb-2">Биология</span>
            <div className="flex items-center bg-gray-200 rounded-full h-2.5 relative">
              <motion.div 
                className="bg-[#63001F] h-2.5 rounded-full"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={skillBarVariants}
                custom={90}
              />
              <span className="absolute right-2 text-sm text-gray-700">90%</span>
            </div>
          </div>
          <div>
            <span className="block mb-2">Объяснение</span>
            <div className="flex items-center bg-gray-200 rounded-full h-2.5 relative">
              <motion.div
                className="bg-[#63001F] h-2.5 rounded-full"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={skillBarVariants}
                custom={90}
              />
              <span className="absolute right-2 text-sm text-gray-700">90%</span>
            </div>
          </div>
          <div>
            <span className="block mb-2">Поддержка</span>
            <div className="flex items-center bg-gray-200 rounded-full h-2.5 relative">
              <motion.div
                className="bg-[#63001F] h-2.5 rounded-full"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={skillBarVariants}
                custom={92}
              />
              <span className="absolute right-2 text-sm text-gray-700">92%</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#63001F]">Отправить сообщение</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Ваше имя..."
              className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-[#63001F] focus:ring-1 focus:ring-[#63001F] outline-none`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Электронная почта..."
              className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-[#63001F] focus:ring-1 focus:ring-[#63001F] outline-none`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Сообщение..."
              className={`w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg h-24 resize-none focus:border-[#63001F] focus:ring-1 focus:ring-[#63001F] outline-none`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-[#63001F] text-white rounded-lg hover:bg-[#4a0017] transition-colors duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-[#63001F]"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherInfo;