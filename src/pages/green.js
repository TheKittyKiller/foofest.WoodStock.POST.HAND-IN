import { useState } from 'react';
import { useRouter } from 'next/router';

const GreenPage = () => {
  const router = useRouter();
  const { regularTickets, vipTickets } = router.query;

  const [greenCamping, setGreenCamping] = useState(''); // State for Green Camping option

  const handleGreenCampingChange = (e) => {
    setGreenCamping(e.target.value);
  };

  const handleNextStep = () => {
    router.push({
      pathname: '/tent-set',
      query: { regularTickets, vipTickets, greenCamping },
    });
  };

  return (
    <div>
      <h1>Green Camping</h1>
      <div>
        <label>
          <input
            type="radio"
            name="greenCamping"
            value="yes"
            checked={greenCamping === 'yes'}
            onChange={handleGreenCampingChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="greenCamping"
            value="no"
            checked={greenCamping === 'no'}
            onChange={handleGreenCampingChange}
          />
          No
        </label>
      </div>
      <h2>Tickets</h2>
      <p>Regular Tickets: {regularTickets}</p>
      <p>VIP Tickets: {vipTickets}</p>
      <button onClick={handleNextStep}>Next Step</button>
    </div>
  );
};

export default GreenPage;
