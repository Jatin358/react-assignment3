import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Dashboad from "./Dashboard";
import '../component.css';
import LoginService from "../services/LoginService";


function CardComponent(props){

    const [id,setid] = useState(0)

    function addNews(){
        console.log(props);
        LoginService.loginData('http://localhost:3000/', props, false)
        .then((response)=>{
            console.log(response);
        }).catch()
    }

    return (
        <div className="col-4">
            <Card className="mb-4 mt-4" style={{ width: '100%' }}>
                <Card.Img src={props.urlToImage} variant="top" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Title>
                        {props.author}
                    </Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="primary" className="button mb-3" onClick={()=>{
                        setid(id+1)
                        console.log(props)
                        const data = {...props,id:id}
                        LoginService.Addnews('http://localhost:3000/readnow',data).then(res =>{
                            console.log(res)
                        })
                    }} >Read Later</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default CardComponent;