import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xpvkvqbuycmzxagcqvvr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhwdmt2cWJ1eWNtenhhZ2NxdnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0NDg3NzksImV4cCI6MjAwMTAyNDc3OX0.8SiiRoXfGKSslpHtIr_JD3PEeTflFIA1N4IVsUsjkFU';
const supabase = createClient(supabaseUrl, supabaseKey);

const TicketForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object with the form data
    const ticketData = {
      full_name: fullName,
      email,
      date_of_birth: dateOfBirth,
    };

    try {
      // Make an HTTP POST request to your Supabase table
      const { data, error } = await supabase.from('tickets').insert([ticketData]);

      if (error) {
        // Error occurred while inserting data
        console.error('Error inserting ticket data:', error);
      } else {
        // Data was successfully inserted into the table
        console.log('Ticket data inserted successfully:', data);

        // Reset form fields after successful submission
        setFullName('');
        setEmail('');
        setDateOfBirth('');
      }
    } catch (error) {
      // Network error or other exception occurred
      console.error('Error inserting ticket data:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-md mx-auto bg-white p-8 border rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Ticket Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={handleFullNameChange}
              className="w-full border-gray-300 rounded focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border-gray-300 rounded focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="block font-medium mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={handleDateOfBirthChange}
              className="w-full border-gray-300 rounded focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
            >
              Next Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketForm;

