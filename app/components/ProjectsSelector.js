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
    <div className='p-2 w-full flex-grow overflow-y-auto grid grid-cols-3 grid-rows-3'>
      <div className="row-span-3 flex flex-col">
        <div className="pb-5 flex">
          <h2 className="bg-black text-white text-2xl pt-2 px-2 mr-2" onClick={() => setCategory("professional")}>PROFESSIONAL</h2>
          <h2 className="bg-black text-white text-2xl pt-2 px-2 mr-2" onClick={() => setCategory("personal")}>PERSONAL</h2>
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
      <div className="row-span-2 col-span-2">
        {works[emphasized] || projects[emphasized] ?
          <ProjectThumbnail project={category === "professional" ? works[emphasized] : projects[emphasized]} />
          :
          <></>
        }
      </div>
      <div className="col-span-3 pb-12 lg:pb-0 lg:col-start-2 lg:col-span-2 lg:place-self-end xl:pb-0 xl:col-start-3 xl:col-span-1 xl:place-self-end">
        <ProjectDescription project={category === "professional" ? works[emphasized] : projects[emphasized]} />
      </div>
    </div>
  );
}
