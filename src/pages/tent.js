import { useRouter } from 'next/router';

const TentPage = () => {
  const router = useRouter();
  const { regularTickets, vipTickets, greenCamping, optionalTentSetup } = router.query;

  return (
    <div>
      <h1>Tent</h1>
      <p>Regular Tickets: {regularTickets}</p>
      <p>VIP Tickets: {vipTickets}</p>
      <p>Green Camping: {greenCamping}</p>
      <p>Optional Tent Setup: {optionalTentSetup}</p>


      
    </div>
  );
};

export default TentPage;
