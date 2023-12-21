import { motion } from "framer-motion";
import Avatar from "../../../assets/png/man.png";
import Button from "../button/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="container h-[100vh] mt-0 lg:-mt-16 text-white"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 items-center justify-center h-full">
        <div className="leading-normal space-y-3 text-center lg:text-left lg:space-y-3 ">
          <div className="flex flex-col gap-0 lg:gap-4">
            <motion.h1
              initial={{ opacity: 0, transform: "translateX(-5%)" }}
              animate={{ opacity: 1, transform: "translateX(0%)" }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              className="text-3xl sm:text-2xl md:text-5xl lg:text-5xl font-semibold"
            >
              Hello, I'm <br />{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-red-500"
              >
                Firman Subagja
              </motion.span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="text-xl sm:text-lg md:text-3xl lg:text-3xl"
            >
              <span className="text-gray-200 font-medium">
                Software Engineer |{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  className="bg-white text-black rounded-md px-5"
                >
                  Front End Engineer
                </motion.span>
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="text-gray-300 mr-0 text-md sm:text-md md:text-xl lg:text-xl lg:pr-28"
            >
              Passionate about crafting beautiful digital experiences with Front
              End Stack as TypeScript, ReactJS, NextJS, and TailwindCSS. He
              always on the lookout for new challenges and learning
              opportunities
            </motion.p>
          </div>
          <Button>Let's get started</Button>
        </div>
        <div className="order-first lg:order-last">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 0.5, delay: 2 }}
            className="rounded-full bg-red-500 shadow-xl shadow-gray-300 hover:shadow-red-500 transition ease-in-out duration-300 cursor-pointer w-56 sm:w-60 md:w-72 lg:w-full"
          >
            <img src={Avatar} className=" w-56 sm:w-60 md:w-72 lg:w-full" />
          </motion.div>
        </div>
      </div>
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3 }}
          className="-translate-y-28 text-xl hidden lg:block"
        >
          "To Be The Next <b>Level</b>!"
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
