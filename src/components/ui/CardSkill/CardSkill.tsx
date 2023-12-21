import { motion } from "framer-motion";
import TableStacks from "./TableStacks";

const CardSkill = () => {
  return (
    <section className="flex flex-col mt-20 bg-gray-900 w-full gap-12 items-center h-[100vh]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="container w-full h-[40rem] sm:h-[50rem] lg:h-[40rem] -mt-20 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 rounded-3xl shadow-2xl shadow-gray-200"
      >
        <div className="flex flex-col justify-center gap-5 items-center h-full">
          <div className="text-white text-center space-y-3 w-full lg:w-[40rem]">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="text-3xl font-bold"
            >
              My Stack
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              For the past 2 years I have been learning and there are some that
              are already at the Intermediate level.
            </motion.p>
          </div>
          <TableStacks />
        </div>
      </motion.div>
    </section>
  );
};

export default CardSkill;
