import Image from 'next/image';
import Link from 'next/link'

export default function ProjectDescription({
  project
}) {
  return (
    <>
      <div className={`w-full p-5 grid grid-cols-2 ${project ? "visible" : "invisible"} bg-white border-4 border-black`}>
        <Link
          className={`text-2xl ${project?.url ? 'hover:underline' : 'pointer-events-none'}`}
          href={project?.url ? project?.url : "#"}
          target="_blank"
          aria-disabled={project?.url}
          tabIndex={project?.url ? -1 : undefined}
        >
          {project?.name.toUpperCase()}
        </Link>
        <div>
          {project?.status ?
            <div className="flex justify-end">
              STATUS:
              <h2 className="text-2xl flex">[</h2>
              <h2 className={`text-2xl ${project?.status == "finished" ? 'text-green' : 'text-blue'} pl-1`}>{project?.status?.toUpperCase()}</h2>
              <h2 className="text-2xl">]</h2>
            </div>
            :
            null
          }
          {project?.endDate ?
            <p className="text-right">{project?.startDate + ' ' + project?.endDate}</p>
            :
            <p className="text-right">{project?.startDate}</p>
          }
        </div>
        <p className="col-span-2">{project?.description ?
          project?.description?.toUpperCase()
          :
          project?.summary?.toUpperCase()
        }</p>
      </div>
      {/*
      <Image
        className="w-full"
        src="/border.png"
        alt="me"
        width={632}
        height={184}
      />
      */}
    </>
  );
}
