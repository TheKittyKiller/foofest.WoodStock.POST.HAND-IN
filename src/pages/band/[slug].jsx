import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';


const BandDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [band, setBand] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://winter-motley-butterfly.glitch.me/bands/${slug}`);
        const data = await response.json();
        setBand(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  if (!band) {
    return <div>Loading...</div>;
  }

  const generateRandomImage = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    return `https://source.unsplash.com/200x200/?music,bands/${randomNumber}`;
  };

  return (
    <div className="band-container2">
      <div className="band-content2">
        <h1 className="title">{band.name}</h1>
        <div className="band-info">
          <p>Genre: {band.genre}</p>
          <img src={generateRandomImage()} alt={`${band.name} Logo`} />
          <p>Members: {band.members}</p>
          <p>Description: {band.bio}</p>
          <Link href="/bandList">
            <p className="home-button">Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BandDetails;
