import Searchbar from "./Searchbar"

const Hero = () => {
  return (
    <section id = "home" className='flex xl:flex-row flex-col justify-center min-h-screen w-full gap-10 m-auto'>
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pb-28'>
            <p className='text-xl font-montserrat text-blue'>Track Your Pc Component Prices</p>
            <h1 className='mt-10 font-palanquin text-8xl'>
                <span>Dont Get A Prebuilt <span>PC</span></span>
            </h1>
            <p className='mt-6 text-xl'>
                Powerful, self-serve product and growth analytics to help you look at 
                prices on your next upgrade, or to build your next pc
            </p>
            <Searchbar/>
        </div>
    </section>
  )
}

export default Hero