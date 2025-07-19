"use client";

import { useRef, useEffect } from "react";
import timetable from './july2025.json';

export default function PrayerTimesPage() {
  // Get today's date in the same format as the timetable (e.g. "01 Jul 2025")
  const today = new Date();
  const todayStr = today
    .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  const todayRowRef = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    if (todayRowRef.current) {
      todayRowRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-12">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow font-[Montserrat,Arial,sans-serif] uppercase text-center text-[#e3d7a3]">Prayer Times</h1>
      <div className="overflow-visible">
        <table className="min-w-full border-0 rounded-2xl overflow-hidden shadow-2xl bg-white">
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800">
              <th className="p-6 border-b-2 border-gray-200 text-xl font-bold">Date</th>
              <th className="p-6 border-b-2 border-gray-200 text-xl font-bold">Fajr</th>
              <th className="p-6 border-b-2 border-gray-200 text-xl font-bold">Sunrise</th>
              <th className="p-6 border-b-2 border-gray-200 text-xl font-bold">Dhuhr</th>
              <th className="p-6 border-b-2 border-gray-200 text-xl font-bold">Asr</th>
              <th className="p-6 border-b-2 border-gray-200 text-xl font-bold">Maghrib</th>
              <th className="p-6 border-b-2 border-gray-200 text-xl font-bold">Isha</th>
            </tr>
          </thead>
          <tbody>
            {timetable.data.map((row: any, idx: number) => {
              const isToday = row.date.readable === todayStr;
              return (
                <tr
                  key={row.date.readable}
                  ref={isToday ? todayRowRef : null}
                  className={
                    isToday
                      ? "bg-gradient-to-r from-[#00ffcc] to-[#00e6b8] text-gray-900 font-bold shadow-2xl transform scale-105 transition-all duration-500 hover:scale-110 hover:shadow-3xl hover:z-50 relative mx-4 my-2 rounded-xl border-2 border-[#00ffcc] hover:mx-8 hover:my-4"
                      : idx % 2 === 0
                        ? "bg-white text-gray-900 hover:bg-gray-50 transition-all duration-300 border-b border-gray-100"
                        : "bg-gray-50 text-gray-900 hover:bg-gray-100 transition-all duration-300 border-b border-gray-100"
                  }
                >
                  <td className="p-6 font-semibold text-xl">{row.date.readable}</td>
                  <td className="p-6 text-xl">{row.timings.Fajr.split(' ')[0]}</td>
                  <td className="p-6 text-xl">{row.timings.Sunrise.split(' ')[0]}</td>
                  <td className="p-6 text-xl">{row.timings.Dhuhr.split(' ')[0]}</td>
                  <td className="p-6 text-xl">{row.timings.Asr.split(' ')[0]}</td>
                  <td className="p-6 text-xl">{row.timings.Maghrib.split(' ')[0]}</td>
                  <td className="p-6 text-xl">{row.timings.Isha.split(' ')[0]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
} 