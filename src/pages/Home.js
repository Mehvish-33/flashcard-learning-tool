// src/pages/Home.js
import React from 'react';
import FlashcardList from '../Components/FlashcardList';

const sampleFlashcards = [
    { question: 'What is React?', answer: 'A JavaScript library for building user interfaces' },
    { question: 'What is JSX?', answer: 'A syntax extension for JavaScript' },
    { question: 'What is a component?', answer: 'A reusable piece of UI' },
    { question: 'What is state in React?', answer: 'An object that determines how a component renders and behaves' }
];

const Home = () => {
    return (
        <div style={{ padding: '20px' }}>
            <FlashcardList flashcards={sampleFlashcards} />
        </div>
    );
};

export default Home;
