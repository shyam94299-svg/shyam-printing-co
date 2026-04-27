import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ANIMATION_MAP = {
  "fade-in-up": "animate-fade-in-up",
  "fade-in": "animate-fade-in",
  "slide-in-left": "animate-slide-in-left",
  "slide-in-right": "animate-slide-in-right",
};

const AnimatedSection = ({ children, className = "", animation = "fade-in-up", delay = "" }) => {
  const { ref, is_visible } = useScrollAnimation(0.1);
  const animation_class = ANIMATION_MAP[animation] || "animate-fade-in-up";

  return (
    <div
      ref={ref}
      className={`${className} ${
        is_visible ? `${animation_class} ${delay}` : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
