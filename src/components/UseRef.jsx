import React, { useEffect, useState, useRef } from 'react'
import "../style.css"
const UseRef = () => {

    // const [count, setCount] = useState(0);
    const [data, updateData] = useState("")

    // const count=useRef(0)

    const changeInput = (e) => {
        updateData(e.target.value)
    }

    // useEffect(()=>{
    // this is caught in infinte loop
    //     setCount(count+1)
    // })
    const count = useRef(0)
    const focusInput = useRef();

    useEffect(() => {
        count.current = count.current + 1
        focusInput.current.focus();

    })

    const refresh = ()=>{
        window.location.reload();
    }
    return (
        <div className="container">
            <header id="heading">
                <h1>Better use useRef() it will create an mutable object</h1>
            </header>
            <div id="input-box">
                <input type="text" value={data} onChange={changeInput} ref={focusInput} />
                <p>Component is rendered <span id="red-txt">{count.current}</span> times</p>
                <div id="refresh-btn" onClick={refresh} title="refresh this page">
                    <i class="fa-solid fa-arrows-rotate" ></i>
                </div>
            </div>
           
        </div>
    )
}

export default UseRef;