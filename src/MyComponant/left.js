import React from 'react'
import './left.css'
import { useState } from 'react';
import leftarrow from '../img/leftarrow.jpg'
import rightarrow from '../img/rightarrow.jpg'

export default function Left({ setform, list, setdata ,setlist,setshow}) {

  const [yes ,setyes] = useState(true);
  
  function addnew() {
    setform(true);
    setdata("");
  }
  function change(item) {
    setdata(item);
    setform(false);
    console.log(item)
  }

  function clear() {
    localStorage.setItem("data",JSON.stringify());
    setlist("");
    setdata("");
    setform(true);
  }
  return (
    <>
      <div className='left'>
        {yes ? <img src={rightarrow} alt='>' className='show' onClick={()=>{setshow(false); setyes(false)}} /> :
        <img src={leftarrow} alt='<' className='show' onClick={()=>{setshow(true); setyes(true)}} />}
        <button className='clear' onClick={clear}>Delete All</button>
        <button className='item' onClick={addnew}>Add</button><hr />
        {
          list ?
            list.map((item, index) => (
              <div key={index}>
                <button className='item' onClick={()=>{change(item)}}>{item.title}</button><hr />
              </div>
            )
            ) : <p />
        }
      </div>
    </>
  )
}
