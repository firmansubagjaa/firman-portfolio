import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitHub, Linkedin, Instagram } from "react-feather";
import NavbarItems from "./list.json";

function Navbar() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    setScrollHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`z-[12] text-white py-5 container rounded-2xl mt-3 transition ease-out duration-700 ${
        scrollHeight > 500
          ? "bg-gray-800 shadow-xl sticky top-0 translate-y-2"
          : "relative bg-transparent translate-y-0"
      }`}
    >
      <div className="flex justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-xl">
            <b>FRMN.</b>SBGJ
          </h1>
        </motion.div>
        <div className="hidden lg:block">
          <ul className="flex gap-5">
            {NavbarItems.map((item, i) => {
              return (
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.3 }}
                  key={i}
                >
                  <a
                    href={item.url}
                    className="hover:text-red-500 transition ease-in-out duration-300"
                  >
                    {item.title}
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="flex gap-5"
          >
            <a
              href={"https://github.com/firmansubagjaa"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub className="w-6 h-6" />
            </a>
            <a
              href={"https://www.linkedin.com/in/firmansubagja/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.instagram.com/firmancodes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:hidden"
          ></motion.div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
