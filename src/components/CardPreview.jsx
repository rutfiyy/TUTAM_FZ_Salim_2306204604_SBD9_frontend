import React from 'react';

const CardPreview = ({ name, cost, description }) => {
    return (
        <div className="card-preview bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 max-w-[300px] mx-auto overflow-hidden">
            {/* Card Header */}
            <div className="bg-blue-500 dark:bg-blue-600 text-white text-center py-2 rounded-t-lg">
                <h2 className="text-lg font-bold">{name || "Card Name"}</h2>
            </div>

            {/* Card Details */}
            <div className="p-4 space-y-2">
                <p className="text-center text-gray-700 dark:text-gray-300 font-medium">
                    <span className="font-bold">Cost:</span> {cost || "0"}
                </p>
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                    {description || "No description provided."}
                </p>
            </div>
        </div>
    );
};

export default CardPreview;