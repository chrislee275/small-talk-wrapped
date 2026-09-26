"use client";
import { useState } from "react";
import type { DemoPerson } from "./content-types";
export function Portrait({ person }: { person: DemoPerson }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <span
      className="portrait"
      style={{ backgroundColor: person.color }}
      aria-hidden="true"
    >
      {!loaded && <span>{person.name.slice(0, 1)}</span>}
      {/* Public geometric placeholders, not portraits of real people. */}
      {!failed && (
        // These original SVGs are already under 300 bytes; no image service needed.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/avatars/${person.id}.svg`}
          alt=""
          width="96"
          height="96"
          loading="eager"
          style={{ opacity: loaded ? 1 : 0 }}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}
export function Arrow({ back = false }: { back?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={back ? "arrow back-arrow" : "arrow"}
      shapeRendering="crispEdges"
    >
      <path
        fill="currentColor"
        d="M10 3h4v10h4v-3h3v5h-3v3h-3v3H9v-3H6v-3H3v-5h3v3h4z"
      />
    </svg>
  );
}
export function Lock() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="lock"
      shapeRendering="crispEdges"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 2h12v3h3v10h3v15H4V15h3V5h3zm3 5v8h6V7z"
      />
      <path fill="#202638" d="M14 19h4v5h-1v3h-2v-3h-1z" />
    </svg>
  );
}
