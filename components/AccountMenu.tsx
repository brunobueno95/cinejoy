import React from 'react'

import {signOut} from 'next-auth/react'
import NavbarItem from './NavbarItem';
import useCurrentUser from '@/hooks/useCurrentUser';

interface AccountMenuProps {
    visible?: boolean;
}
const AccountMenu: React.FC<AccountMenuProps> = ({visible}) => {
  const { data: currentUser } = useCurrentUser();

    return visible ? (
        
        <div  className='bg-black rounded w-56 absolute top-[7rem] right-0 py-5 flex-col border-2 border-gray-800 flex '>
          <div className='flex flex-col gap-4'>
          <div className='flex flex-row mx-auto'>
            <NavbarItem accountMenu={true} label='/images/profile-default.webp'/>
            <div className='my-auto ml-5'><NavbarItem accountMenu={true} label={currentUser?.name}/></div>
           
           </div>
           <hr/>
           <div className='flex flex-row mx-auto'>
            <NavbarItem accountMenu={true} label='/assets/logoutW.png'/>
            <div  onClick={()=>signOut()} className='my-auto ml-5'><NavbarItem accountMenu={true} label='logout'/></div>
           
           </div>

      
          </div>
        </div>
    
      ) : null;
 
}

export default AccountMenu
