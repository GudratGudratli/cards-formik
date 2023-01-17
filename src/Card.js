import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet';

export default function Card() {

    const [product, setProduct] = useState({})
    const params = useParams()

    useEffect(() => {
        const id = params.id

        axios.get("https://fakestoreapi.com/products/" + id).then(response => {
            setProduct(response.data)
        })

    })
    return (
        <div>
            <Helmet>
                <title>Card Details</title>
                <meta name="description" content="App Description" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>

            <div>{product.title}</div>
            <div>{product.price}</div>
            <div>{product.description}</div>
            <img src={product.image} alt=''></img>

            <Link to={"/product/"} class="link" href="#">Go back</Link>
        </div>
    )
}