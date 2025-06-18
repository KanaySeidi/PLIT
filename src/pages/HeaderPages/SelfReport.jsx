import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const SelfReport = () => {
  const { t } = useTranslation();
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full px-4 pt-32 pb-20 bg-gradient-to-b from-gray-100 to-gray-300 ">
      <div className="mx-auto w-full max-w-lg h-auto divide-y divide-gray-300 rounded-xl bg-white shadow-[6px_6px_12px_rgba(128,0,32,0.15)]">
        <Disclosure>
          {({ open }) => (
            <div className="p-6">
              <Disclosure.Button
                onClick={() => handleToggle("webDeveloper")}
                className="group flex w-full items-center justify-between border-b border-gray-300 pb-4"
              >
                <span className="w-full text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                  {t("docsprograms.selfassessmentreports")}
                </span>
                <motion.div
                  animate={{
                    rotate: openSection === "webDeveloper" ? -180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="h-8 w-8 text-gray-500 group-hover:text-blue-400" />
                </motion.div>
              </Disclosure.Button>
              {openSection === "webDeveloper" && (
                <Disclosure.Panel static>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50"
                  >
                    <p className="text-xl font-bold text-bordo text-center mb-4">
                      {t("docsdescriptions.initvetprogramselfassessment")}
                    </p>
                    <div className="flex flex-col gap-2 text-center">
                      {[
                        {
                          href: "https://drive.google.com/file/d/1t0rvtTxkUX5VlAAqzuCDH1DHyv5YltbC/view?usp=sharing",
                          text: t("links.itVETprogramSelfAssessment"),
                        },
                        {
                          href: "https://drive.google.com/file/d/1g80ZicYKzRmpyrhA0cK6-BqRIF9qCbd2/view?usp=sharing",
                          text: t("links.geneduselfassessment"),
                        },
                        {
                          href: "https://drive.google.com/file/d/1TSW524uX0_xU-2FyYakB4IXWGsCKbpLW/view?usp=sharing",
                          text: t("links.mechvetselfassessment"),
                        },
                        {
                          href: "https://drive.google.com/file/d/1cqI20c77Q029yb19qTstJbTlO8GsxwkT/view?usp=sharing",
                          text: t("links.institutionalselfassessment"),
                        },
                      ].map(({ href, text }) => (
                        <motion.a
                          key={href}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-block px-4 py-2 text-sm font-medium text-white bg-bordo rounded-lg shadow-md transition"
                        >
                          {text}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </Disclosure.Panel>
              )}
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default SelfReport;
