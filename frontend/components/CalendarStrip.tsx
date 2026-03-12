"use client";
import { useState } from "react";
import { format, addDays, startOfWeek, isSameDay } from "date-fns";

export default function CalendarStrip() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const startDate = startOfWeek(new Date());

  const days = Array.from({ length: 7 }, (_, i) => addDays(startDate, i));

  return (
    <div className="flex justify-between items-center bg-white/5 border border-white/5 p-4 rounded-2xl mb-8">
      {days.map((day) => {
        const isSelected = isSameDay(day, selectedDate);
        return (
          <button
            key={day.toString()}
            onClick={() => setSelectedDate(day)}
            className={`flex flex-col items-center p-3 rounded-xl transition-all min-w-[60px] ${
              isSelected ? "bg-[#8B0000] shadow-lg shadow-red-900/20 scale-105" : "hover:bg-white/5"
            }`}
          >
            <span className={`text-[10px] uppercase font-bold ${isSelected ? "text-white/70" : "text-gray-500"}`}>
              {format(day, "EEE")}
            </span>
            <span className="text-lg font-bold">{format(day, "d")}</span>
          </button>
        );
      })}
    </div>
  );
}