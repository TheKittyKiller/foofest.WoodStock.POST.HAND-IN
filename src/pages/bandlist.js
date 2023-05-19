
import { useEffect, useState } from 'react';




const BandList = () => {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://winter-motley-butterfly.glitch.me/bands');
        const data = await response.json();
        setBands(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const generateRandomImage = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    return `https://source.unsplash.com/200x200/?music,bands/${randomNumber}`;
  };

  return (
    
        <div class="band-container">    
      <h1 className='title'>Bands</h1>
      <ul className='bandList'>
        {bands.map((band) => (
          <li key={band.id}>
         
            <strong>{band.name}</strong>
            <br />
        
            {band.genre}  <img src={generateRandomImage()} alt={`${band.name} Logo`} />
          </li>
        ))}
      </ul>
 </div>
    
  );
};

export default BandList;
