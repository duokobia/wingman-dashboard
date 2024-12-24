// src/components/Header.tsx
import React from 'react';
import { MessageCircleMore } from 'lucide-react';
// import myLogo from '../../public/assets/ChartPieSlice.svg'; 

const Header = () => {
    return (
        <header className=" border-gray-300 border-2 p-4">
            <nav>
              <ul className='flex gap-6'>
                <li>Summary</li>
                <li>Sales</li>
                <li className='flex'><MessageCircleMore />Chats</li>
              </ul>
            </nav>
        </header>
    );
};

export default Header;
