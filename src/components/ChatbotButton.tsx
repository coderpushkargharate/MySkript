import React, { useState } from 'react';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot Window */}
      {isOpen && (
        <div className="mb-20 w-80 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
          <div className="bg-blue-600 text-white px-4 py-2 font-semibold">
            Chatbot
          </div>
          <div className="p-4 h-64 overflow-y-auto text-sm text-gray-700">
            <p>Hello! How can I help you?</p>
            {/* You can replace this with a real chatbot component or iframe */}
          </div>
          <div className="border-t p-2">
            <input
              type="text"
              className="w-full px-2 py-1 border rounded text-sm"
              placeholder="Type your message..."
            />
          </div>
        </div>
      )}

      {/* Chatbot Toggle Button */}
      <button
        onClick={toggleChat}
        className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center transition"
      >
        {/* Icon */}
        {isOpen ? (
          // Close icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Chat icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-2M7 8H5a2 2 0 00-2 2v8a2 2 0 002 2h2m10-16H7a2 2 0 00-2 2v4h14V6a2 2 0 00-2-2z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ChatbotButton;
