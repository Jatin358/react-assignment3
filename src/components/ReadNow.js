import React ,{useEffect,useState} from "react";
import Card from "./Card";
import '../../src/App.css';
import { Button } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
function ReadNow() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(1);
    let arr = [];
    let counter = count; let categoryNews = 'http://localhost:3000/readnow'
     useEffect(() => {
        fetch(categoryNews)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    console.log(result);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                })
    }, [count, setCount])
    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="row body-div container-fluid">
                <Header />
                {
                    items.map(item => (
                        <Card
                            title={item.title}
                            author={item.author}
                            urlToImage={item.urlToImage}
                            description={item.description}
                        />))
                }
                {/* <div className="text-end">
                    <Button onClick={() => setCount(count + -1)}>Prev</Button>
                    <Button className="ms-4" onClick={() => setCount(count + 1)} >Next</Button>
                    <div className="mt-4">                        <p className="count">Page:{count}</p>
                    </div>
                </div> */}
                <Footer />
            </div>)
    }
}
export default ReadNow;