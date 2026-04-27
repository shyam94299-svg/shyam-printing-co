const SectionBottomCurve = ({ className = "text-white" }) => {
  return (
    <div className={`pointer-events-none absolute bottom-0 left-0 w-full ${className}`}>
      <svg
        viewBox="0 0 1440 180"
        className="block h-14 w-full sm:h-20 lg:h-24"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,40 C260,170 480,180 720,140 C960,100 1180,20 1440,70 L1440,180 L0,180 Z"
        />
      </svg>
    </div>
  );
};

export default SectionBottomCurve;
