import { Blog } from "@/components/blog";
import { ContactUs } from "@/components/contact-us";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { MainHero } from "@/components/main-hero";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { WelcomeHero } from "@/components/welcome-hero";


export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <MainHero />
      <WelcomeHero />
      <Services />
      <Gallery />
      <Testimonials />
      <Blog />
      <ContactUs />
      <Footer />
    </div>
  );
}
