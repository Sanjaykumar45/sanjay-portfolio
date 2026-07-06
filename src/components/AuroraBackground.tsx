export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* halftone dot texture */}
      <div className="halftone absolute inset-0 opacity-70" />

      {/* soft vintage color washes */}
      <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-brand-glow/10 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-brand-accent/10 blur-3xl sm:h-80 sm:w-80" />

      {/* paper vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, transparent 60%, color-mix(in oklab, var(--ink) 6%, transparent) 100%)",
        }}
      />
    </div>
  );
}
