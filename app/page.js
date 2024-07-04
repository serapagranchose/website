import Image from "next/image";
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap min-h-screen justify-between">
      <Navbar/>
      <Image
        className="object-cover h-screen w-full"
        src="/me.jpg"
        alt="me"
        width={500}
        height={500}
      />
    </main>
  );
}
