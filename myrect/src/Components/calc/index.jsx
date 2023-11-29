import React, { useMemo, useState } from 'react'

function Calc() {
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(false)
    // const m10 = EDV(count)
    const m10 = useMemo(() => EDV(count), [count])

function EDV(count) {
    console.log("saaaam");
    for (let index = 0; index < 2000000 ; index++) {
        
        
    }
    return count *18/100
}
function increase() {
    setCount(count+1)
}
function handleToogle() {
    setToggle(!toggle)
}

  return (
    <div>

<h3>{count}</h3>
<button onClick={increase}>*</button>
<button onClick={handleToogle }> {toggle? "+" : "="}</button>
<button>{m10}</button>


    </div>
  )
}

export default Calc