import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ addFlashcard, editFlashcard, deleteFlashcard, flashcards }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleAddFlashcard = () => {
        if (question && answer) {
            addFlashcard({ question, answer });
            setQuestion('');
            setAnswer('');
        } else {
            alert('Please fill in both question and answer fields');
        }
    };

    return (
        <div className="dashboard">
            <h2>Flashcard Dashboard</h2>
            <div className="flashcard-form">
                <h3>Add New Flashcard</h3>
                <div className="form-group">
                    <label>Question</label>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Answer</label>
                    <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    />
                </div>
                <button className="submit-button" onClick={handleAddFlashcard}>
                    Add Flashcard
                </button>
            </div>

            <div className="flashcard-list">
                <h3>Manage Flashcards</h3>
                <ul>
                    {flashcards.map((flashcard, index) => (
                        <li key={index} className="flashcard-item">
                            <div className="flashcard-content">
                                <strong>Q:</strong> {flashcard.question} <br />
                                <strong>A:</strong> {flashcard.answer}
                            </div>
                            <div className="flashcard-actions">
                                <button
                                    className="edit-button"
                                    onClick={() =>
                                        editFlashcard(index, {
                                            question: prompt("Enter new question:", flashcard.question),
                                            answer: prompt("Enter new answer:", flashcard.answer),
                                        })
                                    }
                                >
                                    ✏️ Edit
                                </button>
                                <button
                                    className="delete-button"
                                    onClick={() => deleteFlashcard(index)}
                                >
                                    🗑️ Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
