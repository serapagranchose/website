'use client'

import { useState } from 'react'

import ProjectTab from './ProjectTab';
import ProjectDescription from './ProjectDescription';
import ProjectThumbnail from './ProjectThumbnail';

export default function ProjectsSelector({
  projects
}) {
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
    <>
      <div className="pl-2 h-full w-1/3">
        <div className="pb-5 flex">
          <h2 className="bg-black text-white text-2xl pt-2 px-2 mr-2">PERSONAL</h2>
          <h2 className="bg-black text-white text-2xl pt-2 px-2 mr-2">PROFESSIONAL</h2>
        </div>
        <div className="scrollbar-hide scrollbar scrollbar-thumb-sky-700 scrollbar-track-transparent overflow-y-auto">
          {projects.map((project, index) => {
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
          })}
        </div>
      </div>
      <div className="relative w-2/3">
        <ProjectThumbnail project={projects[emphasized]}/>
        <ProjectDescription project={projects[emphasized]} />
      </div>
    </>
  );
}
