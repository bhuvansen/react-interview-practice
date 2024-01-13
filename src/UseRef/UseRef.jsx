import React, { useEffect, useRef, useState } from "react"

const UseRef = () => {
    const [myData, setMyData] = useState("")
    // const [count, setCount] = useState(0)
    const count = useRef(0)
    const newRef = useRef()

    useEffect(() => {
        // setCount(count+1)
        console.log(newRef.current)
        count.current = count.current+1
    })
    const changeStyle=()=>{
        newRef.current.style.backgroundColor = "#82E0AA"

    }
    return (
        <div>
            <h1>UseRef Hook</h1>
            <input ref={newRef} type="text" value={myData} onChange={(e) => setMyData(e.target.value)} />
            <p>The number of count is {count.current}</p>
            <button onClick={changeStyle}>Change</button>
        </div>
    )
}

export default UseRef
