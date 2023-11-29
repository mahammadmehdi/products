// import { useState,useEffect } from 'react';
// import axios from 'axios'


// function App() {
// const [data, setData] = useState([])
// const [isLoading, setISLoading] = useState(true)


// useEffect(() => {
//   async function getData() {
   
//       const response = await axios.get("https://northwind.vercel.app/api/categories");
//       setData(response.data)
//       setISLoading(false)
    
//   }
//   getData()
// }, [])


//   return (
//     <div className="App">
//       {isLoading ? <h1>Loading...</h1> : data.map(x=><li key = {x.id}>{x.name}</li>)}
      
//     </div>
//   );
// }

// export default App;
//----------------------------------------------------------------------------------
// import React from 'react'
// import useCounter from './hook/useCounter'


// function App() {
//   const [count1, inccount1]= useCounter()
//   const [count2, inccount2]= useCounter()
//   const [count3, inccount3]= useCounter()

//   return (
//     <div>
// <div>{count1}</div>
// <button onClick={inccount1}>add</button>

// <div>{count2}</div>
// <button onClick={inccount2}>add</button>

// <div>{count3}</div>
// <button onClick={inccount3}>add</button>



//     </div>
//   )
// }

// export default App


// import React from 'react'
// import useLocalStorage from './hook/useLocalStorage'

// function App() {
//   const [input,setInput] = useLocalStorage("username", "")

//   function handleInput(e) {
//     setInput(e.target.value)
//   }
//   return (
//     <div><input value={input} onChange={e=>handleInput(e)} type="text" /></div>
//   )
// }

// export default App

import React from 'react'

import API from './Components/API'

function App() {
  return (
    <div><API></API></div>
  )
}

export default App