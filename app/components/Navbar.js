import Link from 'next/link'
import TypeWritter from "./TypeWritter";

export default function Navbar({
  isMainPage = false
}) {
  return (
    <div className={`${isMainPage ? "absolute" : "none"} z-10 w-full justify-between p-2 pb-0`}>
      <div className="items-center justify-between text-sm lg:flex">
        <Link
          className="text-4xl"
          href="/"
        >
          SÉRAPHIN PERROT
        </Link>
        <div className="fixed bottom-0 flex w-full pt-4 justify-evenly bg-white lg:bg-opacity-0 lg:pt-0 lg:static lg:h-auto lg:w-auto lg:items-end ">
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
