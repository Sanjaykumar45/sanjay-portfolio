import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import AuroraBackground from "@/components/AuroraBackground";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanjay Kumar — Full Stack Developer | Angular & ASP.NET Core" },
      {
        name: "description",
        content:
          "Sanjay Kumar is a Full Stack Developer with 3+ years building scalable web apps with Angular, ASP.NET Core, C# and SQL Server. View projects and get in touch.",
      },
      { property: "og:title", content: "Sanjay Kumar — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Premium portfolio of Sanjay Kumar, Full Stack Developer specializing in Angular and ASP.NET Core.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <AuroraBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster position="top-right" theme="light" richColors />
    </>
  );
}
