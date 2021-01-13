import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import Search from './components/Search';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    async function fetchImages() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
        );

        const data = await res.json();
        setImages(data.hits);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchImages();
  }, [term]);
  return (
    <div className='container px-2 m-auto '>
      <Search setSearchTerm={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className='md:text-6xl sm:text-4xl text-xl text-center mt-20'>
          No Images Found...
        </h1>
      )}
      {isLoading ? (
        <h1 className='text-6xl text-center mt-9'>Loading...</h1>
      ) : (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-3 mx-auto justify-items-center'>
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
