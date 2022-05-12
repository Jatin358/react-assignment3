import React, { useEffect, useState } from "react";
import Card from "./Card";
import '../component.css';
import { Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

function Dashboad() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(1);
    let arr = [];
    let counter = count;

    

    let categoryNews = 'https://newsapi.org/v2/top-headlines?category=Health&apikey=57dd386f0534425199873f4c370a6aca&page=' + counter;

    useEffect(() => {
        fetch(categoryNews)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    console.log(result.articles);
                    setItems(result.articles);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                })
    }, [count, setCount])

    const childToParent = (childToParent) =>{
        setItems(childToParent)
    }

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="row body-div container-fluid">
                <Header childToParent={childToParent} />
                {
                    items.map(item => (
                        <Card
                            title={item.title}
                            author={item.author}
                            urlToImage={item.urlToImage}
                            description={item.description}
                        />

                    ))
                }
                <div className="text-end">
                    {/* <Button onClick={() => setCount(count + -1)}>Prev</Button>
                    <Button className="ms-4" onClick={() => setCount(count + 1)} >Next</Button>
                    <div className="mt-4">

                        <p className="count">Page:{count}</p>
                    </div> */}
                </div>
                <Footer />
            </div>

        )
    }

}
export default Dashboad;