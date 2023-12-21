import { motion } from "framer-motion";
import Avatar from "../../../assets/jpg/Avatar2-asset.jpg";
import Button from "../button/Button";

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
            Hello, my name is Firman Subagja, you can call me Firman. I
            graduated from D3 Telecommunications Technology at the most famous
            private university in southern Bandung, namely Telkom University
            from 2017 to 2021. for now I live in the city of Bandung
          </p>
        </div>
        <div>
          <p>
            He have participated in an internship at the IT Consultant company,
            Sagara Technology. There I have worked on internal company projects
            where they have collaborated with Telkom University to hold
            Competency Certification and finally trusted by Sagara Technology as
            an assessor. And the other side I help to work on Client Projects
            with a team consisting of Project Manager, Front End Developer, and
            Back End Developer.
          </p>
        </div>
        <div>
          <p>
            From all the learning from the internship, I still want to focus on
            the realm of Web Development, especially in Front End Developer and
            Back End Developer because this is my passion, I want to realize my
            dreams even though there are many obstacles and ready to print
            collaboration from companies that will accept me by producing the
            desired output.
          </p>
        </div>
        <div>
          <Button>Details</Button>
        </div>
      </div>
    </motion.section>
  );
};

export default Desc;
