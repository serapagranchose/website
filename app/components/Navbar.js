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
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
            className="text-4xl hover:underline pointer-events-none pr-5 lg:pointer-events-auto"
            href="/about"
          >
            ABOUT
          </Link>
          <Link
            className="text-4xl hover:underline pointer-events-none lg:pointer-events-auto"
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
