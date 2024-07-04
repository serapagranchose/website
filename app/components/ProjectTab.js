import Image from 'next/image';

export default function ProjectTab({
  index,
  name,
  isEmphasized,
  handleClick,
  handleMouseEnter,
  handleMouseLeave
}) {
  return (
    <div
      className="group w-full block items-center flex pb-6"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <Image
        className={`w-fit h-fit ${isEmphasized ? "visible" : "invisible"}`}
        src="/arrow.png"
        alt="me"
        width={32}
        height={32}
      />
      <h2 className="text-2xl pl-2" onClick={() => handleClick(index)}>{index + ". " + name.toUpperCase()}</h2>
    </div>
  )
}