import { useEffect, useState } from "react";
import { menuItems } from "../components/layout/header";

export const useElementInScreen = () => {
  const [sectionVisible, setSectionVisible] = useState<string>("");

  const callback = function (entries: any, observer: any) {
    const [entry] = entries;
    const { target, isIntersecting } = entry;

    if (target && isIntersecting) {
      setSectionVisible(target.id);
    }
  };

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 1,
      root: null,
    };

    menuItems.map((item, idx) => {
      const target = document.querySelector(`section#${item.id}`);

      options.threshold = idx === 1 ? 0.2 : 0.9;

      const observer = new IntersectionObserver(callback, options);

      target && observer.observe(target);
    });
  }, []);

  return [sectionVisible];
};
