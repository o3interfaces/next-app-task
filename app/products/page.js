"use client"
import React, { useState, useEffect } from 'react';

const page = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const result = await response.json();

                // Log the data to the console
                console.log('Fetched Data:', result);

                setData(result.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Product Data</h1>
            {data ? (
                <ul>
                    {data.map((d) => (
                        <div key={d.id}>
                            <h2>{d.title}</h2>
                            <p>{d.description}</p>
                            <br></br>
                        </div>
                    ))}
                </ul>
            ) : (
                <p>Loading Products...</p>
            )}
        </div>
    );
};

export default page;