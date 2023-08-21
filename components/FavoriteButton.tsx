import axios from 'axios';
import React, { useCallback, useMemo } from 'react';
// import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline';

import useCurrentUser from '@/hooks/useCurrentUser';
import useFavorites from '@/hooks/useFavorites';

interface FavoriteButtonProps {
  movieId: string
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites();

  const { data: currentUser, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavorites = useCallback(async () => {
    let response;

    if (isFavorite) {
      response = await axios.delete('/api/favorite', { data: { movieId } });
    } else {
      response = await axios.post('/api/favorite', { movieId });
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({ 
      ...currentUser, 
      favoriteIds: updatedFavoriteIds,
    });
    mutateFavorites();
  }, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);
  


  return (
    <div onClick={toggleFavorites} className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
     <img className='w-10/12 h-10/12' src={!isFavorite? "/assets/likeBtnOutlined.png" : "/assets/likeBtnLiked.png" } alt=''/>
    </div>
  )
}

export default FavoriteButton;


//<img className='w-full h-full' src={!isFavorite? "/assets/likeBtnOutlined.png" : "/assets/likeBtnLiked.png" } alt=''/>