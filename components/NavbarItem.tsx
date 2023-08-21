import React from 'react'
import AccountMenu from './AccountMenu';

interface NavbarItemProps{
    label: string;
    accountMenu?: boolean
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, accountMenu }) => {
    return (
<div className="relative inline-block">
  <a
    className="group text-white cursor-pointer transition-colors duration-300"
    href="#"
  >
    {!label.includes('.')  ? (
      <span className={accountMenu && label!=='logout' ?"hover:text-gray-400" : label=='logout' ? 'hover:text-red-300' : ''}>
        {label}
        <span className={!accountMenu ? "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-red-600 bg-no-repeat transform origin-left scale-x-0 transition-all duration-500 ease-out group-hover:scale-x-100": ' '}></span>
      </span>
    ) : (
        label.includes('webp') ?
        <div className={!accountMenu ? "overflow-hidden rounded-lg   transform transition duration-700 ease-in-out" : ''}>
        <img className= {!accountMenu ? "h-10 object-cover hover:scale-125  transform transition duration-500 ease-in-out  " : 'h-10 rounded-lg'} alt="" src={label} />
      </div>
      :    <img className={!accountMenu ? "h-6 object-cover hover:scale-125  transform transition duration-500 ease-in-out " : 'h-6 rounded-lg'} alt="" src={label} />
    )}
  </a>
</div>

    );
  };
  
  
  
export default NavbarItem
