import { useState } from "react"

const Counter = () =>{

    var [Count,setCount] = useState(0)

    function increase(){
        setCount(Count = Count + 1)
    }
    function decrease(){
        setCount(Count = Count - 1)
    }
   return(
    <div className="container">
        <div className="sub-container">
            <h1>{Count}</h1>
        </div>
        <div className="btn" onClick={increase}>
        <div className="btn1">
            <h1>+</h1>
        </div>
        </div>
            <div className="btnn" onClick={decrease}>
            <div className="btn2">
                <h2>-</h2>
            </div>
            </div>
            
    </div>
   )
}
export default Counter