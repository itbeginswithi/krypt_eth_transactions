import {useState} from 'react';
import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

import logo from '../images/logo.png';

const NavbarItem = ({title, classProps}) => {
  return(
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4" >
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="log" className="w-32 cursor-pointer"/>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {
          ["Market", "Exchange", "Tutorials", "Wallets"].map((item, i) => (
            <NavbarItem title={item} key={item + i}/>
          ))
        }

        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] transition duration-150 ease-in-out">
          Login
        </li>
      </ul>

      {
        toggleMenu 
        ? <AiOutlineClose size={28} className="md:hidden text-white cursor-pointer" onClick={() => setToggleMenu(false)}/>
        : <HiMenuAlt4 size={28} className="md:hidden text-white cursor-pointer" onClick={() => setToggleMenu(true)}/> 
      }
      {
        toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in md:hidden">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)}/>
              {
                ["Market", "Exchange", "Tutorials", "Wallets"].map((item, i) => (
                  <NavbarItem title={item} key={item + i} classProps="my-2 text-lg"/>
                ))
              }
            </li>
          </ul>
        )
      }
    </nav>
  )
}

export default Navbar