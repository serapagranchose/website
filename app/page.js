"use client";
import Image from "next/image";
import Navbar from './components/Navbar';
import useMousePosition from './components/Cursor';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const { x, y } = useMousePosition();
  const size = 128;
  const [analyticsData, setAnalyticsData] = useState({
    totalVisitors: '',
    uniqueVisitors: '',
    realTimeVisitors: '',
  });
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/analytics');
      const data = await response.json();
      setAnalyticsData(data);
    }

    fetchData();
  }, []);

  return (
    <main className="flex flex-row flex-wrap min-h-screen justify-between">
      <Navbar isMainPage={true} />
      <div className="absolute flex z-10 text-2xl bg-white p-2 pb-0 bottom-0 invisible lg:visible">
        <div className="pr-2">
          <p>VISITORS:</p>
          <p>UNIQ. VISITORS:</p>
          <p>ACTIVE VISITORS:</p>
        </div>
        <div>
          <p className="opacity-25">000000</p>
          <p className="opacity-25">000000</p>
          <p className="opacity-25">000000</p>
        </div>
        <div className="absolute right-0 pr-2 text-right">
          <p>{analyticsData.totalVisitors}</p>
          <p>{analyticsData.uniqueVisitors}</p>
          <p>{analyticsData.realTimeVisitors}</p>
        </div>
      </div>
      <Image
        className="object-[70%_top] lg:object-center object-cover w-full h-screen"
        src="/thumbnails/me_2_pixelated.png"
        alt="me"
        width={1920}
        height={1080}
      />
      <div className="absolute text-2xl text-white grid w-full h-screen place-content-center lg:invisible">
        <h2>CLICK ME</h2>
      </div>
      <motion.div
        className="mask-image-custom w-full h-screen"
        animate={{
          WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <Image
          className="object-[70%_top] lg:object-center object-cover w-full h-screen"
          src="/thumbnails/me_2.png"
          alt="me"
          width={1920}
          height={1080}
        />
      </motion.div>
    </main>
  );
}
