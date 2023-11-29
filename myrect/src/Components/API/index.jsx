import React, { useEffect, useState } from 'react'
import "./index.css"

function API() {
    const [fetchData, setFetchData] = useState([]);
    const [filterData, setFilterData] = useState("All");

    useEffect(() => {
        getFetch();
    }, []);


    async function getFetch() {
        const data = await fetch("https://fakestoreapi.com/products");
        const res = await data.json();
        setFetchData(res);
        console.log(res);

    }
    const FilterProducts = (category) => {
        setFilterData(category)
    }
    const dataProdcuts =
        filterData === "All"
            ? fetchData
            : fetchData.filter((item) => item.category === filterData)
    return (
        <div className='container'>
            <div className='btn'> <button onClick={() => FilterProducts("All")}>All</button>
                <button onClick={() => FilterProducts("men's clothing")}>Men</button>
                <button onClick={() => FilterProducts("jewelery")}>Jewelery</button>
                <button onClick={() => FilterProducts("electronics")} >Electronics</button>
                <button onClick={() => FilterProducts("women's clothing")}>Women</button></div>

            <div className='Cards'>
                {dataProdcuts.map((x) => {
                    return (
                        <ul className='ApiList' key={x.id}>

                            <img className='picture' src={x.image} alt="" />
                            <h5 className='title'>Title:{x.title}</h5>
                            <li>Price:{x.price} $</li>
                            <li>Description: {(x.description).slice(0, 35)}</li>
                            <li className='category'>{x.category}</li>
                        </ul>
                    )
                })}
            </div>
        </div >
    )
}

export default API