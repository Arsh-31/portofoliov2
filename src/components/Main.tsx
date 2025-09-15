"use client";

import { Github, Mail } from "lucide-react";
import Time from "@/components/Time"; // adjust path if needed
import Link from "next/link";

export default function HomeCard() {
  return (
    <div className="flex max-w-full flex-col py-40 md:py-52">
      <div className="border border-[rgb(42,42,42)] rounded-md p-10 max-w-2xl mx-auto">
        <div className="text-4xl tracking-wide">Arshpreet Kaur</div>

        <h2 className="text-sm text-[#CFCFCF] font-light lowercase tracking-widest">
          Software Developer
        </h2>

        <p className="mt-6 text-[#B4B4B4] leading-relaxed max-w-md mx-auto">
          I create digital experiences that are simple, functional, and
          aesthetic. Always learning, always building.
        </p>

        <div className="mt-8">
          <Link
            href="/projects"
            className="underline decoration-dashed underline-offset-[5px]"
          >
            projects
          </Link>
        </div>

        <div className="flex justify-between mt-8 items-center">
          {/* Social icons */}
          <div className="flex gap-2">
            <a
              href="https://github.com/Arsh-31"
              target="_blank"
              className="tracking-wide cursor-pointer text-[#B4B4B4] hover:text-[#EDEDED] transition-colors duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:kaurarshpreet746@gmail.com"
              target="_blank"
              className="tracking-wide cursor-pointer text-[#B4B4B4] hover:text-[#EDEDED] transition-colors duration-300"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Clock */}
          <Time />
        </div>
      </div>
    </div>
  );
}
