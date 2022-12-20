import React from 'react';
import { useEffect, useState } from "react";
import "../App.css";

function MyComponent(props) {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost/api/read.php?countries=${props.countries}&sources=${props.sources}&categories=${props.categories}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }

            )
    }, []);


    if (error) {
        return <div><h5 className="text-white">Error: unable to search for news articles</h5></div>
    }
    else if (!isLoaded) {
        return <div><h5 className="text-white">Loading...</h5></div>;
    } else if (items && items.error) {
        return <div><h5 className="text-white">Error: unable to search for news articles</h5></div>
    } else if (items.pagination.count == 0) {
        return <div><h5 className="text-white">No news articles found</h5></div>
    } else {
        return <div>
            {items.data.map(item => (
                <div className="card mb-3 border-0" style={{ backgroundColor: "#202020" }}>
                    <div className="card-body w-100 mx-auto">
                        <h5 className="card-title text-white">Title: {item.title}</h5>
                        <p className="card-text">Author: {item.author}</p>
                        <p className="card-text">Description: {item.description}</p>
                        <p className="card-text">Source: {item.source}</p>
                        <a href={item.url} className="btn btn-primary w-25" target="_blank" role="button">View Article</a>
                    </div>
                </div>
            ))}
        </div>
    }
}
export default MyComponent;
