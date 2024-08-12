// src/components/FlashcardForm.js
import React, { useState, useEffect } from 'react';

const FlashcardForm = ({ addFlashcard, updateFlashcard, currentFlashcard, setCurrentFlashcard }) => {
    const [flashcard, setFlashcard] = useState({ id: '', question: '', answer: '' });

    useEffect(() => {
        if (currentFlashcard) {
            setFlashcard(currentFlashcard);
        } else {
            setFlashcard({ id: '', question: '', answer: '' });
        }
    }, [currentFlashcard]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFlashcard({ ...flashcard, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (flashcard.id) {
            updateFlashcard(flashcard);
        } else {
            addFlashcard({ ...flashcard, id: Date.now().toString() });
        }
        setFlashcard({ id: '', question: '', answer: '' });
        setCurrentFlashcard(null);
    };

    return (
        <form onSubmit={handleSubmit} className="flashcard-form">
            <h3>{currentFlashcard ? 'Edit Flashcard' : 'Add New Flashcard'}</h3>
            <div className="form-group">
                <label>Question:</label>
                <input
                    type="text"
                    name="question"
                    value={flashcard.question}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Answer:</label>
                <input
                    type="text"
                    name="answer"
                    value={flashcard.answer}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="submit-button">
                {currentFlashcard ? 'Update Flashcard' : 'Add Flashcard'}
            </button>
        </form>
    );
};

export default FlashcardForm;
