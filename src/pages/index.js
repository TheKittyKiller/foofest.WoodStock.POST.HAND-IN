import { useState } from 'react';

const IndexPage = () => {
  const [regularTickets, setRegularTickets] = useState(0);
  const [vipTickets, setVipTickets] = useState(0);

  const handleRegularTicketChange = (e) => {
    setRegularTickets(parseInt(e.target.value));
  };

  const handleVipTicketChange = (e) => {
    setVipTickets(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setRegularTickets(0);
    setVipTickets(0);
  };

  return (
    <div>
      <h1>Tickets</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Regular Tickets:
            <select value={regularTickets} onChange={handleRegularTicketChange}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
        <div>
          <label>
            VIP Tickets:
            <select value={vipTickets} onChange={handleVipTicketChange}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
        <button type="submit">Buy Tickets</button>
      </form>
    </div>
  );
};

export default IndexPage;
