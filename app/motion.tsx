"use client";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { remainingHold } from "../lib/motion";
function subscribe(callback: () => void) {
  const q = window.matchMedia("(prefers-reduced-motion: reduce)");
  q.addEventListener("change", callback);
  return () => q.removeEventListener("change", callback);
}
export function useReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}
export function RevealSequence({
  children,
  texts,
  instant,
  onComplete,
  variant = "normal",
}: {
  children: ReactNode[];
  texts: string[];
  instant: boolean;
  onComplete: () => void;
  variant?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(1);
  const lastShown = useRef(0);
  const reduced = useReducedMotion();
  const all = instant || reduced;
  useEffect(() => {
    if (!lastShown.current) lastShown.current = performance.now();
  }, []);
  useEffect(() => {
    if (all || count >= children.length) onComplete();
  }, [all, count, children.length, onComplete]);
  useEffect(() => {
    if (all || count >= children.length) return;
    const node = root.current?.children[count];
    if (!node) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const show = () => {
      timer = setTimeout(
        () => {
          lastShown.current = performance.now();
          setCount((c) => c + 1);
        },
        remainingHold(
          lastShown.current,
          performance.now(),
          texts[count - 1],
          count === children.length - 1,
        ),
      );
    };
    if (!("IntersectionObserver" in window)) {
      show();
      return () => clearTimeout(timer);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          if (!timer) show();
        } else {
          clearTimeout(timer);
          timer = undefined;
        }
      },
      { threshold: 0, rootMargin: "0px 0px -4% 0px" },
    );
    observer.observe(node);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [all, count, children.length, texts]);
  return (
    <div
      ref={root}
      className={`sequence ${variant}`}
      style={{ display: "block" }}
    >
      {children.map((child, i) => (
        <div
          className={`beat ${i === 0 ? "first-beat" : ""}`}
          data-visible={all || i < count}
          aria-hidden={!all && i >= count}
          key={i}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
export function NameMontage({
  names,
  instant,
  onComplete,
}: {
  names: string[];
  instant: boolean;
  onComplete: () => void;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [index, setIndex] = useState(-1);
  const reduced = useReducedMotion();
  const all = instant || reduced;
  useEffect(() => {
    if (all) return;
    if (!("IntersectionObserver" in window)) {
      const timer = setTimeout(() => setInView(true), 0);
      return () => clearTimeout(timer);
    }
    const observer = new IntersectionObserver(
      (entries) =>
        setInView(
          entries.some((e) => e.isIntersecting && e.intersectionRatio >= 0.75),
        ),
      { threshold: [0, 0.75], rootMargin: "0px 0px -20% 0px" },
    );
    if (root.current) observer.observe(root.current);
    return () => observer.disconnect();
  }, [all]);
  useEffect(() => {
    if (all) {
      onComplete();
      return;
    }
    if (!inView) return;
    const timer = setTimeout(
      () => {
        if (index >= names.length - 1) onComplete();
        else setIndex((i) => i + 1);
      },
      index < 0 ? 0 : 1700,
    );
    return () => clearTimeout(timer);
  }, [all, index, inView, names.length, onComplete]);
  return (
    <div ref={root} className="montage panel" data-started={index >= 0}>
      <span className="eyebrow">GROUP NAME HISTORY</span>
      {all ? (
        names.map((name) => <p key={name}>{name}</p>)
      ) : (
        <p className="montage-current" key={index}>
          {index < 0 ? "Scroll down for the name history" : names[index]}
        </p>
      )}
      <span className="dots" aria-hidden="true">
        {names.map((_, i) => (i <= index || all ? "■" : "□")).join(" ")}
      </span>
    </div>
  );
}
