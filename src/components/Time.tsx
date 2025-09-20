"use client";

import { useState, useEffect } from "react";

function pad(num: number) {
  return num.toString().padStart(2, "0");
}

function formatTime() {
  const now = new Date();
  return {
    hours: pad(now.getHours()),
    minutes: pad(now.getMinutes()),
  };
}

export default function Time() {
  const [hours, setHours] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const { hours, minutes } = formatTime();
    setHours(hours);
    setMinutes(minutes);

    const timer = setInterval(() => {
      const { hours: newHours, minutes: newMinutes } = formatTime();

      if (newHours !== hours) {
        setHours(newHours);
      }

      if (newMinutes !== minutes) {
        setAnimating(true);
        setTimeout(() => {
          setMinutes(newMinutes);
          setAnimating(false);
        }, 500);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes]);

  return (
    <div className="text-[#B4B4B4] text-sm font-mono flex items-center">
      <span>{hours}</span>:
      <div className="relative h-6 w-5 overflow-hidden flex items-center justify-center">
        <span
          className={`absolute transition-all duration-500 ${
            animating
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          {minutes}
        </span>
      </div>
    </div>
  );
}
