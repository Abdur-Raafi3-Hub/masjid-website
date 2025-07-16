import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6b4f2a] to-[#3e2723] flex flex-col">
      {/* Top turquoise nav */}
      <nav className="bg-[#1de9b6] text-brown-900 px-4 py-3 shadow flex justify-between items-center">
        <div className="font-bold text-lg tracking-wide">SCMA</div>
        <ul className="flex gap-6 font-medium">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Prayer Times</a></li>
          <li><a href="#" className="hover:underline">Events</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
          <li><a href="#" className="hover:underline">Donate</a></li>
        </ul>
      </nav>
      {/* Main content placeholder */}
      <main className="flex-1 flex flex-col items-center justify-center text-white text-center p-8">
        <h1 className="text-4xl font-bold mb-4 drop-shadow">Sutton Coldfield Masjid</h1>
        <p className="text-lg max-w-xl mb-8 opacity-90">Welcome to SCMA. A modern masjid website template for the UK, built for the community.</p>
        {/* Placeholder for daily prayer times */}
        <div className="bg-white/10 rounded-lg p-6 mt-4 w-full max-w-md shadow-lg">
          <span className="block text-lg font-semibold mb-2">Today's Prayer Times</span>
          <div className="text-sm opacity-80">(Coming soon)</div>
        </div>
      </main>
    </div>
  );
}
