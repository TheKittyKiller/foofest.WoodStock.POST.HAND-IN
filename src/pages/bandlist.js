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

  return (
    <div>
      <h1>Bands</h1>
      <ul>
        {bands.map((band) => (
          <li key={band.id}>{band.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BandList;
