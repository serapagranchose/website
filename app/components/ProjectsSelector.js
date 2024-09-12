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
  const [selected, setSelected] = useState(null)
  const [hovered, setHovered] = useState(null)

  function handleClick(index) {
    selected == index ? setSelected(null) : setSelected(index)
  }
  function handleMouseEnter(index) {
    setHovered(index)
  }
  function handleMouseLeave() {
    setHovered(null)
  }
  const emphasized = hovered == 0 || hovered ? hovered : selected

  return (
    <div className='p-2 pb-12 lg:pb-2 w-full flex flex-col flex-grow overflow-y-auto md:grid md:grid-cols-3 md:grid-rows-3'>
      <div className="col-span-3 md:col-span-1 row-span-3 flex flex-col order-3 md:order-1">
        <div className="pb-5 flex">
          <h2 className="bg-black text-white truncate text-2xl pt-2 px-2 mr-2" onClick={() => {setCategory("professional"), setSelected(null)}}>PROFESSIONAL ({works.length})</h2>
          <h2 className="bg-black text-white truncate text-2xl pt-2 px-2 mr-2" onClick={() => {setCategory("personal"), setSelected(null)}}>PERSONAL ({projects.length})</h2>
        </div>
        <div className="flex-grow overflow-y-auto scrollbar-hide scrollbar scrollbar-thumb-sky-700 scrollbar-track-transparent pb-1">
          {category === "professional" ?
            works.map((work, index) => {
              return (
                <ProjectTab
                  key={index}
                  index={index}
                  name={work.name}
                  isHovered={hovered == index}
                  isSelected={selected == index}
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
                  isHovered={hovered == index}
                  isSelected={selected == index}
                  handleClick={handleClick}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                />
              )
            })

          }
        </div>
      </div>
      <div className="relative z-11 col-span-3 md:col-span-2 pb-2 lg:pb-0 row-span-1 md:row-span-2 order-1 md:order-2">
        {works[emphasized] || projects[emphasized] ?
          <ProjectThumbnail project={category === "professional" ? works[emphasized] : projects[emphasized]} />
          :
          <></>
        }
      </div>
      <div className="relative z-12 col-span-3 md:col-span-2 xl:col-span-1 pb-2 md:pb-6 lg:pb-0 lg:col-start-2 lg:place-self-end xl:col-start-3 order-2 md:order-3">
        <ProjectDescription project={category === "professional" ? works[emphasized] : projects[emphasized]} />
      </div>
    </div>
  );
}
