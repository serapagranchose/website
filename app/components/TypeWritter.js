"use client";
import { ReactTyped } from "react-typed";

export default function TypeWritter() {
  return (
    <div className="flex bg-white p-2 pb-0">
      <ReactTyped
        strings={[
          "FULL STACK DEV",
          "PIXEL ARTIST",
          "PASSIONATE",
          "PERCUSSIONIST",
          "3D MAKER",
        ]}
        typeSpeed={35}
        backDelay={1700}
        backSpeed={50}
        showCursor={false}
        loop
      >
        <h2 className="text-4xl"></h2>
      </ReactTyped>
      <ReactTyped
        strings={["▮"]}
        typeSpeed={20}
        backSpeed={20}
        showCursor={false}
        loop
      >
        <h2 className="text-4xl"></h2>
      </ReactTyped>
    </div>
  )
}