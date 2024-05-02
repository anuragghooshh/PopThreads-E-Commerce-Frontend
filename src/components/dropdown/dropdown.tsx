import React, { useState } from 'react';
import dropDown from '../../assets/icons/down.svg';
import './dropdown.scss';

interface DropdownProps {
  options: string[];
  buttonText: string;
  mode?:string;
  onChange?: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  buttonText,
  onChange,
  mode
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
    <div className={`dropdown ${mode}`}>
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
  );
};

export default Dropdown;