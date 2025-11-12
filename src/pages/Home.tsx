import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import AiServicesIntro from "@/components/sections/AiServicesIntro";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AiServicesIntro />
      <TechStack />
      <Portfolio limit={3} />
      <Contact />
    </>
  );
};

export default HomePage;
