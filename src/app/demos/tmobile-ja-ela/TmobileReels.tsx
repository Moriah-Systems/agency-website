"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const reels = [
  { video: "/tmobile-ja-ela/videos/reel-1.mp4", fbUrl: "https://www.facebook.com/share/r/1CHckSxGnL/" },
  { video: "/tmobile-ja-ela/videos/reel-2.mp4", fbUrl: "https://www.facebook.com/share/r/17PMJE2vef/" },
  { video: "/tmobile-ja-ela/videos/reel-3.mp4", fbUrl: "https://www.facebook.com/share/r/18dXT6uuGU/" },
  { video: "/tmobile-ja-ela/videos/reel-4.mp4", fbUrl: "https://www.facebook.com/share/v/1BSNSojt52/" },
];

export default function TmobileReels() {
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
    const cardWidth =
      window.innerWidth < 640
        ? window.innerWidth * 0.44 + 12
        : window.innerWidth < 768
        ? 240
        : 320;
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
          className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
          style={{
            background: "rgba(255, 255, 255, 0.92)",
            border: "1px solid rgba(225, 29, 46, 0.18)",
            color: "#E11D2E",
            boxShadow: "0 8px 24px -8px rgba(0, 0, 0, 0.18)",
          }}
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
          style={{
            background: "rgba(255, 255, 255, 0.92)",
            border: "1px solid rgba(225, 29, 46, 0.18)",
            color: "#E11D2E",
            boxShadow: "0 8px 24px -8px rgba(0, 0, 0, 0.18)",
          }}
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {canScrollLeft && (
        <div
          className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 z-[5] pointer-events-none"
          style={{ background: "linear-gradient(to right, #FAFAFA, transparent)" }}
        />
      )}
      {canScrollRight && (
        <div
          className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 z-[5] pointer-events-none"
          style={{ background: "linear-gradient(to left, #FAFAFA, transparent)" }}
        />
      )}

      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>

        {reels.map((reel, i) => (
          <div key={reel.fbUrl} className="snap-center shrink-0">
            <div
              className="relative w-[44vw] h-[78vw] sm:w-[230px] sm:h-[409px] md:w-[310px] md:h-[551px] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              style={{
                border: "1px solid rgba(31, 41, 55, 0.06)",
                boxShadow: "0 16px 40px -16px rgba(225, 29, 46, 0.18)",
                background: "#1F2937",
              }}
            >
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
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
                className="absolute bottom-2.5 right-2.5 md:bottom-3 md:right-3 rounded-full p-2 md:p-2.5 transition-colors z-10 text-white"
                style={{ background: "#1877F2", boxShadow: "0 6px 16px -6px rgba(24, 119, 242, 0.55)" }}
                aria-label="Watch on Facebook"
                title="Watch on Facebook"
              >
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <div
                className="absolute top-2.5 left-2.5 md:top-3 md:left-3 backdrop-blur-md rounded-full px-2.5 py-1 md:px-3 md:py-1.5 flex items-center gap-1.5"
                style={{ background: "rgba(255, 255, 255, 0.92)", border: "1px solid rgba(225, 29, 46, 0.18)" }}
              >
                <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="#E11D2E" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
                <span className="text-[10px] md:text-xs font-semibold" style={{ color: "#E11D2E" }}>
                  Reel
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
