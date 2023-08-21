import React from 'react'
import { useRouter } from 'next/router'

interface PlayButtonProps{
    movieId:string;
}
const PlayButton: React.FC<PlayButtonProps> = ({movieId}) => {
    const router = useRouter();
  return (
    <button
    onClick={()=> router.push(`/watch/${movieId}`)}
    className="
    bg-white
    rounded-md
    py-1 md:py-2
    px-2 md:px-4
    w-auto
    text-xs lg:text-lg
    font-semibold
    items-center
    hover:bg-neutral-300
    transition" >
      <div className='flex flex-row'>
      <img className='h-4 lg:h-6 mr-2' src='/assets/playIcnColor.png' alt='play'/>
      Play
      </div> 
    </button>
  )
}

export default PlayButton
