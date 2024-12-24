// import React, { useState, useRef, useEffect } from 'react';

// interface Option {
//   value: string;
//   label: string;
// }

// interface DropdownProps {
//   options: Option[];
//   placeholder?: string;
//   onChange?: (value: string) => void;
// }

// const Dropdown = ({ options, placeholder = 'Select', onChange }: DropdownProps): JSX.Element => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const dropdownRef = useRef(null);

//   const handleToggle = (): void => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionClick = (option: Option): void => {
//     setSelectedOption(option);
//     setIsOpen(false);
//     if (onChange) {
//       onChange(option.value);
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent): void => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between"
//         onClick={handleToggle}
//         type="button"
//       >
//         <span>{selectedOption ? selectedOption.label : placeholder}</span>
//         <svg
//           className="w-5 h-5 ml-2"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M19 9l-7 7-7-7"
//           />
//         </svg>
//       </button>
//       {isOpen && (
//         <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white z-10">
//           <ul className="py-1">
//             {options.map((option) => (
//               <li
//                 key={option.value}
//                 className="cursor-pointer hover:bg-gray-100 px-4 py-2"
//                 onClick={() => handleOptionClick(option)}
//               >
//                 {option.label}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;

import React from 'react'

const Dropdown = () => {
  return (
    <div>Dropdown</div>
  )
}

export default Dropdown