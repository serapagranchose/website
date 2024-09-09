import Image from 'next/image';
import { useState, useEffect } from 'react'

export default function ProjectThumbnail({
  project
}) {
  const [thumbnailUrl, setThumbnailUrl] = useState("/no_thumbnail.gif");
  useEffect(() => {
    var gifRequest = new XMLHttpRequest();
    var pngRequest = new XMLHttpRequest();

    gifRequest.open("GET", `https://raw.githubusercontent.com/serapagranchose/${project?.name}/main/assets/images/thumbnail.gif`, true);
    gifRequest.send();
    gifRequest.onload = function () {
      if (gifRequest.status == 200) {
        setThumbnailUrl(`https://raw.githubusercontent.com/serapagranchose/${project?.name}/main/assets/images/thumbnail.gif`)
      } else {
        pngRequest.open("GET", `https://raw.githubusercontent.com/serapagranchose/${project?.name}/main/assets/images/thumbnail.png`, true);
        pngRequest.send();
        pngRequest.onload = function () {
          if (pngRequest.status == 200) {
            setThumbnailUrl(`https://raw.githubusercontent.com/serapagranchose/${project?.name}/main/assets/images/thumbnail.png`)
          } else {
            if (project?.name == "KBRW")
              setThumbnailUrl("/thumbnails/kbrw.png")
            else if (project?.name == "Crèche A La Demande")
              setThumbnailUrl("/thumbnails/cald.png")
            else if (project?.name == "S Com System")
              setThumbnailUrl("/thumbnails/scom.png")
            else if (project?.name == "ChantierCarré")
              setThumbnailUrl("/thumbnails/cc.png")
            else
              setThumbnailUrl("/thumbnails/no_thumbnail.gif")
          }
        }
      }
    }
  });

  return (
    <>
      {project?.name == "website" ?
        <iframe className="w-full h-full object-cover border-4 " src="/" title="Recursive Website"></iframe>
        :
        <div className="relative bg-black flex w-full h-full">
          <Image
            className="w-full h-full object-cover opacity-15"
            src={thumbnailUrl}
            alt="thumbnail"
            width={2560}
            height={1440}
          />
          <Image
            className="absolute self-center 2xl:self-start inset-0"
            src={thumbnailUrl}
            alt="thumbnail"
            width={2560}
            height={1440}
          />
        </div>
      }
    </>
  );
}

