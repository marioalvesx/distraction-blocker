"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw } from "lucide-react";

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval!);
          } else {
            setMinutes((minutes) => minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval!);
    }
    return () => clearInterval(interval!);
  }, [isActive, seconds, minutes]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: -600, right: 600, top: -200, bottom: 200 }}
      className="w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-lg text-white"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Pomodoro Timer</h2>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <div className="text-6xl font-bold text-center mb-6">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={toggleTimer}
          className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
        >
          {isActive ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button
          onClick={resetTimer}
          className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
        >
          <RotateCcw size={24} />
        </button>
      </div>
    </motion.div>
  );
};

export default PomodoroTimer;
