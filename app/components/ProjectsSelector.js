'use client'

import { useState } from 'react'

import ProjectTab from './ProjectTab';
import ProjectDescription from './ProjectDescription';
import ProjectThumbnail from './ProjectThumbnail';

export default function ProjectsSelector({
  projects,
  works
}) {
  const [category, setCategory] = useState("professional")
  const [project, setProject] = useState(null)
  const [hovered, setHovered] = useState(null)

  function handleClick(index) {
    project == index ? setProject(null) : setProject(index)
  }
  function handleMouseEnter(index) {
    setHovered(index)
  }
  function handleMouseLeave() {
    setHovered(null)
  }
  const emphasized = hovered == 0 || hovered ? hovered : project

  return (
    <div className='p-2 pb-12 lg:pb-2 w-full flex-grow overflow-y-auto grid grid-cols-3 grid-rows-3'>
      <div className="col-span-3 md:col-span-1 row-span-3 flex flex-col order-3 md:order-1">
        <div className="pb-5 flex">
          <h2 className="bg-black text-white text-2xl pt-2 px-2 mr-2" onClick={() => setCategory("professional")}>PROFESSIONAL ({works.length})</h2>
          <h2 className="bg-black text-white text-2xl pt-2 px-2 mr-2" onClick={() => setCategory("personal")}>PERSONAL ({projects.length})</h2>
        </div>
        <div className="flex-grow overflow-y-auto scrollbar-hide scrollbar scrollbar-thumb-sky-700 scrollbar-track-transparent">
          {category === "professional" ?
            works.map((work, index) => {
              return (
                <ProjectTab
                  key={index}
                  index={index}
                  name={work.name}
                  isEmphasized={emphasized == index}
                  handleClick={handleClick}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                />
              )
            })
            :
            projects.map((project, index) => {
              return (
                <ProjectTab
                  key={index}
                  index={index}
                  name={project.name}
                  status={project.status}
                  isEmphasized={emphasized == index}
                  handleClick={handleClick}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                />
              )
            })

          }
        </div>
      </div>
      <div className="col-span-3 md:col-span-2 row-span-1 md:row-span-2 order-1 md:order-2">
        {works[emphasized] || projects[emphasized] ?
          <ProjectThumbnail project={category === "professional" ? works[emphasized] : projects[emphasized]} />
          :
          <></>
        }
      </div>
      <div className="col-span-3 lg:col-span-2 xl:col-span-1 pb-12 order-2 md:order-3 lg:pb-0 lg:col-start-2 lg:place-self-end xl:col-start-3">
        <ProjectDescription project={category === "professional" ? works[emphasized] : projects[emphasized]} />
      </div>
    </div>
  );
}
