import React from 'react'
import './header.css'
import { useState, useEffect } from 'react';

export default function Header({setprofile}) {
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
                <div className='lhs'>
                <div className='profile' onClick={()=>{setprofile(pre => !pre);}}>
                    <div className='style'></div>
                    <div className='menu'></div>
                </div>
 
                <div className='dateTime'>
                    <p>Date: {now.toLocaleDateString()}</p>
                    <p>Time: {now.toLocaleTimeString()}</p>
                </div>
                </div>
                <div className='title'>
                    <h2>Notes</h2>
                </div>
                <div className='top'></div>
            </div><hr />
        </>
    )
}
