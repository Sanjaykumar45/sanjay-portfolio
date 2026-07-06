import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, ReceiptText, Building2 } from "lucide-react";

import cmsImage from "../assets/projects/cms.png";
import availityImage from "../assets/projects/availity.png";
import reimbursementImage from "../assets/projects/reimbursement.png";
import licImage from "../assets/projects/lic.png";

const projects = [
  {
    icon: ShieldCheck,
    image: cmsImage,
    color: "var(--brand)",
    name: "Credential Management System",
    period: "Oct 2025 – Dec 2025",
    desc: "Led the modernization of a legacy credential management platform by migrating it to Angular and ASP.NET Core. Designed secure role-based access control for Employees, Clients, and Super Admins, implemented encrypted credential storage, and developed scalable REST APIs integrated with PostgreSQL for high-performance data management.",
    tech: ["Angular", ".NET Core", "PostgreSQL", "EF Core"],
    
  },
  {
    icon: HeartPulse,
    image: availityImage,
    color: "var(--brand-glow)",
    name: "Healthcare API Integration – Availity",
    period: "Jul 2025 – Oct 2025",
    desc: "Developed healthcare integration services using Availity APIs to retrieve real-time insurance eligibility, claims, and patient information. Built secure backend services and intuitive Angular dashboards that improved workflow efficiency for Accounts Receivable teams and reduced manual processing efforts.",
    tech: ["Angular", ".NET Core", "REST APIs", "SQL Server"],
  },
  {
    icon: ReceiptText,
    image: reimbursementImage,
    color: "var(--brand-accent)",
    name: "Healthcare Reimbursement System",
    period: "Jan 2025 – Jul 2025",
    desc: "Built enterprise-grade reimbursement modules supporting claim processing, user allocation, workflow automation, and client-specific business rules. Developed scalable .NET Core APIs, optimized SQL Server stored procedures, and created responsive Angular interfaces for seamless healthcare operations.",
    tech: ["Angular", ".NET Core", "SQL Server", "Stored Procedures"],
  },
  {
    icon: Building2,
    image: licImage,
    color: "var(--brand)",
    name: "LIC e-PGS Portal",
    period: "May 2022 – Sep 2023",
    desc: "Contributed to the development of LIC's Pension Group Scheme portal by building complex Angular components for Superannuation, Gratuity, and Common modules. Integrated enterprise APIs, participated in testing and deployment activities, and ensured reliable performance for large-scale business workflows.",
    tech: ["Angular", "SQL Server", "REST APIs"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand sm:text-sm">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Key Projects</h2>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 cursor-pointer">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1 }}
              className="glass group overflow-hidden rounded-xl border border-black/10 p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 overflow-hidden rounded-xl">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-30 w-full object-cover rounded-lg"
                />
              </div>

              <div className="flex items-center gap-3">
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border-2 border-ink text-white"
                  style={{ background: p.color }}
                >
                  <p.icon className="h-5 w-5" />
                </span>

                <div className="min-w-0">
                  <h3 className="text-sm font-bold leading-tight">
                    {p.name}
                  </h3>

                  <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    {p.period}
                  </p>
                </div>
              </div>

              <p className="mt-2 line-clamp-3 text-xs leading-6 text-muted-foreground">
                {p.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink bg-brand-accent/40 px-2 py-0.5 text-[10px] font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
