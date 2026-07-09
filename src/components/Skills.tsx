// import { motion } from "framer-motion";
// import { Layout, Server, Database, Wrench } from "lucide-react";

// const groups = [
//   {
//     icon: Layout,
//     title: "Frontend",
//     skills: [
//       { name: "Angular", level: 90 },
//       // { name: "TypeScript", level: 88 },
//       { name: "JavaScript", level: 90 },
//       { name: "HTML5", level: 95 },
//       { name: "CSS3", level: 90 },
//       { name: "Bootstrap 5", level: 88 },
//     ],
//   },
//   {
//     icon: Server,
//     title: "Backend",
//     skills: [
//       { name: "ASP.NET Core", level: 90 },
//       { name: "ASP.NET MVC", level: 85 },
//       { name: "C#", level: 90 },
//       { name: "REST APIs", level: 88 },
//     ],
//   },
//   {
//     icon: Database,
//     title: "Database",
//     skills: [
//       { name: "MS SQL Server", level: 87 },
//       { name: "PostgreSQL", level: 75 },
//     ],
//   },
//   {
//     icon: Wrench,
//     title: "Tools",
//     skills: [
//       { name: "Git", level: 88 },
//       { name: "GitHub", level: 88 },
//       { name: "VS Code", level: 92 },
//       { name: "Visual Studio", level: 90 },
//     ],
//   },
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="relative py-4">
//       <div className="mx-auto max-w-7xl px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-glow">
//             My Skills
//           </p>
//           <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Technical Proficiency</h2>
//         </motion.div>

//         <div className="mt-12 grid gap-6 md:grid-cols-2">
//           {groups.map((group, gi) => (
//             <motion.div
//               key={group.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: gi * 0.1 }}
//               className="glass rounded-3xl p-7 transition-transform hover:-translate-y-1"
//             >
//               <div className="flex items-center gap-3">
//                 <span
//                   className="grid h-11 w-11 place-items-center rounded-xl text-white"
//                   style={{ background: "var(--gradient-brand)" }}
//                 >
//                   <group.icon className="h-5 w-5" />
//                 </span>
//                 <h3 className="text-xl font-semibold">{group.title}</h3>
//               </div>

//               <div className="mt-6 space-y-4">
//                 {group.skills.map((s, si) => (
//                   <div key={s.name}>
//                     <div className="mb-1.5 flex justify-between text-sm">
//                       <span className="font-medium">{s.name}</span>
//                       <span className="text-muted-foreground">{s.level}%</span>
//                     </div>
//                     <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${s.level}%` }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 1, delay: si * 0.08, ease: "easeOut" }}
//                         className="h-full rounded-full"
//                         style={{ background: "var(--gradient-aurora)" }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Wrench,
  ChevronRight,
} from "lucide-react";

const groups = [
  {
    icon: Layout,
    title: "Frontend",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Angular", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "HTML5", level: "Expert" },
      { name: "CSS3", level: "Expert" },
      { name: "Bootstrap 5", level: "Advanced" },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "ASP.NET Core", level: "Expert" },
      { name: "ASP.NET MVC", level: "Advanced" },
      { name: "C#", level: "Expert" },
      { name: "REST APIs", level: "Advanced" },
    ],
  },
  {
    icon: Database,
    title: "Database",
    color: "from-purple-500 to-fuchsia-500",
    skills: [
      { name: "MS SQL Server", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "VS Code", level: "Expert" },
      { name: "Visual Studio", level: "Expert" },
    ],
  },
];

const badgeStyle: Record<string, string> = {
   Beginner:
    "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",

  Intermediate:
    "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",

  Advanced:
    "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",

  Expert:
    "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
};

const levels = [
  {
    title: "Beginner",
    color: "bg-green-500",
    desc: "Fundamental knowledge and currently building practical experience.",
  },
  {
    title: "Intermediate",
    color: "bg-blue-500",
    desc: "Good understanding with hands-on experience in real projects.",
  },
  {
    title: "Advanced",
    color: "bg-orange-500",
    desc: "Strong practical experience and ability to build production-ready solutions.",
  },
  {
    title: "Expert",
    color: "bg-red-500",
    desc: "Deep expertise with extensive real-world experience and architecture-level understanding.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-18">

      <div className="mx-auto max-w-[1400px] px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-brand-glow font-semibold">
            MY SKILLS
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Technical Proficiency
          </h2>
        </motion.div>

        {/* Skills Cards */}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          {groups.map((group, index) => (

            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .08 }}
              className="glass rounded-3xl p-8 min-h-[360px] hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >

              <div className="flex items-center gap-4 mb-6">

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${group.color}`}
                >
                  <group.icon
                    className="text-white h-6 w-6"
                  />
                </div>

                <h3 className="text-2xl font-bold">
                  {group.title}
                </h3>

              </div>

              <div className="space-y-5 mt-8">

                {group.skills.map((skill) => (

                  <div
                    key={skill.name}
                    className="flex justify-between items-center"
                  >

                    <div className="flex items-center gap-2">

                      <ChevronRight
                        size={16}
                        className="text-brand-glow"
                      />

                      <span className="font-medium">
                        {skill.name}
                      </span>

                    </div>

                    <span
                      className={`text-sm font-semibold px-4 py-1.5 rounded-full ${badgeStyle[skill.level]}`}
                    >
                      {skill.level}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

        {/* Skill Legend */}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          {levels.map((item) => (

            <div
              key={item.title}
              className="glass rounded-2xl p-7"
            >

              <div className="flex items-center gap-3 mb-3">

                <div className={`w-4 h-4 rounded-full ${item.color}`} />

                <h4 className="font-bold">
                  {item.title}
                </h4>

              </div>

              <p className="text-sm text-muted-foreground leading-6">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}