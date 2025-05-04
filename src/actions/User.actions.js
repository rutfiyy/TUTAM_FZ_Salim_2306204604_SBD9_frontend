const BASE_URL = 'tutam-fz-salim-2306204604-sbd-9-backend-jbmoj44tx.vercel.app';

// Function to fetch all cards
export const fetchCards = async () => {
    try {
        const response = await fetch(`${BASE_URL}/card`, {
            method: 'GET',
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Failed to fetch cards: ${data.message || response.statusText}`);
        }

        return data.payload; // Assuming `payload` contains the list of cards
    } catch (error) {
        console.error('Error fetching cards:', error);
        throw error;
    }
};

// Function to delete a card
export const deleteCard = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/card/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Failed to delete card: ${errorData.message || response.statusText}`);
        }

        return true; // Return true if the card was deleted successfully
    } catch (error) {
        console.error('Error deleting card:', error);
        throw error;
    }
};

// Function to add a card
export const addCard = async (cardData) => {
    try {
        const response = await fetch(`${BASE_URL}/card`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cardData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Failed to add card: ${data.message || response.statusText}`);
        }

        return data;
    } catch (error) {
        console.error('Error adding card:', error);
        throw error;
    }
};

// Function to update a card
export const updateCard = async (id, cardData) => {
    try {
        console.log("Sending update request for card ID:", id); // Debugging the ID
        console.log("Card data being sent:", cardData); // Debugging the card data

        const response = await fetch(`${BASE_URL}/card/update`, { // Static route for updating
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, ...cardData }), // Include `id` in the request body
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Failed to update card: ${data.message || response.statusText}`);
        }

        return data;
    } catch (error) {
        console.error("Error updating card:", error);
        throw error;
    }
};