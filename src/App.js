import React, { useState, useEffect } from "react";
import "./App.css";
import ImagesCard from "./components/ImagesCard";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&images_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {isLoading ? <h1 className="loading">Loading...</h1> : <div className="grid">
      {images.map(image => (
        <ImagesCard key={image.id} image={image} />
      ))}
    </div>}
    </>
  
  );
}

export default App;
