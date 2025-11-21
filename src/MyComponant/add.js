import React from 'react'
import './add.css'
import { useRef } from 'react';
import { useEffect, useState } from 'react';


export default function Add({ form, setlist, data, setdata ,setform}) {

    let titleref = useRef();
    let mainref = useRef();
    let newtitleref = useRef();
    let newmainref = useRef();
    let storedDatalist = localStorage.getItem("data");
    let datalist = storedDatalist && storedDatalist !== "undefined" ? JSON.parse(storedDatalist) : [];
    let title, content;
    const [newdata, setnewdata] = useState({ title: "", main: "" });

    /* To set left component list */
    useEffect(() => {
        if (datalist) {
            setlist(datalist)
        }
    }, []);

    /* Set content data when someone click on list element for first time */
    useEffect(() => {
        if (!data) return;

        if (newmainref.current) {
            newmainref.current.innerText = data.main;
        }
    }, [data]);

    /* Set content every time when data value will change */
    useEffect(() => {
        if (!data) return;

        if (newmainref.current) {
            newmainref.current.innerText = data.main;
        }
    }, [data?.main]);

    /* change data value on every different note click */
    useEffect(() => {
        if (data) {
            setnewdata({
                title: data.title,
                main: data.main
            });
        }
    }, [data])

    /* Recive data on submit */
    function dataval(e) {

        e.preventDefault();

        title = titleref.current.value;
        content = mainref.current.innerText;

        console.log(title, content);
        storeData();
    }

    function storeData() {

        /* validate recived data */
        let exist = datalist.some(head => head.title === title);

        if (exist) {
            alert("Title must be different");
            return;
        } else if (!title) {
            alert("Title must be fill");
            return;
        } else if (!content) {
            alert("Content must be fill");
            return;
        }

        /* check data is alredy stored if no then store */
        let newDatalist = [...datalist, { title, main: content }]
        setlist(newDatalist);
        localStorage.setItem("data", JSON.stringify(newDatalist));

        titleref.current.value = "";
        mainref.current.innerText = "";
    }

    /* Recive and validate data then change and store */
    function update(e) {
        e.preventDefault();

        let newtitle = newtitleref.current.value;
        let newmain = newmainref.current.innerText;

        if (!newtitle) {
            alert("Title can't be blank!");
            return;
        } else if (!newmain) {
            alert("Content can't be blank!");
            return;
        }

        let storedlist = JSON.parse(localStorage.getItem("data") || "[]");
        let updatedlist = storedlist.map(item => item.title === data.title ? { ...item, title: newtitle, main: newmain } : item);

        setlist(updatedlist);
        localStorage.setItem("data", JSON.stringify(updatedlist));

        setdata("");
    }

    /* Clrar all pre-fill data */ 
    function reset(e) {
        e.preventDefault();

        newtitleref.current.value = "";
        newmainref.current.innerText = "";
        setnewdata("");
    }

    /* Delete active note */
    function remove(e) {

        e.preventDefault();
        let currtitle = newtitleref.current.value;
        let currmain = newmainref.current.value;

        let newlist = JSON.parse(localStorage.getItem("data"))
        let updatenewlist = newlist.filter(item => item.title !== currtitle && item.main !== currmain);
        setlist(updatenewlist);
        localStorage.setItem("data", JSON.stringify(updatenewlist));

        setdata("");
        setform(true);
    }

    return (
        <>
        {/*show blank note */}
            {form && (
                <div>
                    <form>
                        <input type="text" placeholder='Title' className='ntitle' ref={titleref} required /><br /><br /><hr /><br />
                        <div contentEditable='true'
                            className='content'
                            ref={mainref}
                            data-placeholder='Write your note from here...'
                            suppressContentEditableWarning={true}
                            required></div>
                        <button className='btn' onClick={dataval}>Done</button>
                    </form >
                </div>
            )}

        {/* show active note data */}
            {data &&
                <div>
                    <form>
                        <input type='text' placeholder='Title' className='ntitle' value={newdata.title} ref={newtitleref} onChange={(e) => setnewdata(prev => ({ ...prev, title: e.target.value }))} required />
                        <br /><br /><hr /><br />
                        <div contentEditable='true'
                            className='content'
                            data-placeholder='Write your note from here...'
                            suppressContentEditableWarning={true}
                            ref={newmainref}
                            onInput={(e) => setnewdata(prev => ({ ...prev, main: e.target.innerText }))}
                            required></div>
                        <button className='reset' onClick={reset}>Clear All</button>
                        <button className='btn' onClick={update}>update</button>
                        <button className='delete' onClick={remove}>Delete</button>
                    </form>
                </div>
            }
        </>
    )
}
