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
    gifRequest.onload = function() {
      if (gifRequest.status == 200) {
        setThumbnailUrl(`https://raw.githubusercontent.com/serapagranchose/${project?.name}/main/assets/images/thumbnail.gif`)
      } else {
        pngRequest.open("GET", `https://raw.githubusercontent.com/serapagranchose/${project?.name}/main/assets/images/thumbnail.png`, true);
        pngRequest.send();
        pngRequest.onload = function() {
          if (pngRequest.status == 200) {
            setThumbnailUrl(`https://raw.githubusercontent.com/serapagranchose/${project?.name}/main/assets/images/thumbnail.png`)
          } else {
            setThumbnailUrl("/no_thumbnail.gif")
          }
        }
      }
    }
  });

  return (
    <>
      {project?.name == "website" ?
        <iframe className="border border-2 lg:border-[8px] w-full h-full" src="/" title="Recursive Website"></iframe>
        :
        <Image
          src={thumbnailUrl}
          alt="thumbnail"
          width={2560}
          height={1440}
        />
      }
    </>
  );
}

