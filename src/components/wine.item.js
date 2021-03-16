import React from "react";
import { Link } from 'react-router-dom';
import { Card, Button, Col, ListGroup } from "react-bootstrap";
import services from "../endpoints/services.rest";

const WineItem = ({ _id, country, vintage, item }) => {

  const deleteWine = async () => {
    try {
      await services.deleteWine(_id);
      alert("Item deleted");
      window.location.reload();
    } catch (error) { alert(error); }
  }

  return (
    <Col md="auto" style={{ marginTop: 10 }}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>

          <ListGroup variant="flush">
            <Card.Title>Title : {item.title}</Card.Title>
            <ListGroup.Item>
              Region : {item.region}
            </ListGroup.Item>
            <ListGroup.Item>
              Lage :  {item.lage}
            </ListGroup.Item>
            <ListGroup.Item>
              Sweetness : {item.sweetness}
            </ListGroup.Item>
            <ListGroup.Item>
              SugarLevel : {item.sugarLevel}
            </ListGroup.Item>
            <ListGroup.Item>
              WineType : {item.wineType}
            </ListGroup.Item>
            <ListGroup.Item>
              WineColor : {item.wineColor}
            </ListGroup.Item>
            <ListGroup.Item>
              Description : {item.description}
            </ListGroup.Item>
            <ListGroup.Item>
              Alcohol Level : {item.alcoholLevel}
            </ListGroup.Item>
            <ListGroup.Item>
              Vintage : {item.vintage}
            </ListGroup.Item>
            <ListGroup.Item>
              validEan : {item.validEan ? 'True' : 'False'}
            </ListGroup.Item>
            <ListGroup.Item>
              Acidity : {item.acidity}
            </ListGroup.Item>
            <ListGroup.Item>
              Winery : {item.winery}
            </ListGroup.Item>
            <ListGroup.Item>
              Grape : {item.grape}
            </ListGroup.Item>
            <ListGroup.Item>
              Appellation : {item.appellation}
            </ListGroup.Item>
          </ListGroup>
          <Link to={`/edit/${_id}`}>
            <Button variant="primary">Edit</Button>
          </Link>
          <Button onClick={deleteWine} style={{ marginLeft: 16 }} variant="danger">Delete</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default WineItem;
