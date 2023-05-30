import React, { useState } from 'react';

const TicketForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any necessary actions with the form data here

    // Reset form fields after submission
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setDateOfBirth('');
  };

  return (
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
          <label htmlFor="phoneNumber" className="block font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
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
  );
};

export default TicketForm;
