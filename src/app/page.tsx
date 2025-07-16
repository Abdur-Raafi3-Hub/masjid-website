import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-white text-center p-8">
      <h1 className="text-4xl font-bold mb-4 drop-shadow">Sutton Coldfield Masjid</h1>
      <p className="text-lg max-w-xl mb-8 opacity-90">Welcome to SCMA. A modern masjid website template for the UK, built for the community.</p>
      {/* Placeholder for daily prayer times */}
      <div className="bg-white/10 rounded-lg p-6 mt-4 w-full max-w-md shadow-lg">
        <span className="block text-lg font-semibold mb-2">Today's Prayer Times</span>
        <div className="text-sm opacity-80">(Coming soon)</div>
      </div>
    </main>
  );
}
