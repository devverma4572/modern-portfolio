"use client";

import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { cn } from "@/utils/cn";

const ResumeCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 p-5 lg:p-10"
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover/bento:opacity-100 transition duration-300 rounded-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Header Section */}
        <div className="space-y-2 md:space-y-3">
          <div className="font-sans font-extralight text-xs lg:text-base text-[#C1C2D3]">
            Career Overview
          </div>
          <h2 className="font-sans text-lg lg:text-3xl font-bold text-white">
            Download My Resume
          </h2>
        </div>

        {/* Description */}
        <div className="font-sans text-sm md:text-base text-[#A1A2B3] leading-relaxed py-4">
          Get a quick overview of my skills, projects, and experience. Download
          my resume to explore my professional background and capabilities.
        </div>

        {/* Download Button */}
        <div className="flex justify-start mt-6">
          <button
            onClick={handleDownload}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Download resume PDF"
            className={cn(
              "relative inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white",
              "bg-gradient-to-r from-purple-500 via-purple-600 to-blue-600",
              "hover:from-purple-600 hover:via-purple-700 hover:to-blue-700",
              "active:scale-95",
              "transition duration-200 ease-in-out",
              "shadow-lg hover:shadow-[0_0_20px_rgba(138,43,226,0.4)]",
              "transform group-hover/bento:scale-105 group-hover/bento:translate-y-[-2px]",
              "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-950"
            )}
          >
            {/* Icon */}
            <FiDownload className={cn(
              "w-5 h-5 transition duration-200",
              isHovered && "animate-bounce"
            )} />
            {/* Text */}
            <span className="font-semibold text-sm lg:text-base">
              Download Resume
            </span>
          </button>
        </div>

        {/* Optional: Footer Text */}
        <div className="text-xs text-[#888899] mt-4 pt-4 border-t border-white/[0.1]">
          PDF • ~2 MB
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
