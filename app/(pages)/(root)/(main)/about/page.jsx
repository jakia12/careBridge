import PageBanner from "@/components/shared/PageBanner";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import CounterSection from "./components/CounterSection";
import CtaSectionThree from "./components/CtaSectionThree";

const AboutPage = () => {
  return (
    <div>
      <PageBanner title="About Us" />
      <AboutSection />
      <CounterSection />
      <TeamSection />
      <CtaSectionThree />
    </div>
  );
};

export default AboutPage;
