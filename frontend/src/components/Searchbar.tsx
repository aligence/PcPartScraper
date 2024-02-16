import { FormEvent, useState } from "react"
import { FcSearch } from "react-icons/fc"

const isValidAmazonProductUrl = (url:string) =>{
  try {
    const parsedUrl = new URL (url)
    const hostname = parsedUrl.hostname


    if (hostname.includes("amazon.com") || hostname.includes("amazon.") || hostname.endsWith("amazon")){
      return true
    }
    
  } catch (error){
    return false
  }
 
    return false
  
}

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
     event.preventDefault()

     const isValidLink = isValidAmazonProductUrl(searchPrompt)
     alert(isValidLink ? "Valid Link" : "Invalid Link")

     try{
      setIsLoading(true)
     }catch(error){

     }finally{
      setIsLoading(false)
     }

  }
  return (
        <form className="flex flex-row gap-4 mt-12 w-full" onSubmit={handleSubmit}>
          <FcSearch size={40} className="-mx-4"/>
          <input id="search" value= {searchPrompt} onChange={(e) => setSearchPrompt(e.target.value)} 
          placeholder='Paste Link Here' className="w-full border-2 shadow-lg text-xl rounded-md searchbar-input"/>
          <button type ="submit" className="searchbar-btn bg-black text-white w-24 rounded-sm -mx-5" disabled={searchPrompt === ''}>
            {isLoading ? "Searching..." : "Search"}
          </button>
        </form>
  )
}

export default Searchbar