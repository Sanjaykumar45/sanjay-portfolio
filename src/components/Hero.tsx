import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Linkedin, Github, ArrowDown } from "lucide-react";
import heroAsset from "../assets/Profile.png";
import { profile, mailtoHireMe } from "@/lib/portfolio";

// const heroImg = heroAsset.url;

const roles = [
  "Angular Developer",
  "ASP.NET Core Developer",
  "Full Stack Engineer",
  "Software Developer",
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = deleting ? 45 : 95;
    const timer = setTimeout(() => {
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      setText(next);
      if (!deleting && next === current) setTimeout(() => setDeleting(true), 1200);
      else if (deleting && next === "") {
        setDeleting(false);
        setI((p) => p + 1);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, i, words]);

  return text;
}

const social = [
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Github, href: profile.github, label: "GitHub" },
  { icon: Mail, href: mailtoHireMe, label: "Gmail" },
];

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
            Available for new opportunities
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-gradient">Sanjay Kumar</span>
          </h1>

          <p className="mt-3 text-2xl font-semibold text-foreground/90 sm:text-3xl">
            Full Stack Developer
          </p>

          <p className="mt-4 h-7 text-lg font-medium text-brand-glow">
            {typed}
            <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-brand-glow">&nbsp;</span>
          </p>

          <p className="mt-5 max-w-xl text-muted-foreground">
            Building scalable web applications with Angular, ASP.NET Core and Modern Web
            Technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={profile.resume}
              download
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-elegant)" }}
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>
            <a
              href={mailtoHireMe}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-brand/10"
            >
              <Mail className="h-4 w-4" />
              Hire Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="glass grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-1 hover:text-brand-glow"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div
            className="absolute inset-0 -z-10 rounded-full blur-3xl"
            style={{ background: "var(--gradient-aurora)", opacity: 0.4 }}
          />
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass overflow-hidden rounded-[2rem] p-2"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <img
              src={heroAsset}
              alt="Sanjay Kumar - Full Stack Developer"
              width={768}
              height={768}
              className="h-auto w-full max-w-md rounded-[1.6rem]"
            />
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
