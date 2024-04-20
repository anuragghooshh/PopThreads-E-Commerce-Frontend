import React, { useState } from 'react'
import dropDown from '../../assets/icons/down.svg';
import './cartDropdown.scss';

interface DropdownProps {
    options: string[];
    buttonText: string;
    onChange?: (option: string) => void;
}

const CartDropdown: React.FC<DropdownProps> = ({
    options,
    buttonText,
    onChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = (option: string) => {
        onChange?.(option);
        setSelectedOption(option);
        setIsOpen(false);
    };
    return (
        <div className='cartDropdown'>
            <button onClick={toggleDropdown}>
                <p>{buttonText}{selectedOption ? ' : ' + selectedOption : ''}</p>
                <img src={dropDown} alt="" />
            </button>
            {isOpen && (
                <ul className="dropdown-list">
                    {options.map((option) => (
                        <li key={option} onClick={() => handleClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default CartDropdown;
