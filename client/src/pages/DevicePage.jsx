import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

const DevicePage = () => {
    const device = {
        id: 1,
        name: 'MSI Topchik',
        price: 90000,
        raiting: 5,
        img: 'https://static.1k.by/images/productsimages/ip/big/pp0/a/4604449/i78c456cf4.jpg'
    }

    return (
        <Container className={"mt-3"}>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row>
                        <h2>{device.name}</h2>
                        <div>Рейтинг: {device.raiting}</div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column justify-content-around align-items-center"
                        style={{width: 300, height: 300, }}
                    >
                       <h3>{device.price} руб.</h3>
                        <Button variant="primary">Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DevicePage;

