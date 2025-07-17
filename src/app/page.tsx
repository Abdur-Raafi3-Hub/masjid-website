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
      {/* Main content placeholder */}
      <main className="flex-1 flex flex-col items-center justify-center text-white text-center p-8">
        <div className="bg-white/10 rounded-lg p-6 mt-4 w-full max-w-md shadow-lg">
          <span className="block text-lg font-semibold mb-2">Today's Prayer Times</span>
          <div className="text-sm opacity-80">(Coming soon)</div>
        </div>
      </main>
    </>
  );
}
