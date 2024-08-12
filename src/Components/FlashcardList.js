import React, { useState } from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ flashcards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < flashcards.length - 1 ? prevIndex + 1 : 0));
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : flashcards.length - 1));
    };

    const progress = ((currentIndex + 1) / flashcards.length) * 100;

    return (
        <div style={{ textAlign: 'center' }}>
            {flashcards.length > 0 && (
                <>
                    <Flashcard
                        question={flashcards[currentIndex].question}
                        answer={flashcards[currentIndex].answer}
                    />
                    <div className="navigation-buttons">
                        <button onClick={handlePrevious} className="previous">
                            Previous
                        </button>
                        <button onClick={handleNext} className="next">
                            Next
                        </button>
                    </div>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className="progress-text">
                        {currentIndex + 1} of {flashcards.length} cards
                    </div>
                </>
            )}
        </div>
    );
};

export default FlashcardList;
