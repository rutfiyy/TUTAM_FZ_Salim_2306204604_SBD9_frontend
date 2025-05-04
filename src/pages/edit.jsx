import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header";
import CardForm from "../components/CardForm";
import CardPreview from "../components/CardPreview";
import { fetchCards, updateCard } from "../actions/User.actions"; // Import fetchCards

const EditCardPage = () => {
  const location = useLocation(); // Access location state
  const navigate = useNavigate();
  const [cardData, setCardData] = useState({
    name: "",
    cost: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const { id } = location.state; // Retrieve the card ID from location state
        console.log("Card ID from state:", id); // Debugging the ID
        const cards = await fetchCards(); // Fetch all cards
        const cardToEdit = cards.find((card) => card.id === id); // Find the card by ID
        console.log("Card to edit:", cardToEdit); // Debugging the card to edit
        if (cardToEdit) {
          setCardData(cardToEdit);
        } else {
          alert("Card not found!");
          navigate("/"); // Redirect to home if card not found
        }
      } catch (error) {
        console.error("Error fetching card:", error);
        alert("An error occurred while fetching the card.");
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, [location.state, navigate]);

  const handleCardDataChange = (newCardData) => {
    setCardData(newCardData);
  };

  const handleSave = async () => {
      try {
        const { id } = location.state; // Retrieve the card ID from location state
        await updateCard(id, cardData); // Call the updateCard function with the ID and updated data
        alert("Card updated successfully!");
        navigate("/"); // Redirect to home after saving
      }
      catch (error) {
        console.error("Error updating card:", error);
        alert("An error occurred while updating the card.");
      }
  };

  if (loading) {
    return <p className="text-center text-gray-400">Loading card data...</p>;
  }

  return (
    <div className="font-sans text-gray-200 bg-gray-900">
      <header className="bg-gray-800 text-white py-5">
        <Header />
      </header>
      <main className="edit-card-page p-6 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <h1 className="text-3xl font-bold text-center mb-6">Edit Card</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CardForm onCardDataChange={handleCardDataChange} />
          <CardPreview {...cardData} />
        </div>
        <div className="text-center mt-6">
          <button
            onClick={handleSave}
            className="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-200"
          >
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
};

export default EditCardPage;