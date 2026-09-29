"use client";
import { useState } from "react";
import type { DemoPerson } from "./content-types";
import { PERIOD, PEOPLE } from "./content.generated";
import { wrapCardText } from "../lib/card-text";
export function SaveCard({
  person,
  caption,
}: {
  person: DemoPerson;
  caption: string;
}) {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  async function save() {
    setBusy(true);
    setMessage("");
    try {
      await document.fonts.ready;
      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1920;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas unavailable");
      ctx.fillStyle = "#202638";
      ctx.fillRect(0, 0, 1080, 1920);
      ctx.fillStyle = "#f7f2e8";
      ctx.fillRect(64, 64, 952, 1792);
      ctx.fillStyle = person.color;
      ctx.fillRect(96, 96, 888, 18);
      ctx.textAlign = "center";
      const line = (text: string, y: number, size = 42, color = "#202638") => {
        ctx.fillStyle = color;
        ctx.font = `bold ${size}px sans-serif`;
        ctx.fillText(text, 540, y, 840);
      };
      line("BIW WRAPPED", 220, 58);
      line("FICTIONAL DEMO", 295, 28);
      line(person.name, 490, 100, person.color);
      line(PERIOD, 555, 32);
      line(person.achievement, 740, 60);
      line(person.role, 810, 36);
      line(person.messages.toLocaleString("en-US"), 1070, 142);
      line("sample messages", 1140, 38);
      line(`Most active year ${person.activeYear}`, 1290, 40);
      line(`Message rank ${person.rank} / ${PEOPLE.length}`, 1370, 40);
      ctx.font = "bold 38px sans-serif";
      wrapCardText(caption, (text) => ctx.measureText(text).width, 800).forEach(
        (row, i) => line(row, 1500 + i * 58, 38),
      );
      line("All characters, stories and numbers are invented.", 1760, 24);
      const blob = await new Promise<Blob>((resolve, reject) =>
        canvas.toBlob(
          (b) => (b ? resolve(b) : reject(new Error("PNG failed"))),
          "image/png",
        ),
      );
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `BIW-Demo-${person.name}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60000);
      setMessage(
        "PNG ready. Download requested; nothing is posted automatically.",
      );
    } catch {
      setMessage(
        "Couldn't create the image. Please try again. Nothing was uploaded.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <div>
      <button onClick={save} disabled={busy}>
        {busy ? "Creating PNG…" : "Story-worthy. Save it."}
      </button>
      <p className="small" role="status">
        {message || "Downloads a PNG for you to share in your Story."}
      </p>
    </div>
  );
}
