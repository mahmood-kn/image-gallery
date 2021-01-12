import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';

function App() {
  const [images, setImages] = useState([]);
  const [isLoding, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
        );

        const data = await res.json();
        console.log(data);
        setImages(data.hits);
      } catch (error) {
        console.log(error);
      }
    }
    fetchImages();
  }, [term]);
  return (
    <div className='container px-2 m-auto '>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-3 mx-auto justify-items-center'>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
