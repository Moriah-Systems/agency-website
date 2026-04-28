"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const reels = [
  { video: "/smart-mobile-jaela/videos/reel-1.mp4", fbUrl: "https://www.facebook.com/share/r/1DcmVfEwTg/" },
  { video: "/smart-mobile-jaela/videos/reel-2.mp4", fbUrl: "https://www.facebook.com/share/r/1NbPDdPzKp/" },
  { video: "/smart-mobile-jaela/videos/reel-3.mp4", fbUrl: "https://www.facebook.com/share/r/1B3iyT5Ahx/" },
  { video: "/smart-mobile-jaela/videos/reel-4.mp4", fbUrl: "https://www.facebook.com/share/r/1Ao44v8XX8/" },
];

export default function SmartMobileReels() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = window.innerWidth < 640 ? window.innerWidth * 0.44 + 12 : window.innerWidth < 768 ? 230 : 310;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group">
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white hover:bg-[#D7172A] hover:text-white text-[#D7172A] border border-[#D7172A]/30 rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white hover:bg-[#D7172A] hover:text-white text-[#D7172A] border border-[#D7172A]/30 rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-[5] pointer-events-none" />
      )}
      {canScrollRight && (
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-[5] pointer-events-none" />
      )}

      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-3"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>

        {reels.map((reel, i) => (
          <div
            key={reel.fbUrl}
            className="snap-center shrink-0 first:ml-4 last:mr-4 sm:first:ml-0 sm:last:mr-0"
          >
            <div className="relative w-[44vw] h-[78vw] sm:w-[220px] sm:h-[391px] md:w-[300px] md:h-[534px] rounded-2xl overflow-hidden ring-1 ring-[#0F172A]/10 hover:ring-[#D7172A]/40 transition-all duration-300 hover:scale-[1.02] bg-[#0F172A] shadow-md hover:shadow-xl">
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                src={reel.video}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                preload="metadata"
              />

              <a
                href={reel.fbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 md:bottom-3 md:right-3 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-full p-1.5 md:p-2.5 shadow-lg transition-colors z-10"
                aria-label="Watch on Facebook"
                title="Watch on Facebook"
              >
                <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 md:px-3 md:py-1.5 flex items-center gap-1 md:gap-1.5 shadow-sm">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-[#D7172A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
                <span className="text-[#0F172A] text-[10px] md:text-xs font-semibold">Reel</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
