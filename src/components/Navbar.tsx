import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { navItems } from "@/lib/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.querySelector(n.href))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // const go = (href: string) => {
  //   setOpen(false);
  //   document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  // };

  const go = (href: string) => {
  const element = document.querySelector(href);

  setOpen(false);

  setTimeout(() => {
    if (element) {
      const navbarHeight = 90;

      const offsetTop =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }, 200);
};

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button onClick={() => go("#home")} className="flex items-center gap-2 font-bold cursor-pointer">
          <span
            className="grid h-9 w-9 place-items-center rounded-lg text-white"
            style={{ background: "var(--gradient-brand)" }}
          >
            <Code2 className="h-5 w-5" />
          </span>
          <span className="text-lg"><span className="text-gradient">.Portfolio</span></span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => go(item.href)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  active === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === item.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-brand/15 ring-1 ring-brand/30"
                  />
                )}
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden rounded-lg p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="glass overflow-hidden md:hidden"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  type="button"
                  onClick={() => {
                    console.log(item.href);
                    go(item.href)}}
                  className={`block w-full px-6 py-3 text-left text-sm font-medium ${
                    active === item.href ? "text-gradient" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
