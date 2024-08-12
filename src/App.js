import React, { useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import FlashcardList from './Components/FlashcardList';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [view, setView] = useState('flashcards');
    const [flashcards, setFlashcards] = useState([]); // Centralized flashcards state

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const addFlashcard = (newFlashcard) => {
        setFlashcards([...flashcards, newFlashcard]);
    };

    const editFlashcard = (index, updatedFlashcard) => {
        const updatedFlashcards = flashcards.map((flashcard, i) =>
            i === index ? updatedFlashcard : flashcard
        );
        setFlashcards(updatedFlashcards);
    };

    const deleteFlashcard = (index) => {
        const updatedFlashcards = flashcards.filter((_, i) => i !== index);
        setFlashcards(updatedFlashcards);
    };

    const renderContent = () => {
        switch (view) {
            case 'flashcards':
                return <FlashcardList flashcards={flashcards} />;
            case 'dashboard':
                return (
                    <Dashboard
                        flashcards={flashcards}
                        addFlashcard={addFlashcard}
                        editFlashcard={editFlashcard}
                        deleteFlashcard={deleteFlashcard}
                    />
                );
            default:
                return <FlashcardList flashcards={flashcards} />;
        }
    };

    return (
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
            <header className="header">
                <h1>MindFlip</h1>
                <div className="dark-mode-toggle">
                    <label>
                        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                        Dark Mode
                    </label>
                </div>
            </header>
            <div className="sidebar">
                <h2>Menu</h2>
                <button onClick={() => setView('flashcards')}>Flashcards</button>
                <button onClick={() => setView('dashboard')}>Dashboard</button>
            </div>
            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
}

export default App;
