"use client";
import Image from "next/image";
import Navbar from './components/Navbar';
import useMousePosition from './components/Cursor';
import { motion } from 'framer-motion';

export default function Home() {
  const { x, y } = useMousePosition();
  const size = 128;

  return (
    <main className="flex flex-row flex-wrap min-h-screen justify-between">
      <Navbar isMainPage={true} />
      <Image
        className="object-cover w-full h-screen"
        src="/thumbnails/me_2_pixelated.png"
        alt="me"
        width={1920}
        height={1080}
      />
      <motion.div
        className="mask-image-custom w-full h-screen"
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
        <Image
          className="object-cover w-full h-screen"
          src="/thumbnails/me_2.png"
          alt="me"
          width={1920}
          height={1080}
        />
      </motion.div>
    </main>
  );
}
