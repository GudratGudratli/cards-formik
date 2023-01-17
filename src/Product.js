import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './product.css';
import { Helmet } from 'react-helmet';

export default function Product() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products",).then(response => {
            setData(response.data)
        })
    }, [])

    return (
        <>
            <Helmet>
                <title>Products page</title>
                <meta name="description" content="App Description" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>
            <div>product page sjsjsj</div>
            <Link to={'/'} href='#' class='link'>Go back</Link>
            {data.map(x => <Cards key={x.id} data={x} >  </Cards>)}
        </>
    )

    function Cards(props) {
        return (
            <div className='box' style={{ width: '200px', boxShadow: '0 2px 4px rgba(0,0,0,0.1) , 0 4px 8px rgba(0,0,0,0.25)', padding: '10px 15px' }}>
                <h2 className='title'> {props.data.title}  </h2>
                <p className='price'> {props.data.price}  </p>
                <Link to={"/product/" + props.data.id} class="link" href="#">Learn more</Link>
            </div>
        )
    }
}