import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import services from "../endpoints/services.rest";

const EditScreen = ({ match: { params } }) => {
    const history = useHistory();
    const id = params.id;
    const [_id, setId] = useState("");
    const [title, settitle] = useState("");
    const [country, setWineCountry] = useState("");
    const [region, setregion] = useState("");
    const [lage, setlage] = useState("");
    const [sweetness, setsweetness] = useState("");
    const [sugarLevel, setsugarLevel] = useState("");
    const [wineType, setwineType] = useState("");
    const [wineColor, setwineColor] = useState("");
    const [description, setdescription] = useState("");
    const [alcoholLevel, setalcoholLevel] = useState("");
    const [acidity, setacidity] = useState("");
    const [winery, setwinery] = useState("");
    const [grape, setgrape] = useState("");
    const [appellation, setappellation] = useState("");
    const [vintage, setVintage] = useState("");


    const loadWine = async () => {
        try {
            const resp = await services.getWine(id);
            const wine = resp.data;
            setId(wine._id)
            settitle(wine.title)
            setWineCountry(wine.country);
            setVintage(wine.vintage);
            setregion(wine.region);
            setlage(wine.lage);
            setsweetness(wine.sweetness);
            setsugarLevel(wine.sugarLevel);
            setwineType(wine.wineType);
            setwineColor(wine.wineColor);
            setdescription(wine.description);
            setalcoholLevel(wine.alcoholLevel);
            setacidity(wine.acidity);
            setwinery(wine.winery);
            setgrape(wine.grape);
            setappellation(wine.appellation);
        } catch (error) { alert(error); }

    };

    useEffect(() => {
        loadWine();
    }, []);



    const handleSubmit = async () => {
        try {
            if (!country || !vintage) {
                return;
            }
            const wine = {
                _id,
                title,
                country,
                region,
                lage,
                vintage,
                sweetness,
                sugarLevel,
                wineType,
                wineColor,
                description,
                alcoholLevel,
                acidity,
                winery,
                grape,
                appellation

            };
            console.log(wine)
            await services.updateWine(wine);
            alert("Data saved");
            history.replace('/');
        } catch (error) {
            console.log(error);
            alert(error);
        }
    };

    if (!country || !vintage) {
        return (
            <Container>
                <Col>
                    <p>Loading data ...</p>
                </Col>
            </Container>
        );
    }

    return (
        <Container style={{ padding: 16 }}>
            <Row>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                onChange={(e) => settitle(e.target.value)}
                                value={title}
                                type="text"
                                placeholder="Enter Title... "
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                onChange={(e) => setWineCountry(e.target.value)}
                                value={country}
                                type="text"
                                placeholder="Enter country name ... "
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Vintage</Form.Label>
                            <Form.Control
                                onChange={(e) => setVintage(e.target.value)}
                                value={vintage}
                                type="text"
                                placeholder="Enter Vinatge ..."
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Region</Form.Label>
                            <Form.Control
                                onChange={(e) => setregion(e.target.value)}
                                value={region}
                                type="text"
                                placeholder="Enter Vinatge ..."
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Lage</Form.Label>
                            <Form.Control
                                onChange={(e) => setlage(e.target.value)}
                                value={lage}
                                type="text"
                                placeholder="Enter lage ..."
                                required
                            />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label>Sweetness</Form.Label>
                            <Form.Control
                                onChange={(e) => setsweetness(e.target.value)}
                                value={sweetness}
                                type="text"
                                placeholder="Enter sweetness ..."
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Sugar Level</Form.Label>
                            <Form.Control
                                onChange={(e) => setsugarLevel(e.target.value)}
                                value={sugarLevel}
                                type="text"
                                placeholder="Enter sugarLevel ..."
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Wine Type</Form.Label>
                            <Form.Control
                                onChange={(e) => setwineType(e.target.value)}
                                value={wineType}
                                type="text"
                                placeholder="Enter wineType ..."
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Wine Color</Form.Label>
                            <Form.Control
                                onChange={(e) => setwineColor(e.target.value)}
                                value={wineColor}
                                type="text"
                                placeholder="Enter wineColor ..."
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                onChange={(e) => setdescription(e.target.value)}
                                value={description}
                                type="text"
                                placeholder="Enter description ..."
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Alcohol Level</Form.Label>
                            <Form.Control
                                onChange={(e) => setalcoholLevel(e.target.value)}
                                value={alcoholLevel}
                                type="text"
                                placeholder="Enter alcoholLevel ..."
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Acidity</Form.Label>
                            <Form.Control
                                onChange={(e) => setacidity(e.target.value)}
                                value={acidity}
                                type="text"
                                placeholder="Enter acidity ..."
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Winery</Form.Label>
                            <Form.Control
                                onChange={(e) => setwinery(e.target.value)}
                                value={winery}
                                type="text"
                                placeholder="Enter winery ..."
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Appellation</Form.Label>
                            <Form.Control
                                onChange={(e) => setappellation(e.target.value)}
                                value={appellation}
                                type="text"
                                placeholder="Enter appellation ..."
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Grape</Form.Label>
                            <Form.Control
                                onChange={(e) => setgrape(e.target.value)}
                                value={grape}
                                type="text"
                                placeholder="Enter grape ..."
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Button onClick={handleSubmit} variant="primary">
                                Update
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default EditScreen;
