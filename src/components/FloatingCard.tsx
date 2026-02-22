"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FloatingCardProps {
    icon: LucideIcon;
    label: string;
    color?: string;
    rotation?: string;
    className?: string;
    delay?: number;
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
    icon: Icon,
    label,
    color = "bg-blue-600",
    rotation = "rotate-0",
    className = "",
    delay = 0,
}) => {
    // Parse rotation for animation ranges
    const baseRotation = rotation.includes("-")
        ? -Math.abs(parseInt(rotation.match(/-?\d+/)?.at(0) || "0"))
        : Math.abs(parseInt(rotation.match(/\d+/)?.at(0) || "0"));

    const floatAnimation = {
        y: [0, -12, 0],
        rotate: [baseRotation, baseRotation + 2, baseRotation]
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, rotate: baseRotation }}
            animate={{
                opacity: 1,
                y: floatAnimation.y,
                rotate: floatAnimation.rotate
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse" as const,
                delay: delay,
                ease: "easeInOut"
            }}
            whileHover={{
                y: -15,
                scale: 1.08,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            className={`absolute flex items-center gap-4 px-8 py-5 rounded-full shadow-2xl ${color} text-white cursor-pointer select-none ring-1 ring-white/10 ${className}`}
        >
            <Icon className="w-7 h-7" />
            <span className="text-2xl font-bold tracking-tight">{label}</span>
        </motion.div>
    );
};

interface PortalCardProps {
    name: string;
    role: string;
    message: string;
    ticket: string;
    time: string;
    rotation?: string;
    delay?: number;
}

export const PortalCard: React.FC<PortalCardProps> = ({
    name,
    role,
    message,
    ticket,
    time,
    rotation = "rotate-0",
    delay = 0,
}) => {
    const baseRotation = rotation.includes("-") ? -4 : 4;

    const floatAnimation = {
        y: [0, -10, 0],
        rotate: [baseRotation, baseRotation + 1, baseRotation]
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, rotate: baseRotation }}
            animate={{
                opacity: 1,
                y: floatAnimation.y,
                rotate: floatAnimation.rotate
            }}
            transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "mirror" as const,
                delay: delay,
                ease: "easeInOut"
            }}
            whileHover={{
                y: -20,
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="absolute flex items-start gap-3 p-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-white/50 dark:border-slate-800/50 text-slate-800 dark:text-slate-100 min-w-[380px] cursor-pointer ring-1 ring-black/5 dark:ring-white/5"
        >
            {/* Orange Accent Bar */}
            <div className="absolute left-0 top-1/4 bottom-1/4 w-2 bg-gradient-to-b from-orange-400 to-orange-600 rounded-r-full shadow-[0_0_15px_rgba(249,115,22,0.3)]" />

            <div className="flex gap-4 ml-2">
                <div className="relative group">
                    <div className="w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden flex items-center justify-center border-2 border-white dark:border-slate-700 shadow-xl">
                        {/* Avatar placeholder with more detail */}
                        <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-base font-black antialiased">
                            JD
                        </div>
                    </div>
                    {/* Green presence indicator */}
                    <div className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full shadow-md" />
                </div>
            </div>

            <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center justify-between">
                    <span className="font-extrabold text-[17px] tracking-tight">{name} - <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{role}</span></span>
                </div>
                <p className="text-[14px] text-slate-600 dark:text-slate-300 leading-snug line-clamp-2 font-medium">
                    {message}
                </p>
                <div className="flex items-center gap-4 mt-2">
                    <span className="text-[11px] font-black text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 px-2.5 py-1 rounded-lg border border-indigo-100 dark:border-indigo-800 shadow-sm">
                        {ticket}
                    </span>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500 font-bold">{time}</span>
                </div>
            </div>
        </motion.div>
    );
};
