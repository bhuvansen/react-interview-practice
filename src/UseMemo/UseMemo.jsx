import React, { useState, useMemo } from "react"

const UseMemo = () => {
    const [myNum, setMyNum] = useState(0)
    const [show, setShow] = useState()
    const getValue = () => {
        return setMyNum(myNum + 1)
    }
    const countNumber = (num) => {
        console.log("FROM MEMO.JSX~~~ LINE 10 ", num)
        for (let i = 0; i <= 1000000000; i++) {}
        return num
    }
    const checkData = useMemo(() => countNumber(myNum), [myNum])

    return (
        <>
            <h1>UseMemo Hook</h1>

            <>
                <button onClick={getValue} style={{ backgroundColor: "red", color: "white" }}>
                    Counter
                </button>
                <p>My new number is : {checkData}</p>
                <button onClick={() => setShow(!show)}>{show ? "You clicked me" : "Click me plz"}</button>
            </>
        </>
    )
}

export default UseMemo
