import { useState } from "react";
import { motion } from "framer-motion";
import { backEndSkills, frontEndSkills } from "./data";

const TableStacks = () => {
  const [activeTab, setActiveTab] = useState("front-end");

  const handleTableSelect = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="font-medium flex gap-5">
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.0 }}
          onClick={() => handleTableSelect("front-end")}
          className={` px-5 py-3 rounded-lg transition ease-in-out duration-300 ${
            activeTab === "front-end"
              ? "bg-red-500 shadow-2xl shadow-red-500"
              : "text-white"
          }`}
        >
          Front End
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          onClick={() => handleTableSelect("back-end")}
          className={`px-5 py-3 transition ease-in-out duration-300 rounded-lg ${
            activeTab === "back-end"
              ? "bg-red-500 shadow-2xl shadow-red-500"
              : "text-white"
          }`}
        >
          Back End
        </motion.button>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {activeTab === "front-end" && (
          <>
            {frontEndSkills.map((skill, i) => {
              return (
                <motion.a
                  href={skill.reference}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={skill.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.5 }}
                >
                  <div
                    className={`w-32 h-32 md:w-56 md:h-56 lg:w-64 lg:h-80 bg-gradient-to-br from-gray-800 from-10% via-gray-800 via-30% to-gray-700 to-100 transition duration-300 delay-150 ease-in-out hover:shadow-2xl hover:shadow-${skill.color} hover:from-gray-700 hover:via-gray-700 hover:to-gray-800 rounded-xl`}
                  >
                    <div className="flex flex-col text-white text-center gap-2 lg:gap-5 p-3 justify-between items-center h-full">
                      <div className="flex flex-col gap-2 items-center pt-0 lg:pt-5">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-16 sm:w-28 lg:w-16 rounded-lg py-2"
                        />
                        <h3 className="text-md sm:text-xl lg:text-2xl font-semibold text-white">
                          {skill.name}
                        </h3>
                        <p className="text-sm hidden lg:block">
                          {skill.description}
                        </p>
                      </div>
                      <div className="pb-3 hidden lg:block">
                        <p className="text-sm font-semibold">Read More</p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </>
        )}
        {activeTab === "back-end" && (
          <>
            {backEndSkills.map((skill, i) => {
              return (
                <motion.a
                  href={skill.reference}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={skill.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.5 }}
                >
                  <div
                    className={`w-32 h-32 md:w-56 md:h-56 lg:w-64 lg:h-80 bg-gradient-to-br from-gray-800 from-10% via-gray-800 via-30% to-gray-700 to-100 transition duration-300 delay-150 ease-in-out hover:shadow-2xl hover:shadow-${skill.color} hover:from-gray-700 hover:via-gray-700 hover:to-gray-800 rounded-xl`}
                  >
                    <div className="flex flex-col text-white text-center gap-2 lg:gap-5 p-3 justify-between items-center h-full">
                      <div className="flex flex-col gap-2 items-center pt-0 lg:pt-5">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-16 sm:w-28 lg:w-16 rounded-lg py-2"
                        />
                        <h3 className="text-md sm:text-xl lg:text-2xl font-semibold text-white">
                          {skill.name}
                        </h3>
                        <p className="text-sm hidden lg:block">
                          {skill.description}
                        </p>
                      </div>
                      <div className="pb-3 hidden lg:block">
                        <p className="text-sm font-semibold">Read More</p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default TableStacks;
