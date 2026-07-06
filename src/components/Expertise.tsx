import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  ServerCog,
  Database,
  Boxes,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Frontend Development",
    desc: "Build responsive and scalable web applications using Angular, TypeScript, HTML5, CSS3, and Bootstrap with a focus on performance and user experience.",
  },
  {
    icon: ServerCog,
    title: "Backend Development",
    desc: "Develop secure RESTful APIs and business logic using ASP.NET Core, .NET technologies, authentication, authorization, and enterprise architecture principles.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Design and optimize SQL Server and PostgreSQL databases, stored procedures, data models, and queries for reliability and high performance.",
  },
  {
    icon: Workflow,
    title: "API Integration",
    desc: "Integrate third-party APIs and external services to automate workflows, exchange data securely, and improve operational efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Applications",
    desc: "Build enterprise-grade systems with role-based access control, secure authentication, workflow automation, and scalable architectures.",
  },
  {
    icon: Boxes,
    title: "Full Stack Solutions",
    desc: "Deliver end-to-end solutions from frontend interfaces to backend services and databases, transforming business requirements into production-ready applications.",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-glow">
            Expertise
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What I Do Best</h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass group relative overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "var(--gradient-radial)" }}
              />
              <span
                className="grid h-14 w-14 place-items-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-110"
                style={{ background: "var(--gradient-brand)" }}
              >
                <s.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
