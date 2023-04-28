import React, {useState} from 'react'
import Navbar from './Navbar';

export const Department = ({  onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Officers', ' Area Accidents', 'Area Ticket'];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    toggleMenu();
  };
  return (
    <>
    <Navbar/>
    <div className="dropdown" >
      <button className="dropdown-toggle" onClick={toggleMenu}>
        {selectedOption ? selectedOption : 'Select an option'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  )
}
