import { useRef, useEffect, useState } from "react";
import { useSprings, animated } from "@react-spring/web";

const HomeTitle = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words", // 'words' or 'letters'
  direction = "top", // 'top' or 'bottom'
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = "easeOutCubic",
  onAnimationComplete,
}) => {
  const elements = text.split(" "); // Split by words
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  // Default animations based on direction
  const defaultFrom =
    direction === "top"
      ? { filter: "blur(10px)", opacity: 0, transform: "translate3d(0,-50px,0)" }
      : { filter: "blur(10px)", opacity: 0, transform: "translate3d(0,50px,0)" };

  const defaultTo = [
    { filter: "blur(5px)", opacity: 0.5, transform: "translate3d(0,5px,0)" },
    { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next) => {
            for (const step of (animationTo || defaultTo)) {
              await next(step);
            }
            animatedCount.current += 1;
            if (animatedCount.current === elements.length && onAnimationComplete) {
              onAnimationComplete();
            }
          }
        : animationFrom || defaultFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  return (
    <h1 ref={ref} className={`text-4xl md:text-6xl font-bold ${className} flex flex-wrap lg-mx:text-5xl bs-mx:text-4xl md-mx:text-3xl sm-mx:text-2xl  xs-mx:text-lg xs-mx:`}>
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={props}
          className={`inline-block transition-transform will-change-[transform,filter,opacity] ${
            elements[index] === "Digital" || elements[index] === "Success"
              ? "bg-gradient-to-r from-[#a377d2] to-[#c2a2e3] bg-clip-text text-transparent"
              : ""
          }`}
        >
          {elements[index]}{" "}
        </animated.span>
      ))}
    </h1>
  );
};

export default HomeTitle;
