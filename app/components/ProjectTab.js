import Image from 'next/image';

export default function ProjectTab({
  index,
  name,
  status,
  isEmphasized,
  handleClick,
  handleMouseEnter,
  handleMouseLeave
}) {
  return (
    <div
      className={`group w-full items-center flex ${index == 0 ? "" : "pt-6"}`}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <Image
        className={`object-contain pb-2 ${isEmphasized ? "visible" : "invisible"}`}
        src="/arrow.png"
        alt="me"
        width={24}
        height={24}
      />
      <div className="flex pl-2">
        {status ?
          <h2 className={`text-2xl pr-2 ${(status == "finished" ? 'text-green' : 'text-blue')}`} onClick={() => handleClick(index)}>
            {"▮"}
          </h2>
          :
          null
        }
        <h2 className="text-2xl" onClick={() => handleClick(index)}>
          {index + ". " + name.toUpperCase()}
        </h2>
      </div>
    </div>
  )
}