import React, { useState } from 'react';
import Header from '../components/header';
import CardForm from '../components/CardForm';
import CardPreview from '../components/CardPreview';
import { addCard } from '../actions/User.actions'; // Import the addCard function

const CreateCardPage = () => {
    const [cardData, setCardData] = useState({
        name: '',
        cost: '',
        description: ''
    });

    const handleCardDataChange = (newCardData) => {
        setCardData(newCardData);
    };

    const handleAddCard = async () => {
        try {
            const response = await addCard(cardData); // Call the addCard function
        } catch (error) {
            console.error('Error adding card:', error.message || error); // Debugging error in adding card
        }
    };

    return (
        <div className="font-sans text-gray-200 bg-gray-900">
            <header className="bg-gray-800 text-white py-5">
                <Header />
            </header>
            <main className="create-card-page p-6 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
                <h1 className="text-3xl font-bold text-center mb-6">Create Card</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <CardForm onCardDataChange={handleCardDataChange} />
                    <CardPreview {...cardData} />
                </div>
                <div className="text-center mt-6">
                    <button
                        onClick={handleAddCard}
                        className="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-200"
                    >
                        Add Card to Database
                    </button>
                </div>
            </main>
        </div>
    );
};

export default CreateCardPage;