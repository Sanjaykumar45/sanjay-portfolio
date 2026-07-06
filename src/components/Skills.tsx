import { motion } from "framer-motion";
import { Layout, Server, Database, Wrench } from "lucide-react";

const groups = [
  {
    icon: Layout,
    title: "Frontend",
    skills: [
      { name: "Angular", level: 90 },
      // { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Bootstrap 5", level: 88 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      { name: "ASP.NET Core", level: 90 },
      { name: "ASP.NET MVC", level: 85 },
      { name: "C#", level: 90 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    icon: Database,
    title: "Database",
    skills: [
      { name: "MS SQL Server", level: 87 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 92 },
      { name: "Visual Studio", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-4">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-glow">
            My Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Technical Proficiency</h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="glass rounded-3xl p-7 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl text-white"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <group.icon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-semibold">{group.title}</h3>
              </div>

              <div className="mt-6 space-y-4">
                {group.skills.map((s, si) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: si * 0.08, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-aurora)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
