import useCurrentUser from '@/hooks/useCurrentUser';
import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import React from 'react'

export async function getServerSideProps(context:NextPageContext){
   const session = await getSession(context);
    if (!session) {
        return {
          redirect: {
            destination: '/auth',
            permanent: false,
          }
        }
      }
    
      return {
        props: {}
      }
    }


const profiles = () => {

    const router = useRouter();
const {data:user} = useCurrentUser();

    return (
        <div className="flex items-center h-full justify-center">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-6xl text-white text-center">Who&#39;s watching?</h1>
            <div className="flex items-center justify-center gap-8 mt-10">
               <div onClick={() => router.push('/')}>
                 <div className='group flex-row w-44 mx-auto'>

                    <div
                    className='
                    w-44
                    h-44
                    rounded-ms
                    flex
                    items-center
                    justify-cener
                    border-2
                    border-transparent
                    group-hover:cursos-pointer
                    group-hover:border-white
                    overflow-hidden
                    rounded-lg
                    '>

                       <img src='/images/profile-default.webp' alt=''/> 

                    </div>

                    <div
                    className='
                    mt-4
                    text-gray-400
                    text-2xl
                    text-center
                    group-hover:text-white'>
                            {user?.name}
                    </div>
                    
                    </div> 
                 
                 </div>
                {/* <UserCard name={currentUser?.name} /> */}
              </div>
            </div>
          </div>
        
      );}

export default profiles
