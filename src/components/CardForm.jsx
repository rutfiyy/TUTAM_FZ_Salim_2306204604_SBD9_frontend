import React, { useState } from 'react';

const CardForm = ({ onCardDataChange }) => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleCostChange = (e) => {
        setCost(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSave = () => {
        onCardDataChange({ name, cost, description });
    };

    return (
        <div className="card-form space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-gray-900 dark:text-gray-100">
            <input
                type="text"
                placeholder="Card Name"
                value={name}
                onChange={handleNameChange}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-100 dark:bg-gray-700"
            />
            <input
                type="number"
                placeholder="Cost"
                value={cost}
                onChange={handleCostChange}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-100 dark:bg-gray-700"
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={handleDescriptionChange}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-100 dark:bg-gray-700"
            />
            <button
                onClick={handleSave}
                className="w-full bg-blue-500 dark:bg-blue-600 text-white py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-200"
            >
                Save
            </button>
        </div>
    );
};

export default CardForm;