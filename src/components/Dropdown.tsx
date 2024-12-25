import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";

const Dropdown: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('7 days');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleChange = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const options = ['7 days', '14 days', '21 days', '28 days'];

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full px-4 py-2 text-md font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-wingman-green"
                >
                    {selectedOption}
                    <RxCaretDown className="w-5 h-5 ml-2 -mr-1 text-gray-400" aria-hidden="true" />
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {options.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleChange(option)}
                                className="block w-full px-4 py-2 text-md text-left hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                                style={{
                                    backgroundColor: selectedOption === option ? '#115E56' : 'white',
                                    color: selectedOption === option ? 'white' : 'black',
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;