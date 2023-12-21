import {
  CardSkill,
  Desc,
  Footer,
  Head,
  Hero,
  Navbar,
  Projects,
} from "../components";

const Home = () => {
  return (
    <>
      <Head title="Home" />
      <Navbar />
      <Hero />
      <CardSkill />
      <Desc />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
