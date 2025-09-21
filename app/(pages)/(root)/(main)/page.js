import AboutSection from "./components/AboutSection";
import Blog from "./components/Blog";
import CtaSection from "./components/CtaSection";
import DonateSection from "./components/DonateSection";
import HeroSlider from "./components/HeroSlider";
import SubscribeSection from "./components/Newsletter";
import ServiceSection from "./components/ServiceSection";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import VideoSection from "./components/VideoSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <DonateSection />
      <VideoSection />
      <ServiceSection />
      <TeamSection />
      <CtaSection />
      {/* <EventSection /> */}
      <TestimonialsSection />
      <Blog />
      <SubscribeSection />
    </>
  );
}
