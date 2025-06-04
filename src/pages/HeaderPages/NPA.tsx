import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

const NPA = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-screen px-4 pt-32 bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="mx-auto w-full max-w-lg h-auto divide-y divide-gray-300 rounded-xl bg-white shadow-lg">
        <Disclosure>
          {({ open }) => (
            <div className="p-6">
              <Disclosure.Button className="group flex w-full items-center justify-between border-b border-gray-300 pb-4">
                <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                  {t("npa.title1")}
                </span>
                <motion.div
                  animate={{ rotate: open ? -180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="h-8 w-8 text-gray-500 group-hover:text-blue-400" />
                </motion.div>
              </Disclosure.Button>
              <AnimatePresence>
                {open && (
                  <Disclosure.Panel static>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50"
                    >
                      <div className="flex flex-col gap-2">
                        {[
                          {
                            href: "https://docs.google.com/document/d/1NhzXsQGtkmTcY4F9ELCsUtu65J2rt1m8/edit",
                            text: t("npa.title1"),
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
              </AnimatePresence>
            </div>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <div className="p-6">
              <Disclosure.Button className="group flex w-full items-center justify-between border-b border-gray-300 pb-4">
                <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                  {t("npa.title2")}
                </span>
                <motion.div
                  animate={{ rotate: open ? -180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="h-8 w-8 text-gray-500 group-hover:text-blue-400" />
                </motion.div>
              </Disclosure.Button>
              <AnimatePresence>
                {open && (
                  <Disclosure.Panel static>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50"
                    >
                      <div className="flex flex-col gap-2">
                        {[
                          {
                            href: "https://docs.google.com/document/d/1NhzXsQGtkmTcY4F9ELCsUtu65J2rt1m8/edit",
                            text: t("npa.title2"),
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
              </AnimatePresence>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default NPA;
