import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');
  return (
    <div className='max-w-sm rounded shadow-lg overflow-hidden'>
      <img src={image.webformatURL} alt={tags[0]} />
      <div className='px-6 py-4'>
        <div className='font-bold text-purple-500 text-xl mb-2'>
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            <span> {image.views}</span>
          </li>
          <li>
            <strong>Downloads:</strong>
            <span> {image.downloads}</span>
          </li>
          <li>
            <strong>Likes:</strong>
            <span> {image.likes}</span>
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        {tags.map((tag, i) => (
          <span
            key={i}
            className='px-3 py-1 bg-gray-200 inline-block rounded-full text-gray-700 font-semibold mb-2 mr-2'>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
