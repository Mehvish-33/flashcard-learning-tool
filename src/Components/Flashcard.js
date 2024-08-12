import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ question, answer }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="front">
                {question}
            </div>
            <div className="back">
                {answer}
            </div>
        </div>
    );
};

export default Flashcard;
