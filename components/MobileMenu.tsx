import React from 'react'
import NavbarItem from './NavbarItem';

interface MobileMenuProps {
    visible?: boolean;
}
const MobileMenu: React.FC<MobileMenuProps> = ({visible}) => {
    return visible ? (
        <div className='flex justify-center'>
        <div className='bg-black w-56 rounded absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex '>
          <div className='flex flex-col gap-4 mx-auto'>
            <NavbarItem label='Home'/>
            <NavbarItem label='New'/>
            <NavbarItem label='Series'/>
           
            <NavbarItem label='Movies'/>
            <NavbarItem label='My List'/>
            <NavbarItem label='/assets/searchIconW.png'/>
          </div>
        </div>
      </div>
      ) : null;
 
}

export default MobileMenu
