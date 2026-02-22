"use client";

import React from "react";
import { Gavel, FileText, CheckSquare, Banknote } from "lucide-react";
import { FloatingCard, PortalCard } from "./FloatingCard";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full flex flex-col lg:flex-row items-center justify-center px-6 lg:px-24 py-12 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">

            {/* Theme Toggle Positioned Top-Right */}
            <div className="absolute top-8 right-8 z-50">
                <ThemeToggle />
            </div>

            {/* Background Blobs - Significant Depth & Blur */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                {/* Massive Primary Blobs */}
                <motion.div
                    animate={{
                        x: [0, 40, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[15%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-200/40 dark:bg-blue-900/10 blur-[140px]"
                />
                <motion.div
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 40, 0],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] -right-[15%] w-[70%] h-[70%] rounded-full bg-indigo-200/30 dark:bg-indigo-900/10 blur-[160px]"
                />
                <motion.div
                    animate={{
                        x: [0, 25, 0],
                        y: [0, 60, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-[20%] left-[10%] w-[80%] h-[50%] rounded-full bg-slate-200/40 dark:bg-slate-800/10 blur-[180px]"
                />

                {/* Decorative Shape Accents */}
                <div className="absolute top-[35%] right-[5%] w-[600px] h-[100px] bg-blue-100/30 dark:bg-blue-900/5 rounded-full blur-[100px] -rotate-15" />
                <div className="absolute bottom-[20%] right-[15%] w-[500px] h-[120px] bg-indigo-100/20 dark:bg-indigo-900/5 rounded-full blur-[110px] rotate-12" />
            </div>

            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-10 z-10 text-center lg:text-left">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="flex flex-col gap-3"
                >
                    <h1 className="text-6xl lg:text-8xl font-bold text-slate-400 dark:text-slate-600 tracking-tighter leading-[1]">
                        A single platform to
                    </h1>
                    <h1 className="text-6xl lg:text-8xl font-bold text-slate-900 dark:text-white tracking-tighter leading-[1]">
                        manage every part of your <span className="text-indigo-600 dark:text-indigo-400">legal work</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium"
                >
                    Track matters, coordinate schedules, manage clients, centralize documents, and handle communication - all in one system.
                </motion.p>
            </div>

            {/* Right Content - Aggressive Scattering & Overlaps */}
            <div className="relative w-full lg:w-1/2 h-[600px] lg:h-[800px] flex items-center justify-center mt-12 lg:mt-0 perspective-1000">

                {/* Billing - Higher & More Rotated */}
                <FloatingCard
                    icon={Banknote}
                    label="Billing"
                    color="bg-blue-600 shadow-blue-500/20"
                    rotation="rotate-[-18deg]"
                    className="top-[5%] left-[25%] z-40"
                    delay={0.7}
                />

                {/* Matters - Pushed Further Left, Overlapping with Left Content slightly */}
                <FloatingCard
                    icon={Gavel}
                    label="Matters"
                    color="bg-[#E47E3A] shadow-orange-500/20"
                    rotation="rotate-[14deg]"
                    className="top-[40%] left-[-15%] lg:left-[-25%] z-20"
                    delay={0.9}
                />

                {/* Portal Card - Centerpiece, Increased Visibility & Overlap */}
                <div className="absolute z-50 top-[45%] left-[15%] drop-shadow-2xl">
                    <PortalCard
                        name="John Doe"
                        role="Portal"
                        message="Hey! Could you please review a document for me?"
                        ticket="MAT-2233"
                        time="2 h ago"
                        rotation="rotate-[-4deg]"
                        delay={1.3}
                    />
                </div>

                {/* Tasks - Closer to Portal Card, Overlapping lower part */}
                <FloatingCard
                    icon={CheckSquare}
                    label="Tasks"
                    color="bg-[#1F1926] shadow-black/30"
                    rotation="rotate-[12deg]"
                    className="bottom-[20%] left-[10%] z-40"
                    delay={1.5}
                />

                {/* Documents - Low & Far Right */}
                <FloatingCard
                    icon={FileText}
                    label="Documents"
                    color="bg-[#2D2438] shadow-black/40"
                    rotation="rotate-[-15deg]"
                    className="bottom-[15%] right-[-5%] z-30 scale-110"
                    delay={1.7}
                />

                {/* Depth Elements (Subtle non-pill elements) */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-[15%] right-[0%] w-48 h-48 bg-blue-400/5 dark:bg-blue-400/5 border border-blue-500/10 rounded-full -z-10"
                />
            </div>
        </section>
    );
};
