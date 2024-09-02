import Link from 'next/link'
import TypeWritter from "./TypeWritter";

export default async function Navbar() {
  return (
    <div className="absolute w-full justify-between p-2">
      <div className="items-center justify-between text-sm lg:flex">
        <Link
          className="text-4xl"
          href="/"
        >
          SÉRAPHIN PERROT
        </Link>
        <div className="fixed bottom-0 flex w-full pt-4 justify-evenly bg-white lg:bg-transparent lg:static lg:h-auto lg:w-auto lg:items-end ">
          <Link
            className="text-4xl hover:underline pointer-events-auto pr-5"
            href="/about"
          >
            ABOUT
          </Link>
          <Link
            className="text-4xl hover:underline pointer-events-auto"
            href="/projects"
          >
            PROJECTS
          </Link>
        </div>
      </div>
      <div className="items-center justify-between text-sm lg:flex">
        <TypeWritter/>
      </div>
    </div>
  );
}
