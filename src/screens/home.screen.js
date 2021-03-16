import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import services from "../endpoints/services.rest";
import WineItem from "../components/wine.item";

const HomeScreen = () => {
    const [wines, setWines] = useState(null);

    const fetchWines = async () => {
        try {
            const response = await services.getAllWines();
            setWines(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchWines();
    }, []);

    if (!wines) {
        return (
            <Container>
                <Col>
                    <p>Loading data ...</p>
                </Col>
            </Container>
        );
    }

    return (
        <Container style={{ padding: 10 }}>
            <Row>
                {wines.map((item) => (
                    <WineItem key={item._id} _id={item._id} item={item} />
                ))}
            </Row>
        </Container>
    );
};

export default HomeScreen;
