"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: "scribe",
    title: "scribe",
    description:
      "a minimal note-taking app with a clean editor, firebase sync, and google authentication.",
    href: "https://freehandx.gauravsingh.co.in/",
  },
  {
    id: "myth-moss",
    title: "myth & moss",
    description:
      "an aesthetic space for calm productivity, featuring ambient sounds, pomodoro timers, and to-do lists.",
    href: "https://drive.google.com/file/d/1OMP5khnNDDO1lxSSXiGf7Oih-UyNP1FV/view?usp=drive_link",
  },
  {
    id: "pathfinder",
    title: "pathfinding visualizer",
    description:
      "an interactive tool to explore algorithms like a*, dijkstra, and bfs through visual animations.",
    href: "https://tool.qr.gauravsingh.co.in/",
  },
  {
    id: "antivery",
    title: "anti very",
    description:
      "a fun word-play app that flips meanings and generates quirky, anti-phrased responses.",
    href: "https://chat-with-pdf-zeta-six.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="flex max-w-full flex-col py-40 md:py-52">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          {/* <h1 className="text-4xl tracking-wide">Projects</h1> */}
          <Link
            href="/"
            className="text-[#CFCFCF]  hover:text-[#EDEDED] transition-colors duration-300"
          >
            ← <span className="underline underline-offset-[5px]">back</span>
          </Link>
        </div>

        {/* Projects list */}
        <motion.div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.href}
              target="_blank"
              className="relative flex cursor-pointer flex-col gap-1 rounded-lg border border-[#2A2A2A] bg-[#161616] p-4 hover:bg-[#1E1E1E] hover:shadow-lg transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              rel="noreferrer"
            >
              <h2 className="text-sm font-medium md:text-base">
                {project.title}
              </h2>
              <p className="text-sm text-[#B4B4B4]">{project.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
