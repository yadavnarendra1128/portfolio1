
const Tag = ({title}:{title:string}) => {
  return (
    <span className="rounded-xl px-2 py-1 text-gray-400 bg-darkTeal">{title.toLocaleLowerCase()}</span>
  )
}

export default Tag