import { FcSearch } from "react-icons/fc"
const Searchbar = () => {
  const handleSubmit = () =>{
     
  }
  return (
        <form className="flex flex-row gap-4 mt-12 w-full" id="search" onSubmit={handleSubmit}>
          <FcSearch size={40} className="-mx-4"/>
          <input placeholder='Paste Link Here' className="w-full border-2 shadow-lg text-xl rounded-md searchbar-input"/>
          <button type ="submit" className="searchbar-btn bg-black text-white w-24 rounded-sm -mx-5">Search</button>
        </form>
  )
}

export default Searchbar