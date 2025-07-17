import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden rounded-b-3xl shadow-lg mb-8">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Masjid Hero"
          fill
          className="object-cover object-center opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#e3d7a3] drop-shadow-lg font-[Montserrat,Arial,sans-serif] uppercase text-center px-4">
            Your Local Masjid.
          </h1>
          <p className="text-lg md:text-2xl text-white mt-4 max-w-2xl text-center drop-shadow font-sans">
            Welcome to SCMA. A modern masjid website template for the UK, built for the community.
          </p>
        </div>
      </section>
      {/* Prayer Times Section (compact, always visible after hero) */}
      <section className="w-full flex flex-col items-center justify-center py-12 bg-[#e3d7a3] fade-in">
        <span className="block text-4xl font-extrabold mb-4 text-[#232323] fade-in">Today's Prayer Times</span>
        <div className="text-2xl opacity-80 text-[#232323] fade-in">(Coming soon)</div>
      </section>
      {/* Exciting News Section (card) */}
      <section className="w-full flex flex-col items-center justify-center py-20 bg-transparent fade-in">
        <div className="w-full max-w-5xl mx-auto rounded-2xl border border-[#e3d7a3] shadow-2xl bg-[#353535] bg-opacity-95 p-12 flex flex-col items-center" style={{marginLeft: '2vw', marginRight: '2vw'}}>
          <h2 className="text-5xl font-extrabold text-[#e3d7a3] mb-8">Exciting News</h2>
          <div className="text-white/80 text-2xl">(Content coming soon)</div>
        </div>
      </section>
      {/* Events Section (card) */}
      <section className="w-full flex flex-col items-center justify-center py-20 bg-transparent fade-in">
        <div className="w-full max-w-5xl mx-auto rounded-2xl border border-[#e3d7a3] shadow-2xl bg-[#e3d7a3] bg-opacity-95 p-12 flex flex-col items-center" style={{marginLeft: '2vw', marginRight: '2vw'}}>
          <h2 className="text-4xl font-bold text-[#232323] mb-8">Events</h2>
          <div className="text-[#232323]/80 text-xl">(Content coming soon)</div>
        </div>
      </section>
      {/* School Visits Section (card) */}
      <section className="w-full flex flex-col items-center justify-center py-20 bg-transparent fade-in">
        <div className="w-full max-w-5xl mx-auto rounded-2xl border border-[#353535] shadow-2xl bg-[#353535] bg-opacity-95 p-12 flex flex-col items-center" style={{marginLeft: '2vw', marginRight: '2vw'}}>
          <h2 className="text-4xl font-bold text-[#e3d7a3] mb-8">School Visits</h2>
          <div className="text-white/80 text-xl">(Content coming soon)</div>
        </div>
      </section>
      {/* Donation Security Reassurance Section (card) */}
      <section className="w-full flex flex-col items-center justify-center py-20 bg-transparent fade-in">
        <div className="w-full max-w-5xl mx-auto rounded-2xl border border-[#e3d7a3] shadow-2xl bg-[#e3d7a3] bg-opacity-95 p-12 flex flex-col items-center" style={{marginLeft: '2vw', marginRight: '2vw'}}>
          <h2 className="text-4xl font-bold text-[#232323] mb-8">Donation Security Reassurance</h2>
          <div className="text-[#232323]/80 text-xl">(Content coming soon)</div>
        </div>
      </section>
      {/* About Us & Location Section (card) */}
      <section className="w-full flex flex-col items-center justify-center py-20 bg-transparent fade-in">
        <div className="w-full max-w-5xl mx-auto rounded-2xl border border-[#353535] shadow-2xl bg-[#353535] bg-opacity-95 p-12 flex flex-col items-center" style={{marginLeft: '2vw', marginRight: '2vw'}}>
          <h2 className="text-4xl font-bold text-[#e3d7a3] mb-8">About Us & Location</h2>
          <div className="text-white/80 text-xl">(Content coming soon)</div>
        </div>
      </section>
      {/* Volunteer With Us Section (card) */}
      <section className="w-full flex flex-col items-center justify-center py-20 bg-transparent fade-in">
        <div className="w-full max-w-5xl mx-auto rounded-2xl border border-[#e3d7a3] shadow-2xl bg-[#e3d7a3] bg-opacity-95 p-12 flex flex-col items-center" style={{marginLeft: '2vw', marginRight: '2vw'}}>
          <h2 className="text-4xl font-bold text-[#232323] mb-8">Volunteer With Us</h2>
          <div className="text-[#232323]/80 text-xl">(Content coming soon)</div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="w-full bg-[#1a1a1a] text-[#e3d7a3] py-12 flex flex-col items-center fade-in">
        <div className="flex gap-8 mb-6">
          {/* Social media icons placeholders */}
          <span className="w-10 h-10 bg-[#353535] rounded-full flex items-center justify-center text-lg">FB</span>
          <span className="w-10 h-10 bg-[#353535] rounded-full flex items-center justify-center text-lg">TW</span>
          <span className="w-10 h-10 bg-[#353535] rounded-full flex items-center justify-center text-lg">IG</span>
        </div>
        <div className="text-lg opacity-80">&copy; {new Date().getFullYear()} Sutton Coldfield Masjid. All rights reserved.</div>
        <div className="text-base opacity-60 mt-2">Registered Charity No. 12345678 | Designed with ❤️ for the community</div>
      </footer>
    </>
  );
}
