import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation to the edit page
import Header from "../components/header";
import { fetchCards, deleteCard } from "../actions/User.actions"; // Import actions

const HomePage = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const loadCards = async () => {
      try {
        const cardsData = await fetchCards(); // Fetch cards using User.actions.js
        setCards(cardsData);
      } catch (error) {
        console.error("Error loading cards:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCards();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this card?")) return;

    try {
      await deleteCard(id); // Delete card using User.actions.js
      setCards(cards.filter((card) => card.id !== id)); // Remove the deleted card from the state
      alert("Card deleted successfully!");
    } catch (error) {
      console.error("Error deleting card:", error);
      alert("An error occurred while deleting the card.");
    }
  };

  const handleEdit = (id) => {
    navigate("/edit", { state: { id } }); // Navigate to the static edit page with the card ID in state
  };

  return (
    <div className="font-sans text-gray-200 bg-gray-900 flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-5">
        <Header />
      </header>

      <main className="mt-12 px-6 flex-grow">
        {loading ? (
          <p className="text-center text-gray-400">Loading cards...</p>
        ) : cards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-gray-800 text-white p-4 rounded-lg shadow-md"
              >
                <h2 className="text-xl font-bold">{card.name}</h2>
                <p className="text-gray-400">Cost: {card.cost}</p>
                <p className="text-gray-400">{card.description}</p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleEdit(card.id)}
                    className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition duration-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(card.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">No cards found.</p>
        )}
      </main>
    </div>
  );
};

export default HomePage;