import {
  Linkedin,
  Github,
  Mail,
  Code2,
  MapPin,
  Briefcase,
} from "lucide-react";
import { profile, mailtoHireMe, navItems } from "@/lib/portfolio";

const social = [
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Github, href: profile.github, label: "GitHub" },
  { icon: Mail, href: mailtoHireMe, label: "Email" },
];

export default function Footer() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });

  return (
    <footer className="relative border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-3">
              <span
                className="grid h-12 w-12 place-items-center rounded-xl text-white"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Code2 className="h-6 w-6" />
              </span>

              <div>
                <h3 className="text-xl font-bold text-gradient">
                  Sanjay Kumar
                </h3>

                <p className="text-xs text-muted-foreground">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Passionate Full Stack Developer with expertise in Angular,
              ASP.NET Core, SQL Server, REST APIs, and enterprise web
              applications.
            </p>

            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin size={15} />
                Chennai, Tamil Nadu
              </p>

              <p className="flex items-center gap-2">
                <Briefcase size={15} />
                Open for Opportunities
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="mb-4 text-base font-bold">
              Navigation
            </h4>

            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => go(item.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand-glow cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="mb-4 text-base font-bold">
              Expertise
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Database Design</li>
              <li>API Integration</li>
              <li>Full Stack Solutions</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="mb-4 text-base font-bold">
              Connect
            </h4>

            <p className="mb-4 text-sm text-muted-foreground">
              Follow me on social platforms and let's build something amazing.
            </p>

            <div className="flex gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="
                    glass
                    grid h-11 w-11 place-items-center
                    rounded-full
                    transition-all
                    hover:-translate-y-1
                    hover:text-brand-glow
                  "
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-border pt-6">

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">

            <p>
              © {new Date().getFullYear()} Sanjay Kumar. All Rights Reserved.
            </p>

            <p className="italic">
              Building scalable web applications with clean code.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}