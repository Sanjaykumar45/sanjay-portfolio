import { useEffect, useState } from "react";
import rocket from "@/assets/Rocket.png";
import { profile } from "@/lib/portfolio";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    "Hi Sanjay,\n\nI came across your portfolio and was impressed by your work. I'd like to connect with you to discuss a potential project. Please let me know when you're available.\n\nThank you!"
  )}`;

  return (
    <>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-5 right-[5.5rem] z-50 grid h-12 w-12 place-items-center transition-transform hover:-translate-y-1 hover:scale-110 sm:bottom-6 sm:right-24 sm:h-14 sm:w-14"
        >
          <img
            src={rocket}
            alt="Back to top"
            width={56}
            height={56}
            className="h-full w-full object-contain drop-shadow"
          />
        </button>
      )}

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="animate-pulse-ring fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border-[3px] border-ink text-white shadow-lg transition-transform hover:scale-110 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" aria-hidden="true">
          <path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.13 6.74 3.05 9.38L1.05 31.5l6.31-2.02A15.9 15.9 0 0 0 16.004 32C24.83 32 32 24.826 32 16S24.83 0 16.004 0zm9.32 22.598c-.387 1.092-1.922 1.998-3.146 2.262-.838.178-1.932.32-5.616-1.207-4.71-1.953-7.742-6.74-7.978-7.05-.226-.31-1.91-2.543-1.91-4.852s1.18-3.444 1.598-3.916c.387-.434.84-.543 1.12-.543.28 0 .56.003.804.015.258.013.604-.098.945.72.387.94 1.316 3.25 1.43 3.484.114.234.19.508.038.818-.152.31-.228.503-.456.773-.226.27-.475.602-.68.808-.226.226-.46.47-.198.92.262.45 1.166 1.924 2.504 3.116 1.72 1.534 3.17 2.01 3.62 2.236.45.226.713.19.976-.114.262-.31 1.124-1.31 1.424-1.76.3-.45.6-.375 1.012-.225.412.15 2.62 1.236 3.07 1.46.45.226.75.336.86.524.114.187.114 1.086-.273 2.178z" />
        </svg>
      </a>
    </>
  );
}
