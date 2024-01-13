import { motion } from "framer-motion";
import Avatar from "../../../assets/jpg/Avatar2-asset.jpg";

const Desc = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="text-white gap-14 container h-full flex flex-col-reverse lg:flex-row justify-center py-20 items-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        className="flex-none lg:flex-1"
      >
        <motion.img
          src={Avatar}
          alt="Avatar"
          initial={{
            opacity: 0,
            transform: "translateX(-20%) translateY(15%)",
          }}
          whileInView={{
            opacity: 1,
            transform: "translateX(-10%) translateY(5%)",
          }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          className="absolute -translate-x-7 translate-y-7 w-60 h-60 lg:w-96 lg:h-96 bg-gray-900 rounded-lg z-10"
        />
        <motion.div
          initial={{
            opacity: 0,
            transform: "translateX(-10%) translateY(5%)",
          }}
          whileInView={{
            opacity: 1,
            transform: "translateX(0%) translateY(0%)",
          }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 1.2 }}
          className="w-60 h-60 lg:w-96 lg:h-96 border-8 border-white shadow-xl shadow-white rounded-lg z-[1]"
        ></motion.div>
      </motion.div>
      <div className="grid gap-5">
        <div>
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>
        <div>
          <p>
            Hello, my name is Firman Subagja, you can call me Firman. I am a D3
            Telecommunication Technology graduate from Telkom University, a
            well-known private university in South Bandung. I graduated in 2021
            and I currently live in the city of Bandung.
          </p>
        </div>
        <div>
          <p>
            I had an internship at an IT Consultant company, Sagara Technology,
            for six months. There, I was involved in internal company projects,
            such as creating a website for competency certification in
            collaboration with Telkom University. I was also trusted as an
            assessor in the certification process. In addition, I also helped
            work on client projects with a team consisting of a Project Manager,
            Front End Developer, and Back End Developer. From this internship, I
            learned a lot about web development, both in terms of design,
            function, and management. Translated with www.DeepL.com/Translator
            (free version)
          </p>
        </div>
        <div>
          <p>
            Web development is a field that I am very interested in and want to
            focus on. I have expertise in HTML, CSS, and JavaScript, I can also
            use several frameworks and tools, such as ReactJS, NextJS,
            TailwindCSS, etc. I enjoy creating attractive, responsive, and
            user-friendly websites. I want to realize my dream of becoming a
            professional web developer despite many challenges and obstacles. I
            am ready to work with companies that are willing to accept me and
            produce outputs that are in accordance with their wishes.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Desc;
