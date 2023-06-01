import { useState } from 'react';
import { useRouter } from 'next/router';

const TentSetPage = () => {
  const router = useRouter();
  const { regularTickets, vipTickets, greenCamping } = router.query;

  const [optionalTentSetup, setOptionalTentSetup] = useState('No'); // State for Optional Tent Setup

  const handleOptionalTentSetupChange = (e) => {
    setOptionalTentSetup(e.target.value);
  };

  const handleNextStep = () => {
    router.push({
      pathname: '/tent',
      query: { regularTickets, vipTickets, greenCamping, optionalTentSetup },
    });
  };

  return (
    <div>
      <h1>Tent Set</h1>
      <div>
        <label>
          <input
            type="radio"
            name="optionalTentSetup"
            value="Yes"
            checked={optionalTentSetup === 'Yes'}
            onChange={handleOptionalTentSetupChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="optionalTentSetup"
            value="No"
            checked={optionalTentSetup === 'No'}
            onChange={handleOptionalTentSetupChange}
          />
          No
        </label>
      </div>
      <h2>Tickets</h2>
      <p>Regular Tickets: {regularTickets}</p>
      <p>VIP Tickets: {vipTickets}</p>
      <p>Green Camping: {greenCamping}</p>
      <button onClick={handleNextStep}>Next Step</button>
    </div>
  );
};

export default TentSetPage;
