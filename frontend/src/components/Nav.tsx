import pc from '../assets/pc.png'
import {navLinks} from '../constants/index.js'
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <img src = {pc} alt = "logo" width ={150}/>
            <ul className='flex justify-end items-center gap-16 max-lg:hidden'>
                {navLinks.map((item)=>(
                    <li key = {item.label}>
                        <a href = {item.href} className='font-montserrat leading-normal text-lg text-slate-grey'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Nav