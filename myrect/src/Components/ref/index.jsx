import React, { useRef } from 'react'

function ChildRef() {
    const inp = useRef()
    function handle() {
        inp.current.focus()
    }
  return (
    <div>
<button onClick={handle}>vur bura</button>

<input ref={inp} type="text" />


    </div>
  )
}

export default ChildRef