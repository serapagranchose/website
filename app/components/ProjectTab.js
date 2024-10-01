import Image from 'next/image';

export default function ProjectTab({
  index,
  name,
  status,
  isHovered,
  isSelected,
  handleClick,
  handleMouseEnter,
  handleMouseLeave
}) {
  return (
    <div className={`group w-full items-center flex ${index == 0 ? "" : "pt-6"}`}>
      <Image
        className={`object-contain ${isSelected ? "pl-2" : ""} pb-2 ${isHovered || isSelected ? "visible" : "invisible"}`}
        src="/arrow.png"
        alt="me"
        width={24}
        height={24}
      />
      <div className="flex pl-2"
        onClick={() => handleClick(index)}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave()}
      >
        {status ?
          <h2 className={`text-2xl pr-2 ${(status == "finished" ? 'text-green' : 'text-blue')}`} onClick={() => handleClick(index)}>
            {"▮"}
          </h2>
          :
          null
        }
        <h2 className="text-2xl">
          {index + ". " + name.toUpperCase()}
        </h2>
      </div>
    </div>
  )
}