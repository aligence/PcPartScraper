import { FcSearch } from "react-icons/fc"
const Searchbar = () => {
  return (
    <div className='w-full pt-8 flex'>
        <FcSearch/>
        <input placeholder='Paste Link Here' className="w-full border-2 shadow-lg text-2xl"/>
    </div>
  )
}

export default Searchbar