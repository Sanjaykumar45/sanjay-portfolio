import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, FolderGit2, Layers, Award } from "lucide-react";
import heroAsset from "../assets/Profile2.png";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const dur = 1500;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / dur, 1);
      setVal(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: Briefcase, value: 2, suffix: "+", label: "Years Experience" },
  { icon: FolderGit2, value: 6, suffix: "+", label: "Projects Completed" },
  { icon: Layers, value: 12, suffix: "+", label: "Technologies" },
  { icon: Award, value: 2, suffix: "", label: "Domains Served" },
];

export default function About() {
  return (
    <section id="about" className="relative py-12">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-glow">
            About Me
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Who I Am</h2>
        </motion.div>
{/* 
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a <span className="font-semibold text-foreground">Full Stack Developer</span> with{" "}
              <span className="font-semibold text-foreground">2+ years of experience</span> in
              designing and developing scalable enterprise applications. I specialize in Angular,
              ASP.NET Core, SQL Server, and modern web technologies. Passionate about building
              high-performance applications and delivering exceptional user experiences.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Angular", "ASP.NET Core", "C#", "SQL Server", "TypeScript", "REST APIs"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand-glow ring-1 ring-brand/20"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass group rounded-2xl p-6 text-center transition-transform hover:-translate-y-1"
              >
                <div
                  className="mx-auto grid h-12 w-12 place-items-center rounded-xl text-white"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <s.icon className="h-6 w-6" />
                </div>
                <p className="mt-4 text-3xl font-bold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div> */}

        <div className="mt-8 space-y-8">
          <div className="grid items-center gap-8 lg:grid-cols-[420px_1fr]">

          
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-4 h-[460px] flex items-center justify-center"
            >
              <img
                src={heroAsset}
                alt="Sanjay Kumar - Full Stack Developer"
                className="max-h-[400px] w-auto object-contain"
              />
            </motion.div>

       
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="min-h-[460px] glass rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold">
                Full Stack Software Developer
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                I am a Full Stack Developer with nearly
                <span className="font-semibold text-foreground"> 3 years of experience </span>
                in designing, developing, and maintaining scalable web applications using
                Angular, ASP.NET Core, .NET Web APIs, SQL Server, and PostgreSQL.
              </p>

              <p className="mt-4 text-muted-foreground">
                I have experience building enterprise-grade solutions, integrating
                third-party APIs, implementing secure authentication, and developing
                responsive user interfaces. My expertise spans healthcare, insurance,
                credential management, and business automation platforms.
              </p>

              <p className="mt-4 text-muted-foreground">
                Passionate about clean architecture, reusable components, and modern web
                technologies, I enjoy creating high-performance applications that deliver
                exceptional user experiences and solve real-world business challenges.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Angular",
                  "ASP.NET Core",
                  ".NET Web API",
                  "C#",
                  "SQL Server",
                  "PostgreSQL",
                  "TypeScript",
                  "REST APIs",
                  "Bootstrap",
                  "Agile",
                  "API Integration",
                  "Authentication",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand-glow ring-1 ring-brand/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass group rounded-2xl p-6 text-center transition-transform hover:-translate-y-1"
              >
                <div
                  className="mx-auto grid h-12 w-12 place-items-center rounded-xl text-white"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <s.icon className="h-6 w-6" />
                </div>

                <p className="mt-4 text-3xl font-bold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* <div className="mt-12 grid gap-8 lg:grid-cols-[420px_1fr]">

  
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-4 flex items-center justify-center"
          >
            <img
              src={heroAsset}
              alt="Sanjay Kumar"
              className="max-h-[600px] w-auto object-contain"
            />
          </motion.div>

          <div className="space-y-6">

      
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold">
                Full Stack Developer
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                I am a Full Stack Developer with
                <span className="font-semibold text-foreground">
                  {" "}2+ years of experience{" "}
                </span>
                in designing and developing scalable enterprise applications.
              </p>

              <p className="mt-4 text-muted-foreground">
                Passionate about building high-performance applications
                and delivering exceptional user experiences.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Angular",
                  "ASP.NET Core",
                  "C#",
                  "SQL Server",
                  "TypeScript",
                  "REST APIs",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand-glow ring-1 ring-brand/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

     
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div
                    className="mx-auto grid h-12 w-12 place-items-center rounded-xl text-white"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <s.icon className="h-6 w-6" />
                  </div>

                  <p className="mt-4 text-3xl font-bold text-gradient">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div> */}
      </div>
    </section>
  );
}
