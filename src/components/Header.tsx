import { PiChartPieSliceFill, PiChatTeardropTextFill  } from "react-icons/pi";
import { MdLabel } from "react-icons/md";

const Header = () => {
    return (
        <header className=" border-gray-300 border-b-[1.52px] p-4 h-[94px]">
            <nav>
              <ul className='flex gap-6 pl-3'>
                <li className='flex items-center gap-3 bg-wingman-teal px-3 py-3 rounded-full font-medium text-lg text-wingman-black'><PiChartPieSliceFill />Summary</li>
                <li className='flex items-center gap-3 font-medium text-lg text-wingman-lightgray hover:bg-wingman-teal hover:rounded-full hover:font-medium hover:text-wingman-black hover:px-3 hover:py-3'><span className="transform rotate-[-135deg]"><MdLabel /></span>Sales</li>
                <li className='flex items-center font-medium gap-3 text-lg text-wingman-lightgray  hover:bg-wingman-teal hover:rounded-full hover:font-medium hover:text-wingman-black hover:px-3 hover:py-3'><PiChatTeardropTextFill />Chats</li>
              </ul>
            </nav>
        </header>
    );
};

export default Header;
