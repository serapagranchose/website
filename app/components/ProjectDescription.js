import Image from 'next/image';
import Link from 'next/link'

export default function ProjectDescription({
  project
}) {
  return (
    <>
      <div className="absolute bottom-2 right-2">
        <div className={`absolute w-full p-8 ${project ? "visible" : "invisible"}`}>
          <div className="flex justify-between">
            <Link
              className={`text-2xl ${project?.url ? 'hover:underline' : 'pointer-events-none'}`}
              href={project?.url ? project?.url : "#"}
              target="_blank"
              aria-disabled={project?.url}
              tabIndex={project?.url ? -1 : undefined}
            >
              {project?.name.toUpperCase()}
            </Link>
            <div className="grid place-items-end">
              {project?.status ?
                <div className="flex items-center">STATUS:
                  <h2 className="text-2xl flex">[</h2>
                    <h2 className={`text-2xl ${project?.status == "finished" ? 'text-green' : 'text-blue'} pl-1`}>{project?.status?.toUpperCase()}</h2>
                  <h2 className="text-2xl">]</h2>
                </div>
                :
                null
              }
              {project?.endDate ?
                project?.startDate + ' ' + project?.endDate 
              :
                project?.startDate
              }
            </div>
          </div>
          <p>{project?.description ?
            project?.description?.toUpperCase()
            :
            project?.summary?.toUpperCase()
          }</p>
        </div>
        <Image
          src="/border.png"
          alt="me"
          width={632}
          height={184}
        />
      </div>
    </>
  );
}
