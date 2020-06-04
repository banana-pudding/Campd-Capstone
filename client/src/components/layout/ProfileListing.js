// Listing.js

import React from 'react';
import {Card, Button} from 'react-bootstrap'
import './Style.scss';
import { Link } from "react-router-dom";


export default ({ project: { name, owner, status, description, file, _id }, onDelete, onView }) => {



  const newTo ={
    pathname: "/viewprofileproject"
  }

    const statusStyle = function(){
        if (status === 'Pending'){
            return "text-warning"
        } else if (status === 'Complete') {
            return "text-danger"
        } else if (status === 'Active'){
            return "text-success"
        }
    }



    return (
        <Card className="mb-3 rounded" bg="light">
            <Card.Body>
                <Card.Title as="h2">{ name }</Card.Title>
                <Card.Subtitle as='h5' className="text-muted">{ owner }</Card.Subtitle>
                <Card.Text className='mt-3'>
                    <p>{ description }</p>
                </Card.Text>
                <p>Status: <span className={statusStyle()}>{ status }</span></p>


                <Button className="btn btn-primary text-white" type="button" >
                    <Link to={newTo} onClick={() => onView(_id)} className="link"> View </Link>
                </Button>
                <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)}>
                    Remove
                </button>
            </Card.Body>
        </Card>
    );
};
