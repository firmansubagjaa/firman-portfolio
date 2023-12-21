import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import listProjects from "./listProjects.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GitHub } from "react-feather";

const Projects: React.FC = () => {
  const [sliderRef] = useKeenSlider(
    {
      breakpoints: {
        "(min-width: 400px": {
          slides: { perView: 1, spacing: 20 },
        },
        "(min-width: 600px)": {
          slides: { perView: 2, spacing: 20 },
        },
        "(min-width: 900px)": {
          slides: { perView: 1, spacing: 30 },
        },
      },
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <section id="projects" className="h-full py-28 text-gray-100">
      <div className="container flex flex-col gap-5">
        <div>
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-lg">Some of my projects</p>
        </div>
        <div>
          <div ref={sliderRef} className="keen-slider">
            {listProjects.map((item, i) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.3 }}
                  className="keen-slider__slide bg-gray-800 h-full flex flex-col justify-start rounded-2xl"
                  key={item.id}
                >
                  <figure>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-[700px] object-cover"
                    />
                  </figure>
                  <div className="p-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-between">
                        <h2 className="text-2xl font-bold">{item.title}</h2>
                        <span
                          className={`text-lg  px-3 py-1 rounded  font-semibold ${
                            item.status === "Done"
                              ? "bg-green-500 shadow-xl shadow-green-800"
                              : "bg-yellow-500 shadow-xl shadow-yellow-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="text-lg">Project Description</p>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-3">
                      <Link to={item.url} target="_blank" rel="noreferrer">
                        <button className="w-full bg-red-500 hover:bg-red-400 active:bg-red-600 transition ease-in-out duration-300 px-5 py-3 rounded-lg">
                          View
                        </button>
                      </Link>
                      <Link to={item.url} target="_blank" rel="noreferrer">
                        <button className="w-full bg-gray-600 hover:bg-gray-400 active:bg-gray-700 transition ease-in-out duration-300 px-5 py-3 rounded-lg flex justify-center items-center gap-2">
                          <GitHub />
                          GitHub
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
