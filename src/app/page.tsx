import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#353535] flex flex-col">
      {/* Top nav with logo and gold text */}
      <nav className="bg-[#353535] text-[#e3d7a3] px-4 py-3 shadow flex justify-between items-center border-b border-[#d6c48c]/30">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="SCMA Logo" width={60} height={60} className="h-12 w-auto" priority />
          <span className="font-bold text-xl tracking-wide uppercase">Sutton Coldfield Masjid</span>
        </div>
        <ul className="flex gap-8 font-semibold text-base items-center">
          <li><Link href="/" className="hover:text-white transition">Home</Link></li>
          <li><Link href="/prayer-times" className="hover:text-white transition">Prayer Times</Link></li>
          <li><Link href="/events" className="hover:text-white transition">Events</Link></li>
          <li><Link href="/about" className="hover:text-white transition">About</Link></li>
          <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          <li><Link href="/donate" className="bg-[#4a4a4a] px-4 py-2 rounded text-[#e3d7a3] border border-[#e3d7a3] hover:bg-[#e3d7a3] hover:text-[#353535] transition">Donate</Link></li>
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
