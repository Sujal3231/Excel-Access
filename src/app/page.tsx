
import Hero1 from "@/components/Hero1";
import Hero2 from "@/components/Hero2";
import Access from "components/Access";
import Integration from "@/components/Integration";
import Whychooseus from "@/components/Whychooseus";
import FrequentlyAsked from "components/FrequentlyAsked";
import NavbarComponent from "../components/navbar"; // ✅ correct relative path
import Clients from "components/Clients";
import Aboutus from "components/Aboutus";
import Contactus from "components/Contactus";
import footer from "components/footer";
import Footer from "components/footer";

export default function HomePage() {
  return (
    <>
      <NavbarComponent />
      <section id="home">
        <Hero1 />
      </section>
      <Hero2 />

      <section id="services">
        <Access />
        <Integration />
      </section>

      <section id="whyus">
        <Whychooseus />
      </section>

      <section id="faq">
        <FrequentlyAsked />
      </section>

      <section id="clients">
        <Clients />
      </section>

      <section id="aboutus">
        <Aboutus />
      </section>

      <section id="contactus">
        <Contactus />
      </section>

      <Footer />
    </>
  );
}
