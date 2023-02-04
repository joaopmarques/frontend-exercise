import { useRef, useEffect } from "react";

export const DualColumn = () => {
  /**
   * Use an intersection observer to fade in the section when it's in view
   */

  const intersectorRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          if (sectionRef.current) {
            if (entry.isIntersecting) {
              sectionRef.current.classList.remove("opacity-0");
              sectionRef.current.classList.add("opacity-100");
            } else {
              sectionRef.current.classList.remove("opacity-100");
              sectionRef.current.classList.add("opacity-0");
            }
          }
        },
        { threshold: 0.2 }
      );
    });

    if (intersectorRef.current) {
      observer.observe(intersectorRef.current);
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative opacity-0 transition-opacity">
      <div className="flex container mt-36 px-20 pb-20 gap-24">
        <div className="w-1/2 text-left text-lg font-semibold text-silver-100">
          Don’t reinvent the wheel every time you build a new app.
        </div>
        <div className="w-1/2 text-left text-sm text-silver-200">
          Instead, focus on what makes your app unique. We did the heavy lifting
          for you already. Just plug into our pre-made feature-suite and
          kickstart your project.
        </div>
      </div>
      <span
        ref={intersectorRef}
        className="absolute bottom-32 pointer-events-none"
      />
    </section>
  );
};
