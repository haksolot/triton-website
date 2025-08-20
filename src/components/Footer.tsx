export default function Footer() {
  return (
    <footer className="w-full bg-[#404040] px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Partie gauche (logo éventuel + copyright) */}
        <div className="text-center md:text-left">
          <h1 className="text-white text-sm md:text-base">
            © 2025 Triton Europe SAS — All rights reserved
          </h1>
          <p className="text-white text-xs mt-1">
            Designed with care by <a href="https://github.com/haksolot">Haksolot</a> — Powered by green tech
          </p>
        </div>

        {/* Partie droite (infos de contact) */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-white text-sm">
          <span>📍 France, Nay</span>
          <span>📧 contact@tritondrilling.com</span>
        </div>
      </div>
    </footer>
  );
}
