"use client";

import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";

// Fade-in animation CSS
const fadeIn = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: none; }
  }
  .fade-in {
    animation: fadeIn 1.2s cubic-bezier(0.4,0,0.2,1) both;
  }
`;

export default function Home() {
  // Carousel setup
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    mode: "free-snap",
    drag: true,
  });

  // Autoplay logic for keen-slider v6+
  useEffect(() => {
    if (!instanceRef.current) return;
    let timeout: ReturnType<typeof setTimeout>;
    let mouseOver = false;
    const slider = instanceRef.current;
    function clearNextTimeout() {
      clearTimeout(timeout);
    }
    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, 3000);
    }
    slider.on("created", () => {
      if (!slider.container) return;
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
    return () => {
      clearTimeout(timeout);
      if (!slider.container) return;
      slider.container.removeEventListener("mouseover", clearNextTimeout);
      slider.container.removeEventListener("mouseout", nextTimeout);
    };
  }, [instanceRef]);

  // Manual navigation handlers
  const prev = () => instanceRef.current?.prev();
  const next = () => instanceRef.current?.next();

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <style>{fadeIn}</style>
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-[#353535] fade-in">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Masjid Hero"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-[#e3d7a3] drop-shadow-lg font-[Montserrat,Arial,sans-serif] uppercase text-center px-4 mb-10 fade-in">
            Your Local Masjid.
          </h1>
          <p className="text-3xl md:text-4xl text-white mt-4 max-w-3xl text-center drop-shadow font-sans fade-in">
            Welcome to SCMA. A modern masjid website template for the UK, built for the community.
          </p>
        </div>
      </section>
      {/* Prayer Times Section (compact, always visible after hero) */}
      <section className="w-full flex flex-col items-center justify-center py-12 bg-[#e3d7a3] fade-in">
        <span className="block text-4xl font-extrabold mb-4 text-[#232323] fade-in">Today's Prayer Times</span>
        <div className="text-2xl opacity-80 text-[#232323] fade-in">(Coming soon)</div>
      </section>
      {/* Exciting News Section with Carousel (3D card) */}
      <section className="min-h-[120vh] w-full flex flex-col items-center justify-center snap-start bg-transparent fade-in">
        <div className="w-full max-w-5xl mx-auto rounded-3xl border-2 border-[#e3d7a3] shadow-2xl bg-[#353535] bg-opacity-95 p-16 flex flex-col items-center fade-in">
          <h2 className="text-5xl md:text-7xl font-extrabold font-[Montserrat,Arial,sans-serif] text-[#e3d7a3] mb-12 fade-in">Exciting News</h2>
          <div className="relative w-full fade-in">
            <div ref={sliderRef} className="keen-slider">
              {/* Placeholder poster blocks */}
              <div className="keen-slider__slide flex items-center justify-center bg-gradient-to-br from-[#e3d7a3] to-[#bfa76a] h-[500px] md:h-[600px] text-[#232323] text-5xl font-bold">
                Poster 1
              </div>
              <div className="keen-slider__slide flex items-center justify-center bg-gradient-to-br from-[#353535] to-[#232323] h-[500px] md:h-[600px] text-[#e3d7a3] text-5xl font-bold">
                Poster 2
              </div>
              <div className="keen-slider__slide flex items-center justify-center bg-gradient-to-br from-[#1de9b6] to-[#353535] h-[500px] md:h-[600px] text-[#232323] text-5xl font-bold">
                Poster 3
              </div>
              <div className="keen-slider__slide flex items-center justify-center bg-gradient-to-br from-[#e3d7a3] to-[#1de9b6] h-[500px] md:h-[600px] text-[#232323] text-5xl font-bold">
                Poster 4
              </div>
            </div>
            {/* Carousel arrows */}
            <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#353535] text-[#e3d7a3] rounded-full w-16 h-16 flex items-center justify-center hover:bg-[#232323] transition z-10 text-3xl fade-in">
              &#8592;
            </button>
            <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#353535] text-[#e3d7a3] rounded-full w-16 h-16 flex items-center justify-center hover:bg-[#232323] transition z-10 text-3xl fade-in">
              &#8594;
            </button>
          </div>
        </div>
      </section>
      {/* Events Section (3D card) */}
      <section className="min-h-[120vh] w-full flex flex-col items-center justify-center snap-start bg-transparent fade-in">
        <div className="w-full max-w-5xl mx-auto rounded-3xl border-2 border-[#e3d7a3] shadow-2xl bg-[#e3d7a3] bg-opacity-95 p-16 flex flex-col items-center fade-in">
          <h2 className="text-4xl md:text-6xl font-bold font-[Montserrat,Arial,sans-serif] text-[#232323] mb-12 fade-in">Events</h2>
          <div className="text-[#232323]/80 text-3xl fade-in">(Content coming soon)</div>
        </div>
      </section>
      {/* School Visits Section (3D card) */}
      <section className="min-h-[120vh] w-full flex flex-col items-center justify-center snap-start bg-transparent fade-in">
        <div className="w-full max-w-5xl mx-auto rounded-3xl border-2 border-[#353535] shadow-2xl bg-[#353535] bg-opacity-95 p-16 flex flex-col items-center fade-in">
          <h2 className="text-4xl md:text-6xl font-bold font-[Montserrat,Arial,sans-serif] text-[#e3d7a3] mb-12 fade-in">School Visits</h2>
          <div className="text-[#e3d7a3]/80 text-3xl fade-in">(Content coming soon)</div>
        </div>
      </section>
      {/* Donation Security Reassurance Section (3D card) */}
      <section className="min-h-[120vh] w-full flex flex-col items-center justify-center snap-start bg-transparent fade-in">
        <div className="w-full max-w-5xl mx-auto rounded-3xl border-2 border-[#e3d7a3] shadow-2xl bg-[#e3d7a3] bg-opacity-95 p-16 flex flex-col items-center fade-in">
          <h2 className="text-4xl md:text-6xl font-bold font-[Montserrat,Arial,sans-serif] text-[#232323] mb-12 fade-in">Donation Security Reassurance</h2>
          <div className="text-[#232323]/80 text-3xl fade-in">(Content coming soon)</div>
        </div>
      </section>
      {/* About Us & Location Section (3D card) */}
      <section className="min-h-[120vh] w-full flex flex-col items-center justify-center snap-start bg-transparent fade-in">
        <div className="w-full max-w-5xl mx-auto rounded-3xl border-2 border-[#353535] shadow-2xl bg-[#353535] bg-opacity-95 p-16 flex flex-col items-center fade-in">
          <h2 className="text-4xl md:text-6xl font-bold font-[Montserrat,Arial,sans-serif] text-[#e3d7a3] mb-12 fade-in">About Us & Location</h2>
          <div className="text-[#e3d7a3]/80 text-3xl fade-in">(Content coming soon)</div>
        </div>
      </section>
      {/* Volunteer With Us Section (3D card) */}
      <section className="min-h-[120vh] w-full flex flex-col items-center justify-center snap-start bg-transparent fade-in">
        <div className="w-full max-w-5xl mx-auto rounded-3xl border-2 border-[#e3d7a3] shadow-2xl bg-[#e3d7a3] bg-opacity-95 p-16 flex flex-col items-center fade-in">
          <h2 className="text-4xl md:text-6xl font-bold font-[Montserrat,Arial,sans-serif] text-[#232323] mb-12 fade-in">Volunteer With Us</h2>
          <div className="text-[#232323]/80 text-3xl fade-in">(Content coming soon)</div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="w-full bg-[#1a1a1a] text-[#e3d7a3] py-20 flex flex-col items-center snap-start fade-in">
        <div className="flex gap-12 mb-10">
          {/* Social media icons placeholders */}
          <span className="w-14 h-14 bg-[#353535] rounded-full flex items-center justify-center text-2xl">FB</span>
          <span className="w-14 h-14 bg-[#353535] rounded-full flex items-center justify-center text-2xl">TW</span>
          <span className="w-14 h-14 bg-[#353535] rounded-full flex items-center justify-center text-2xl">IG</span>
        </div>
        <div className="text-2xl opacity-80">&copy; {new Date().getFullYear()} Sutton Coldfield Masjid. All rights reserved.</div>
        <div className="text-xl opacity-60 mt-4">Registered Charity No. 12345678 | Designed with ❤️ for the community</div>
      </footer>
    </div>
  );
}
