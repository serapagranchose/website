import Image from 'next/image';

export default function ProjectThumbnail({
  project
}) {
  return (
    <>
      {project ?
        <Image
          className="pr-3"
          src={project?.thumbnail_url ? project?.thumbnail_url : "/no_thumbnail.gif"}
          alt="thumbnail"
          width={2560}
          height={1440}
        />
        :
        <></>
      }
    </>
  );
}
