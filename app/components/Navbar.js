import Link from 'next/link'
import TypeWritter from "./TypeWritter";

export default function Navbar({
  isMainPage = false
}) {
  return (
    <div className={`${isMainPage ? "absolute" : "none"} z-10 w-full justify-between`}>
      <div className="items-center justify-between text-sm flex">
        <Link
          className="text-4xl bg-white p-2 pb-0"
          href="/"
        >
          SÉRAPHIN PERROT
        </Link>
        <div className="fixed bottom-0 left-0 flex w-full p-2 pb-0 pt-4 justify-evenly bg-white lg:pt-2 lg:static lg:h-auto lg:w-auto lg:items-end ">
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
      <div className="items-center justify-between text-sm flex">
        <TypeWritter />
      </div>
    </div>
  );
}
