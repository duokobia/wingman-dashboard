import logo from '../assets/wingman-logo.svg'; 
import { RxDividerHorizontal } from "react-icons/rx";
import { PiChatTeardropFill  } from "react-icons/pi";
import { GoHomeFill } from "react-icons/go";
import { IoMdPeople, IoIosSettings } from "react-icons/io";


const SideNav = () => {
  return (
    <aside className='min-h-screen max-w-[60px] bg-wingman-green text-sky-200'>
      <div className='flex items-center justify-center mt-8'>
      <img src={logo} alt="Wingman Logo" />
      </div>
      <span className="flex items-center justify-center text-2xl text-wingman-gray my-4">
      <RxDividerHorizontal />
      </span>
      <ul className='flex flex-col gap-12 px-3 py-8'>
        <li className='flex items-center bg-white px-2 py-2 rounded-lg font-medium text-lg text-wingman-black'><GoHomeFill /></li>
        <li className='flex items-center justify-center text-2xl hover:bg-white hover:px-2 hover:py-2 hover:rounded-lg hover:font-medium hover:text-lg hover:text-wingman-black'><PiChatTeardropFill /></li>
        <li className='flex items-center justify-center text-2xl  hover:bg-white hover:px-2 hover:py-2 hover:rounded-lg hover:font-medium hover:text-lg hover:text-wingman-black'><IoMdPeople /></li>
        <li className='flex items-center justify-center text-2xl mt-80 hover:bg-white hover:mt-80 hover:px-2 hover:py-2 hover:rounded-lg hover:font-medium hover:text-lg hover:text-wingman-black'><IoIosSettings />
        </li>
      </ul>
    </aside>
  )
}

export default SideNav