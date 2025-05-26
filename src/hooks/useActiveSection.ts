"use client";
import { useState, useEffect } from "react";

type OptionType = {
  root: null;
  rootMargin: string;
  threshold: number;
};

const useActiveSection = (sectionIds: string[], options: OptionType) => {
  const { root = null, rootMargin = "0px", threshold = 0.6 } = options;
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // When a section is at least the threshold visible, update the active section
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root, rootMargin, threshold },
    );

    // Observe each section by its id
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup on unmount
    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [sectionIds, root, rootMargin, threshold]);

  return activeSection;
};

export default useActiveSection;
