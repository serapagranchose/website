import Image from "next/image";
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap min-h-screen justify-between">
      <Navbar/>
      <Image
        className="object-cover h-screen w-full"
        src="/thumbnails/me_0_pixelated.png"
        alt="me"
        width={1920}
        height={1080}
      />
    </main>
  );
}
