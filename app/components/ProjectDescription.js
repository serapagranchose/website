import Image from 'next/image';
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function ProjectDescription({
  project
}) {
  const [report, setReport] = useState(null);

  useEffect(() => {
    if (project?.name == "ChantierCarré")
      setReport("internship_chantiercarre_report.pdf")
    else if (project?.name == "S Com System")
      setReport("internship_scomsystem_report.pdf")
    else
      setReport(null)
  })

  return (
    <>
      <div className={`w-full h-full p-5 grid grid-cols-2 ${project ? "visible" : "invisible"} bg-white border-4 border-black`}>
        <Link
          className={`flex text-2xl pb-2 ${project?.url ? 'hover:underline' : 'pointer-events-none'}`}
          href={project?.url ? project?.url : "#"}
          target="_blank"
          aria-disabled={project?.url}
          tabIndex={project?.url ? -1 : undefined}
        >
          {project?.name.toUpperCase()}
          <div className="invisible md:visible">
            <Image
              className="object-contain ml-2"
              src="/arrow.png"
              alt="me"
              width={24}
              height={24}
            />
          </div>
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
        {report ?
          <Link className="col-span-2 pt-2 hover:underline" href={"/pro_report/" + report} target="_blank">🗎 {report.toUpperCase()}</Link>
          :
          <></>
        }
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
