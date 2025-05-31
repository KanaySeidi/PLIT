import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const LDocs = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full px-4 pt-32 bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="mx-auto w-full max-w-lg h-auto divide-y divide-gray-300 rounded-xl bg-white shadow-lg">
        {/* Первая секция */}
        <Disclosure>
          {({ open }) => (
            <div className="p-6">
              <Disclosure.Button className="group flex w-full items-center justify-between border-b border-gray-300 pb-4">
                <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                  {t("docsprograms.webDeveloper")}
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
                      <p className="text-xl font-bold text-bordo text-center mb-4">
                        {t("docsdescriptions.webDeveloper")}
                      </p>
                      <div className="flex flex-col gap-2">
                        {[
                          {
                            href: "https://docs.google.com/document/d/1NhzXsQGtkmTcY4F9ELCsUtu65J2rt1m8/edit",
                            text: "Рабочая программа по дисциплине «Производственное обучение»",
                          },
                          {
                            href: "https://docs.google.com/document/d/19X-0psvprqfatCazXlzywb3kpr46YXtH/edit",
                            text: "Рабочая программа по дисциплине «Основы языка программирования»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1vk6sZD1kuYXsJwMAqHf_bt8rP0m0D7ay/edit",
                            text: "Рабочая программа по дисциплине «Объектно-ориентированное программирование»",
                          },
                          {
                            href: "https://docs.google.com/document/d/11MI0zxKxd-lwFsBByaqiSGJ8rxzdzRSB/edit",
                            text: "Рабочая программа по дисциплине «Библиотеки языков программирования»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1Hud1xOyhPHvIzZVSoGtygZsZ40G4bK1O/edit",
                            text: "Образовательная программа начального профессионального образования",
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

        {/* Вторая секция */}
        <Disclosure>
          {({ open }) => (
            <div className="p-6">
              <Disclosure.Button className="group flex w-full items-center justify-between border-b border-gray-300 pb-4">
                <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                  {t("docsprograms.frontendDeveloper")}
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
                      <p className="text-base font-medium text-blue-600 mb-4">
                        {t("docsdescriptions.frontendDeveloper")}
                      </p>
                      <div className="flex flex-col gap-2">
                        {[
                          {
                            href: "https://docs.google.com/document/d/1-7AHVcrr0nKJ6gWFady_TSnIwZqC0T6b/edit",
                            text: "Рабочая программа по дисциплине «Технологии программирования»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1r7SkZYe_aXwTmU5pzsqZalIcRB_bYCIe/edit",
                            text: "Рабочая программа по дисциплине «Проектирование пользовательского интерфейса»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1DN5D05YzyqTLfI69_N5vdCbm2E9pnLaE/edit",
                            text: "Рабочая программа по дисциплине «Производственное обучение»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1m29MgqL4bWXHK1uYtAn-lL1cicIdg572/edit",
                            text: "Рабочая программа по дисциплине «Основы языка программирования»",
                          },
                          {
                            href: "https://docs.google.com/document/d/19eOyunLCjFNEmNrpXusCRizSMXWgXlMr/edit",
                            text: "Рабочая программа по дисциплине «Библиотеки языка программирования»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1YmnNmuH4IlHT1GfdAoSAQSi3s3Tqd8eo/edit",
                            text: "Рабочая программа по дисциплине «Основы управление IT проектами»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1ryyTOQM3nQ-cyMppFiy3wbCrxSMXHEnv/edit",
                            text: "Образовательная программа начального профессионального образования",
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

        {/* Третья секция */}
        <Disclosure>
          {({ open }) => (
            <div className="p-6">
              <Disclosure.Button className="group flex w-full items-center justify-between border-b border-gray-300 pb-4">
                <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                  {t("docsprograms.backendDeveloper")}
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
                      <p className="text-base font-medium text-blue-600 mb-4">
                        {t("docsdescriptions.backendDeveloper")}
                      </p>
                      <div className="flex flex-col gap-2">
                        {[
                          {
                            href: "https://docs.google.com/document/d/1gQch3nkAiLiWuKwH7h4YhERiFXMabKM4/edit",
                            text: "Рабочая программа по дисциплине «Технология программирования»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1eJehNZa11AnzpdHl-2JQNXQ19QI62BkA/edit",
                            text: "Рабочая программа по дисциплине «Управление IT проектами»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1Vi1YZvapyjA5WVwUVZuAhGmVqSXu1GTl/edit",
                            text: "Рабочая программа по дисциплине «Алгоритмы и структуры данных»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1-oy3rGrIwdd2GD_b2TaRiPS_fBcsfk5F/edit",
                            text: "Рабочая программа по дисциплине «Объектно-ориентированное программирование»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1SBXfMmGF4IgO6deLBsHetRm1b8GMx2AV/edit",
                            text: "Рабочая программа по дисциплине «База данных»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1c8c5deMUy2r395AfUOL0caNTqAPb0b11/edit",
                            text: "Образовательная программа начального профессионального образования",
                          },
                          {
                            href: "https://docs.google.com/document/d/1TMN-EEHt3QrZgCnprGu3U-8tEzC4muPfGuXcWf5AILg/edit",
                            text: "Рабочая программа по дисциплине «Производственное обучение»",
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

        {/* Четвёртая секция */}
        <Disclosure>
          {({ open }) => (
            <div className="p-6">
              <Disclosure.Button className="group flex w-full items-center justify-between border-b border-gray-300 pb-4">
                <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                  {t("docsprograms.carMechanic")}
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
                      <p className="text-base font-medium text-blue-600 mb-4">
                        {t("docsdescriptions.carMechanic")}
                      </p>
                      <div className="flex flex-col gap-2">
                        {[
                          {
                            href: "https://docs.google.com/document/d/1mOfMbXNSul5Q4UawUDnqYMnUA58jXTP0/edit",
                            text: "Рабочая программа по дисциплине «Основы электротехники и электроники»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1FLF5hhDPTe-160ljXx-t2WbHFY9BTgVm/edit",
                            text: "Рабочая программа по дисциплине «Чтение чертежей и схем» («Техническое черчение»)",
                          },
                          {
                            href: "https://docs.google.com/document/d/1w687RWTtx9DLJ3mRW3ZzVunM40iYihSk/edit",
                            text: "Рабочая программа по дисциплине «Техобслуживание и ремонт автомобиля»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1F8bsOVywrBZUX70QX95i5gzfQCfrWPWJ/edit",
                            text: "Рабочая программа по дисциплине «Производственное обучение»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1c4hepS71Gm-FlNw1nmTBXdRjKVpnmsO2/edit",
                            text: "Рабочая программа по дисциплине «Устройства и эксплуатация автомобиля»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1m166_fVi6yMkF10kd7MG2kDevoNiNv2h/edit",
                            text: "Образовательная программа начального профессионального образования",
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

        {/* Пятая секция */}
        <Disclosure>
          {({ open }) => (
            <div className="p-6">
              <Disclosure.Button className="group flex w-full items-center justify-between border-b border-gray-300 pb-4">
                <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                  {t("docsprograms.designTechnology")}
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
                      <p className="text-base font-medium text-blue-600 mb-4">
                        {t("docsdescriptions.designTechnology")}
                      </p>
                      <div className="flex flex-col gap-2">
                        {[
                          {
                            href: "https://docs.google.com/document/d/18Zw_RFqBCOdOs3af6NzFjYvIN0WtyeHz/edit",
                            text: "Рабочая программа по дисциплине «Основы компьютерной графики.Графический дизайн.»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1yAvcdJ_Mb6gYanZ5eQk2n1I-27JvjFpE/edit",
                            text: "Рабочая программа по дисциплине «Основа композиции и цветоведения.»",
                          },
                          {
                            href: "https://docs.google.com/document/d/14Uz-32ujp5QgTvcqArNAbMo2F1p0sjA5/edit",
                            text: "Рабочая программа по дисциплине «Производственное обучение»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1Wy_jfOuav42YVQvm3fsyp3Ah0gL7uC04/edit",
                            text: "Рабочая программа по дисциплине «Информационные технологии дизайна»",
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

        {/* Шестая секция */}
        <Disclosure>
          {({ open }) => (
            <div className="p-6">
              <Disclosure.Button className="group flex w-full items-center justify-between border-b border-gray-300 pb-4">
                <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                  {t("docsprograms.systemAdministrator")}
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
                      <p className="text-base font-medium text-blue-600 mb-4">
                        {t("docsdescriptions.systemAdministrator")}
                      </p>
                      <div className="flex flex-col gap-2">
                        {[
                          {
                            href: "https://docs.google.com/document/d/1M-v5aLNjPXCUFSkkW1e9Vc_vad3bEz38/edit",
                            text: "Рабочая программа по дисциплине «Программное обеспечение компьютерных сетей и веб-серверов»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1OtwZPwEhDdRJZe_zEEA_zl6sDWbWV3kf/edit",
                            text: "Рабочая программа по дисциплине «Производственное обучение»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1R1keJdos8NwzVBoi047xlHQrctBFzoI1/edit",
                            text: "Рабочая программа по дисциплине «Операционные системы и среды»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1xFK6gT_YTHWVzB0WBs045QU6PqFUadGQ/edit",
                            text: "Рабочая программа по дисциплине «Архитектура и обслуживание ПК»",
                          },
                          {
                            href: "https://docs.google.com/document/d/10w9ZwLxBIgcj1SlicDP31JZOxZJPh89v/edit",
                            text: "Рабочая программа по дисциплине «База данных»",
                          },
                          {
                            href: "https://docs.google.com/document/d/12QWVLV9WEs5UYUny9PPdWsNaiYGaNPih/edit",
                            text: "Образовательная программа начального профессионального образования",
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

        {/* Седьмая секция */}
        <Disclosure>
          {({ open }) => (
            <div className="p-6">
              <Disclosure.Button className="group flex w-full items-center justify-between border-b border-gray-300 pb-4">
                <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                  {t("docsprograms.mechatronicsOperator")}
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
                      <p className="text-base font-medium text-blue-600 mb-4">
                        {t("docsdescriptions.mechatronicsOperator")}
                      </p>
                      <div className="flex flex-col gap-2">
                        {[
                          {
                            href: "https://docs.google.com/document/d/1h8bv587orgXUuYnqY6ktmLMFK7wtFn0D/edit",
                            text: "Рабочая программа по дисциплине «Информатика»",
                          },
                          {
                            href: "https://docs.google.com/document/d/14UNQ4Zu4BbeMtfQAri10RZmXegOm0NTr/edit",
                            text: "Рабочая программа по дисциплине «Технология программирования мехатронных систем»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1-ZM5eh9qotKsFAfRuyN-oIvUcY9qzZVe/edit",
                            text: "Рабочая программа по дисциплине «Технология сборки и пусконаладки мехотронных систем»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1R6gQkFHPUUaE4k4ecLrG0uGQlFL2edf-/edit",
                            text: "Рабочая программа по дисциплине «Основы вычислительной техники»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1tJ6PssJ0PoW4FqtxuW5Q9DmShjgtamif/edit",
                            text: "Рабочая программа по дисциплине «Материаловедение»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1tib19K37KGErcUHS6ns123juNfeqyMYR/edit",
                            text: "Рабочая программа по дисциплине «Инженерная и компьютерная графика»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1guiiIHpeAlG3ZAxALD-cIooX9F6KRW4W/edit",
                            text: "Образовательная программа начального профессионального образования",
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

        {/* Восьмая секция */}
        <Disclosure>
          {({ open }) => (
            <div className="p-6">
              <Disclosure.Button className="group flex w-full items-center justify-between border-b border-gray-300 pb-4">
                <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                  {t("docsprograms.mechatronics")}
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
                      <p className="text-base font-medium text-blue-600 mb-4">
                        {t("docsdescriptions.mechatronics")}
                      </p>
                      <div className="flex flex-col gap-2">
                        {[
                          {
                            href: "https://docs.google.com/document/d/1ZDBjnd0AP2B3bfrc3Sq4NePYWZ8lbqUT/edit",
                            text: "Рабочая программа по дисциплине «Элементы гидравлики и пневматических систем»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1koHK83GDLEKIt2phKkxICT2HJK2LGzcF/edit",
                            text: "Рабочая программа по дисциплине «Производственное обучение»",
                          },
                          {
                            href: "https://docs.google.com/document/d/15oIrjp8m4EDYxpaYVOhxJNZEHJhFWRr5/edit",
                            text: "Рабочая программа по дисциплине «Материаловедение»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1B_e28gcXtfwW74-8DUj3XJNd8NWYj_hf/edit",
                            text: "Рабочая программа по дисциплине «Инженерная и компьютерная графика»",
                          },
                          {
                            href: "https://docs.google.com/document/d/13QCYZKY8QO83dddhBkMZMBw4e7Wn5xP9/edit",
                            text: "Рабочая программа по дисциплине «Информационные технологии и программирование»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1YdVDhlM5ZpPe008qFcPqNVhfduVsLK02/edit",
                            text: "Образовательная программа начального профессионального образования",
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

        {/* Девятая секция */}
        <Disclosure>
          {({ open }) => (
            <div className="p-6">
              <Disclosure.Button className="group flex w-full items-center justify-between border-b border-gray-300 pb-4">
                <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                  {t("docsprograms.mobileDeveloper")}
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
                      <p className="text-base font-medium text-blue-600 mb-4">
                        {t("docsdescriptions.mobileDeveloper")}
                      </p>
                      <div className="flex flex-col gap-2">
                        {[
                          {
                            href: "https://docs.google.com/document/d/1vUs97NLYFdvCg-_zO3yo0N0hkoOMnL8a/edit",
                            text: "Рабочая программа по дисциплине «Технология программирования»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1Fp0bkYVc_-00i7G4QB-DZzM3TctQq83S/edit",
                            text: "Рабочая программа по дисциплине «Производственное обучение»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1-FN-lmwmHdlcSTlKDEhAHlie88C7BKd3/edit",
                            text: "Рабочая программа по дисциплине «Основы управления IT-проектами»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1spO74Pg5mevwVDQiohwb4FFv1ANGfpPq/edit",
                            text: "Рабочая программа по дисциплине «Объектно-ориентированное программирование»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1IdrmAQMZK3xxaK7jIffheY1TUHzxJmU6/edit",
                            text: "Рабочая программа по дисциплине «Библиотеки языков программирования»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1Tgz-MzKrhc8A8IUzRsnAls46iVP7v-KQ/edit",
                            text: "Рабочая программа по дисциплине «Алгоритмы и структуры данных»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1G4R_rbLBwx_msfdzc6xb3CQWaEYENvUW/edit",
                            text: "Образовательная программа начального профессионального образования",
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

        {/* Десятая секция */}
        <Disclosure>
          {({ open }) => (
            <div className="p-6">
              <Disclosure.Button className="group flex w-full items-center justify-between border-b border-gray-300 pb-4">
                <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                  {t("docsprograms.sewingDesign")}
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
                      <p className="text-base font-medium text-blue-600 mb-4">
                        {t("docsdescriptions.sewingDesign")}
                      </p>
                      <div className="flex flex-col gap-2">
                        {[
                          {
                            href: "https://docs.google.com/document/d/120mkf7k8mMm488Bz7XZ7VM6_VpgA9xft/edit",
                            text: "Рабочая программа по дисциплине «Конструирование швейных изделий»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1T8NHNMCQVWKxKGXkAB0fm0J6lGNMIQTe/edit",
                            text: "Рабочая программа по дисциплине «Технология швейных изделий»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1KekQ-VDI41XaA_XOY5mmUTt54B0mSAjR/edit",
                            text: "Рабочая программа по дисциплине «Специальное рисование с основами черчения»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1gANM1trLd3y9b0fOYsAVSKaKkk45y_tp/edit",
                            text: "Рабочая программа по дисциплине «Производственное обучение»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1oBcOezG6Dro3ddDx7mPv_BSfeTbAU143/edit",
                            text: "Рабочая программа по дисциплине «Оборудование швейного производства»",
                          },
                          {
                            href: "https://docs.google.com/document/d/14jSb77rwSMrf2L2P8fmbiDN0Op9che6h/edit",
                            text: "Образовательная программа начального профессионального образования",
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

        {/* Одиннадцатая секция */}
        <Disclosure>
          {({ open }) => (
            <div className="p-6">
              <Disclosure.Button className="group flex w-full items-center justify-between border-b border-gray-300 pb-4">
                <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                  {t("docsprograms.informationSecurity")}
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
                      <p className="text-base font-medium text-blue-600 mb-4">
                        {t("docsdescriptions.informationSecurity")}
                      </p>
                      <div className="flex flex-col gap-2">
                        {[
                          {
                            href: "https://docs.google.com/document/d/1elaqLmD2cMLCpk-Apj7mo0lwP1J1k4VS/edit",
                            text: "Рабочая программа по дисциплине «Технические средства информатизации»",
                          },
                          {
                            href: "https://docs.google.com/document/d/11FUNSowcVU033PGrPQKOGLMIdhuqqZJ9/edit",
                            text: "Рабочая программа по дисциплине «Программные и программно-аппаратные средства защиты информации»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1q8KtPGu1V819CEya-FqKHUoHiuKwtWwM/edit",
                            text: "Рабочая программа по дисциплине «Операционные системы и среды»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1KlYU8nYigrVZCD1a2Nzkr5WDZBYIDGl-/edit",
                            text: "Рабочая программа по дисциплине «Основы информационной безопасности»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1-Df2lOwgXUNrNndmYULy14QEOgbBkhEh/edit",
                            text: "Рабочая программа по дисциплине «Информатика»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1Yo1hzW4JwXKDV2uMDOwwnNNY_GFSMHdw/edit",
                            text: "Рабочая программа по дисциплине «База данных»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1yKtgM5sEqiCjU1cE7PnVUT0n8pSCMKsd/edit",
                            text: "Рабочая программа по дисциплине «Основы алгоритмизации и программирования»",
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

        {/* Двенадцатая секция */}
        <Disclosure>
          {({ open }) => (
            <div className="p-6">
              <Disclosure.Button className="group flex w-full items-center justify-between border-b border-gray-300 pb-4">
                <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                  {t("docsprograms.miningMechanic")}
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
                      <p className="text-base font-medium text-blue-600 mb-4">
                        {t("docsdescriptions.miningMechanic")}
                      </p>
                      <div className="flex flex-col gap-2">
                        {[
                          {
                            href: "https://docs.google.com/document/d/1bXMqI3uiXnvLEKpP1pR8c2d_G0FCNfhJ/edit",
                            text: "Рабочая программа по дисциплине «Цифровая грамотность»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1meFSRAPxgaNoTAia-33EEO0tRomjfjXz/edit",
                            text: "Рабочая программа по дисциплине «Производственное обучение»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1wFtVQmmt0hM_1J2jL1RFDu0jCRGPqH9K/edit",
                            text: "Рабочая программа по дисциплине «Основы электроматериаловедения»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1ku728GxOwJXoGIlqS6SJC1K3jNh5n-hv/edit",
                            text: "Рабочая программа по дисциплине «Чтение чертежей и схем» («Техническое черчение»)",
                          },
                          {
                            href: "https://docs.google.com/document/d/1wvt01tEUimImY3XucTINAGmmFi1jxrTA/edit",
                            text: "Образовательная программа начального профессионального образования",
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

        {/* Тринадцатая секция */}
        <Disclosure>
          {({ open }) => (
            <div className="p-6">
              <Disclosure.Button className="group flex w-full items-center justify-between border-b border-gray-300 pb-4">
                <span className="text-lg font-semibold bg-bordo text-white px-2 py-1 rounded transition-colors">
                  {t("docsprograms.carRepairMechanic")}
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
                      <p className="text-base font-medium text-blue-600 mb-4">
                        {t("docsdescriptions.carRepairMechanic")}
                      </p>
                      <div className="flex flex-col gap-2">
                        {[
                          {
                            href: "https://docs.google.com/document/d/1xN0-s9uSQI04w57zdXQX5HxBHFbGeR_n/edit",
                            text: "Рабочая программа по дисциплине «Производственное обучение»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1GduXbthlLB6pQeRx67RTvApx0A5Ov5xZ/edit",
                            text: "Рабочая программа по дисциплине «Основы электроматериаловедения»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1RXSgOojwGuDpfTL_M-AV6zDJHuXffbEB/edit",
                            text: "Рабочая программа по дисциплине «Система техобслуживание и ремонт электрооборудования автомобиля»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1-UWmVwKNmYjzFnL3ElDzkR-vUWPRDic2/edit",
                            text: "Рабочая программа по дисциплине «Основы электротехники и электроники»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1zsoWv084TVPAOxW3YPvg_yWB_JtCx0XV/edit",
                            text: "Рабочая программа по дисциплине «Чтение чертежей и схем» («Техническое черчение»)",
                          },
                          {
                            href: "https://docs.google.com/document/d/1IDZP1K0naz9MP_uM-OOpg8FgqgG5vMyV/edit",
                            text: "Рабочая программа по дисциплине «Техобслуживание и ремонт автомобиля»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1EUgotFCMJ69kI5paOpFXW9yoQeh4C8Qz/edit",
                            text: "Рабочая программа по дисциплине «Технология ремонта автомобильного электрооборудования»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1yzZzL-P6HbXJgE2ES-XKYXUobhlNENjt/edit",
                            text: "Рабочая программа по дисциплине «Электрооборудование и электронные системы автомобилей»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1vaI5bC7zs9hjAjVI-wbYJisxV5Phr_jO/edit",
                            text: "Рабочая программа по дисциплине «Устройства и эксплуатация автомобиля»",
                          },
                          {
                            href: "https://docs.google.com/document/d/1uZVEjk_1SjzThdIC-I3kxyIhh3iBu6iK/edit",
                            text: "Образовательная программа начального профессионального образования",
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

export default LDocs;
