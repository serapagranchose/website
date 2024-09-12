'use client'
import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react'

export default function RandomShitSelector({
  configs
}) {
  const categories = ["configs", "mixtapes"]
  const [index, setIndex] = useState(0)

  function goesThrough(i) {
    if ((index + i) > categories.length - 1)
      setIndex(0)
    else if ((index + i) < 0)
      setIndex(categories.length - 1)
    else
      setIndex(index + i)
  }

  function renderSwitch() {
    switch(categories[index]) {
      case 'mixtapes':
        return <div className="flex">
        <Link
          className="border mr-2"
          href={"https://open.spotify.com/playlist/0QKaOm4OT8xRteltjg0W43?si=2f2ded2868134c34"}
          target="_blank"
          aria-disabled={"https://open.spotify.com/playlist/0QKaOm4OT8xRteltjg0W43?si=2f2ded2868134c34"}
        >
          <Image
            src="/thumbnails/summer_mixtape.png"
            alt="me"
            width={256}
            height={256}
          />
        </Link>
      </div>;
      case 'configs':
        return <div className="flex justify-between">
        {configs?.map((config, index) => {
          return (
            <div key={index} className="truncate">
              <p className="truncate">NAME: {config?.name.toUpperCase()}<br /></p>
              <p className="truncate">TYPE: {config?.type.toUpperCase()}<br /></p>
              <p className="truncate">OS: {config?.OS.toUpperCase()}<br /></p>
              <p className="truncate">DISK: {config?.Disk.toUpperCase()}<br /></p>
              <p className="truncate">MEM: {config?.Memory.toUpperCase()}<br /></p>
              <p className="truncate">CPU: {config?.CPU.toUpperCase()}<br /></p>
              <p className="truncate">GPU: {config?.GPU.toUpperCase()}<br /></p>
            </div>
          )
        })}
      </div>;
    }
  }

  return (
    <div className="my-2 p-2 border-4">
      <div className="flex">
        <Image
          className="object-contain scale-x-[-1] mr-2 pb-2"
          src="/arrow.png"
          alt="me"
          width={24}
          height={24}
          onClick={() => goesThrough(-1)}
        />
        <h2 className="text-2xl ">{categories[index]?.toUpperCase()}</h2>
        <Image
          className="object-contain ml-2 pb-2"
          src="/arrow.png"
          alt="me"
          width={24}
          height={24}
          onClick={() => goesThrough(+1)}
        />
      </div>
      {renderSwitch()}
    </div>
  );
}
