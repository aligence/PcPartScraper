import pc from '../assets/pc.png';
import { navLinks } from '../constants/index.js';
import { VscMenu } from "react-icons/vsc";

const Nav = () => {
  const openMenu = () => {
    const menu = document.getElementById('menu')
    
  }
  return (
    <header className='py-2 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container max-h-16'>
        <a href='/'>
          <img src={pc} className='pc' alt="logo" width={150} />
        </a>
        <ul className='flex justify-content items-center gap-24 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-xl text-slate-grey'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden px-2'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block mr-3'>
          <VscMenu size={30} onClick={openMenu}/>
        </div>
        
        {/*<ul className='hidden max-lg:block h-screen w-36 right-90 bg-gray-400' id = "menu">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className='font-montserrat leading-normal text-xl text-slate-grey'>
                  {item.label}
                </a>
              </li>
            ))}
            </ul>*/}
      </nav>
    </header>
  );
};

export default Nav;
