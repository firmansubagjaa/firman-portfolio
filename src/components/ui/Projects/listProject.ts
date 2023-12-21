import hiringJobs from "../../../assets/webp/hiringjobs.webp";
import quantumGoods from "../../../assets/webp/quantumgoods.webp";
import tickitz from "../../../assets/webp/tickitz.webp";
import kopiTeduh from "../../../assets/webp/kopiteduh.webp";

interface ListProjects {
  id: number;
  title: string;
  img: string;
  url: string;
  github: string;
  status: string;
  stack: string;
}

type ListProjectsType = ListProjects[];

const listProjects: ListProjectsType = [
  {
    id: 1,
    title: "Hiring Jobs",
    img: hiringJobs,
    url: "https://hiring-app-fe-eight.vercel.app/",
    github: "https://github.com/teko-tech-project-team/hiring-app-fe",
    status: "Done",
    stack: "ReactJS, DaisyUI, TailwindCSS, React-Icons, React-Toastify",
  },
  {
    id: 2,
    title: "QuantumGoods",
    img: quantumGoods,
    url: "https://quantumgoods.vercel.app/",
    github: "https://github.com/firmansubagjaa/quantumgoods",
    status: "Done",
    stack: "ReactJS, DaisyUI, TailwindCSS, React-Icons, React-Toastify",
  },
  {
    id: 3,
    title: "Tickitz",
    img: tickitz,
    url: "https://tickitz-stringify.vercel.app/",
    github: "https://github.com/firmansubagjaa/Tickitz-FE",
    status: "Done",
    stack: "NextJS, TailwindCSS, React-Icons, React-Toastify",
  },
  {
    id: 4,
    title: "Kopi Teduh",
    img: kopiTeduh,
    url: "https://kopi-teduh.vercel.app/",
    github: "https://github.com/firmansubagjaa/kopi-teduh",
    status: "In Progress",
    stack:
      "ReactJS, TailwindCSS, React-Query, React-Router, React-Icons, React-Toastify",
  },
];

export default listProjects;
