import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import HeroSection from "../../components/common/HeroSection";
import Button from "../../components/ui/Button";

function AboutPage() {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);

  const handleApplicationClick = () => {
    alert(t("about.form.application") + " clicked!");
  };

  const handleRequestInfoClick = () => {
    alert(t("about.form.requestInfo") + " clicked!");
  };

  const handleVisitClick = () => {
    alert(t("about.form.visit") + " clicked!");
  };

  const handleExploreHistoryClick = () => {
    alert(t("about.history.button") + " clicked!");
  };

  const handleLearnMoreClick = () => {
    alert(t("about.mission.button") + " clicked!");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with About */}
      <HeroSection
        title={t("about.hero.title")}
        subtitle={t("about.hero.subtitle")}
        backgroundImage="../../../src/assets/img/About/img_section.png"
        overlayColor="bg-bordo"
      />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* University Description */}
        <motion.section
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="space-y-8">
            <p className="text-2xl font-semibold text-gray-800 leading-relaxed">
              {t("about.description.paragraph1")}
            </p>
            <p className="text-2xl font-semibold text-gray-800 leading-relaxed">
              {t("about.description.paragraph2")}
            </p>
          </div>
        </motion.section>

        {/* Image Gallery */}
        <motion.section
          className="py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <img
                src="../../../src/assets/img/About/img_ryanjacobsoncxuoqwdrv4iunsplashjpg.png"
                alt={t("about.imageGallery.alt1")}
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <img
                src="../../../src/assets/img/About/img_mikakorhonenmki1rfsqwvyunsplashjpg.png"
                alt={t("about.imageGallery.alt2")}
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <img
                src="../../../src/assets/img/About/img_aliyahyaifpeapwegt4unsplashjpg.png"
                alt={t("about.imageGallery.alt3")}
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </motion.section>
      </main>
      {/* Statistics Section */}
      <motion.section
        className="bg-bordo text-white py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-6xl font-bold mb-4">4k+</h3>
              <p className="text-sm font-semibold uppercase tracking-wider">
                {t("about.statistics.students")}
              </p>
            </div>
            <div>
              <h3 className="text-6xl font-bold mb-4">#1</h3>
              <p className="text-sm font-semibold uppercase tracking-wider">
                {t("about.statistics.lyceum")}
              </p>
            </div>
            <div>
              <h3 className="text-6xl font-bold mb-4">40+</h3>
              <p className="text-sm font-semibold uppercase tracking-wider">
                {t("about.statistics.years")}
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      {/* History Section */}
      <motion.section
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="../../../src/assets/img/About/img_image.png"
                alt={t("about.history.title")}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-900">
                {t("about.history.title")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("about.history.text")}
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Mission & Values Section */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-bordo p-20 rounded-lg">
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                {t("about.mission.title")}
              </h2>
              <p className="text-lg text-white leading-relaxed mb-8">
                {t("about.mission.text")}
              </p>
            </div>
            <div>
              <img
                src="../../../src/assets/img/About/img_alexisbrownxv7k95vofaunsplashjpg.png"
                alt={t("about.mission.title")}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>
      {/* Campus Section with YouTube video */}
      <motion.section
        className="py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-8xl font-bold text-gray-900 mb-12 uppercase tracking-wider">
            {t("about.campus.title")}
          </h2>
          <div
            className="relative mx-auto max-w-4xl cursor-pointer rounded-lg shadow-lg overflow-hidden"
            style={{ height: "24rem" }}
            onClick={() => setShowVideo(true)}
          >
            <img
              src="../../../src/assets/img/About/img_.png"
              alt="Campus Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <button className="w-24 h-24 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                <img
                  src="../../../src/assets/img/About/img_component_1_white_a700.svg"
                  alt="Play Video"
                  className="w-12 h-12"
                />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {showVideo && (
              <>
                <motion.div
                  className="fixed inset-0 bg-black bg-opacity-100 z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowVideo(false)}
                />
                <motion.div
                  className="fixed inset-0 flex items-center justify-center z-50 px-4"
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                >
                  <div className="relative w-full max-w-3xl aspect-video rounded-lg shadow-2xl bg-black">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="rounded-lg"
                    />
                    <button
                      onClick={() => setShowVideo(false)}
                      className="absolute -top-4 -right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-xl"
                      aria-label="Close video"
                    >
                      ×
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
      {/* Student Testimonial */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-yellow-400 w-60 h-56 absolute top-8 left-8 rounded-lg"></div>
              <img
                src="../../../src/assets/img/About/img_component_3_gray_50.svg"
                alt="Quote Icon"
                className="absolute top-0 left-0 w-20 h-20 z-10"
              />
              <img
                src="../../../src/assets/img/About/img_icons8teamfclyt7lw5wgunsplashjpg.png"
                alt={t("about.testimonial.name")}
                className="relative z-20 w-96 h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-gray-900">
                {t("about.testimonial.name")}
              </h3>
              <p className="text-sm text-gray-600 uppercase tracking-wider">
                {t("about.testimonial.degree")}
              </p>
              <blockquote className="text-2xl font-semibold text-gray-800 leading-relaxed">
                {t("about.testimonial.quote")}
              </blockquote>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Call to Action Section
      <motion.section
        className="bg-blue-200 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-8xl font-bold text-gray-900 mb-8 uppercase tracking-wider">
            {t("about.form.title")}
          </h2>
          <p className="text-2xl font-semibold text-gray-800 mb-12 max-w-4xl mx-auto">
            {t("about.form.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={handleApplicationClick}
              variant="primary"
              size="large"
            >
              {t("about.form.application")}
            </Button>
            <Button
              onClick={handleRequestInfoClick}
              variant="secondary"
              size="large"
            >
              {t("about.form.requestInfo")}
            </Button>
            <Button onClick={handleVisitClick} variant="tertiary" size="large">
              {t("about.form.visit")}
            </Button>
          </div>
        </div>
      </motion.section> */}
    </div>
  );
}

export default AboutPage;
