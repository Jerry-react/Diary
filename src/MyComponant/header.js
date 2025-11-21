import React from 'react'
import './header.css'
import { useState , useEffect } from 'react';

export default function Header() {
    const now = new Date();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <div className='container'>
                <div className='dateTime'>
                    <p>Date: {now.toLocaleDateString()}</p>
                    <p>Time: {now.toLocaleTimeString()}</p>
                </div>
                <div className='title'>
                    <h2>My Diary</h2>
                </div>
                <div className='top'></div>
            </div><hr />
        </>
    )
}
