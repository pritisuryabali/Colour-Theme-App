import { getUserPreference, saveUserPreference } from './api';
import React, { useState, useEffect } from 'react';

function PreferenceComponent({ userId }) {
    const [color, setColor] = useState('');

    useEffect(() => {
        getUserPreference(userId).then(data => {
            if (data && data.color) {
                setColor(data.color);
            }
        });
    }, [userId]);

    const handleColorChange = (newColor) => {
        saveUserPreference(userId, newColor).then(response => {
            console.log('Preference saved:', response);
        });
    };

    return (
        <div>
            <h1>Choose Your Color</h1>
            <button onClick={() => handleColorChange('blue')}>Blue</button>
            <button onClick={() => handleColorChange('red')}>Red</button>
        </div>
    );
}

export default PreferenceComponent;
