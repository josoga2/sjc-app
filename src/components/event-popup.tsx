"use client";

import { useState } from "react";

export default function EventPopup({ description }: { description: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button className="font-bold text-sm underline" onClick={() => setOpen(true)}>Read Paper/Abstract Here</button>

      {open && (
        <div className="absolute z-50 w-120 rounded-lg bg-sky-50 p-4 shadow flex flex-col gap-5">
          <p>{description}</p>
          <button
            className="border rounded-md px-3 py-2 text-sm text-red-600"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
