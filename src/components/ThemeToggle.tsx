"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="
        fixed top-6 right-6 z-50
        relative flex items-center
        w-16 h-8 p-1 rounded-full
        bg-slate-200 dark:bg-slate-800
        transition-colors duration-150
      "
        >
            <motion.div
                animate={{ x: isDark ? 32 : 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="
          w-6 h-6 rounded-full
          bg-white dark:bg-slate-950
          shadow flex items-center justify-center
        "
            >
                {isDark ? (
                    <Sun className="w-3.5 h-3.5 text-indigo-400" />
                ) : (
                    <Moon className="w-3.5 h-3.5 text-amber-500" />
                )}
            </motion.div>
        </button>
    );
};