'use client'

import Image from 'next/image';
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
    console.log("emphasized: " + emphasized)
  }
  function handleMouseEnter(index) {
    console.log("handleMouseEnter", index)
    setHovered(index)
  }
  function handleMouseLeave() {
    setHovered(null)
  }
  const emphasized = hovered == 0 || hovered ? hovered : selected

  return (
    <>
      <div className="pl-2 h-full w-1/3 scrollbar-hide scrollbar scrollbar-thumb-sky-700 scrollbar-track-transparent overflow-y-auto">
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
      <div className="relative w-2/3">
        <ProjectThumbnail />
        <ProjectDescription project={projects[emphasized]} />
      </div>
    </>
  );
}
