"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-16 h-8 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="relative flex items-center w-16 h-8 p-1 rounded-full bg-slate-200 dark:bg-slate-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
                aria-label="Toggle Theme"
            >
                {/* Sliding Pill */}
                <motion.div
                    animate={{ x: isDark ? 32 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-slate-950 shadow-sm z-10"
                >
                    <AnimatePresence mode="wait">
                        {isDark ? (
                            <motion.div
                                key="moon"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Moon className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="sun"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Sun className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Background Icons */}
                <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none">
                    <Sun className={`w-3.5 h-3.5 transition-opacity duration-300 ${isDark ? 'opacity-40 text-slate-500' : 'opacity-0'}`} />
                    <Moon className={`w-3.5 h-3.5 transition-opacity duration-300 ${!isDark ? 'opacity-40 text-slate-400' : 'opacity-0'}`} />
                </div>
            </button>
        </div>
    );
};
