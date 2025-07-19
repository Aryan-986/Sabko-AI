import { useUser } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react';
import { dummyPublishedCreationData } from '../assets/assets';
import { Heart } from 'lucide-react';
import { toast } from 'react-toastify';

const Community = () => {
  const [creations, setCreations] = useState([]);
  const { user } = useUser();

  const fetchCreation = async () => {
    setCreations(dummyPublishedCreationData);
  };

  useEffect(() => {
    if (user) {
      fetchCreation();
    }
  }, [user]);

  const handleLike = (index) => {
    if (!user) return;

    const updatedCreations = [...creations];
    const creation = updatedCreations[index];
    const userId = user.id;

    const alreadyLiked = creation.likes.includes(userId);

    if (alreadyLiked) {
      // Unlike
      creation.likes = creation.likes.filter((id) => id !== userId);
      toast.info('Creation unliked');
    } else {
      // Like
      creation.likes.push(userId);
      toast.success('Creation liked');
    }

    setCreations(updatedCreations);
  };

  return (
    <div className='flex-1 h-full flex flex-col gap-4 p-6'>
      <h1 className='text-xl font-semibold text-gray-800'>Community Creations</h1>

      <div className='bg-white h-full w-full rounded-xl overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {creations.map((creation, index) => {
          const isLiked = creation.likes.includes(user?.id);

          return (
            <div
              key={index}
              className='relative group border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200'
            >
              <img
                src={creation.content}
                alt='Community Creation'
                className='w-full h-60 object-cover rounded-t-lg'
              />

              <div className='p-3'>
                <p className='text-sm text-gray-700 line-clamp-2'>{creation.prompt}</p>

                <div className='flex items-center gap-2 mt-2 text-sm text-gray-500'>
                  <Heart
                    onClick={() => handleLike(index)}
                    className={`w-5 h-5 cursor-pointer transition-transform duration-150 ${
                      isLiked ? 'fill-pink-500 text-pink-500' : 'hover:text-pink-500'
                    }`}
                  />
                  <span>{creation.likes.length}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Community;
