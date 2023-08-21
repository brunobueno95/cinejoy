import React, { useEffect, useState } from 'react'
import { ClassificationType } from 'typescript'
import AccountMenu from './AccountMenu'
import MobileMenu from './MobileMenu'
import NavbarItem from './NavbarItem'

const TOP_OFFSET =66;
 
const Navbar = () => {
    const [visibleMobile, setVisible] = useState<boolean>(false)
    const [visibleProfileMenu, setVisiblePM] = useState<boolean>(false)
    const [showBackground, setShowBackground] = useState<boolean>(false)

    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY >= TOP_OFFSET){
                setShowBackground(true);
            }else{
                setShowBackground(false)
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    },[])

  return (
  <nav
  className='w-full fixed z-40'>
    <div className={
   `px-4
   py-6
   flex
   flex-row
   items-center
   transition
   duration-500
   ${showBackground? 'bg-zinc-900 bg-opacity-90' : ''}`
     }>
        <img className='h-16 lg:h-24' src='/images/logo.png' alt=""/>
        <div
        className='flex-row
        ml-8
        gap-7
        hidden
        lg:flex'>
            <NavbarItem label={"Home"}/>
            <NavbarItem label={"New"}/>
            <NavbarItem label={"Series"}/>
            <NavbarItem label={"Movies"}/>
            <NavbarItem label={"Popular"}/>
            <NavbarItem label={"My List"}/>
          
            
           
        </div>

        <div onClick={()=>{setVisible(visibleMobile? false : true)}} className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative mt-5  '>
        <NavbarItem label='Browse'/>
        
        <img
  className={`h-4 mx-2 transition-transform duration-500 ${!visibleMobile ? 'rotate-0' : 'rotate-180'}`}
  src={ '/assets/cursorDwn.png' }
  alt=''
/>
        <MobileMenu visible={visibleMobile}/>

        </div>

            <div className='flex flex-row ml-auto gap-7 items-center mr-8 '>
                 <NavbarItem label={'/assets/bellIcn.png'}/> 
                 <NavbarItem label={'/assets/searchIconW.png'}/> 
                 <div className='flex flex-row '
                 onClick={()=>setVisiblePM(visibleProfileMenu ? false : true)}
                 >  <NavbarItem   label={'/images/profile-default.webp'}/> 

<img 
className={`h-4 my-auto ml-2 transition-transform duration-500 ${!visibleProfileMenu ? 'rotate-0' : 'rotate-180'}`}
src={ '/assets/cursorDwn.png' }
alt=''
/></div>
                <AccountMenu visible={visibleProfileMenu}/>

            </div>

          

    </div>
  </nav>
  )
}

export default Navbar
