// NotificationBar.jsx
import React, { useState, useEffect } from 'react';

const NotificationBar = ({ notification }) => {
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setBlink(prevBlink => !prevBlink);
        }, 500); // Blinking interval in milliseconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-blue-500 text-white p-2">
            <marquee behavior="scroll" direction="left">
                <div className="flex items-center">
                    <img src="/img/new.png" className={`h-5 w-5 mr-2 ${blink ? 'animate-blink' : ''}`} alt="New" />
                    <span>{notification}</span>
                </div>
            </marquee>
        </div>
    );
};

export default NotificationBar;
