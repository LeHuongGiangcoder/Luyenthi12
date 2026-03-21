"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { EXAM_DATE } from "@/lib/exam-date";
const DAY = 1000 * 60 * 60 * 24;

export function DynamicDayCounter() {
  const [days, setDays] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const calculateDays = () => {
      const end = new Date(EXAM_DATE);
      const now = new Date();
      const distance = end.getTime() - now.getTime();
      const newDays = Math.max(0, Math.floor(distance / DAY));
      setDays(newDays);
    };

    calculateDays();
    intervalRef.current = setInterval(calculateDays, 1000 * 60); // Check every minute

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  if (days === null) return <span>-</span>; // Fallback

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={days}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className="inline-block"
      >
        {days}
      </motion.span>
    </AnimatePresence>
  );
}
