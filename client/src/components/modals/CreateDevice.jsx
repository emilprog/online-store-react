import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";


const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>{device.selectedType || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item
                                    onClick={e => device.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>{device.selectedBrand || "Выберите брэнд"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item
                                    onClick={e => device.setSelectedBrand(brand)}
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className={"mt-3"}
                        placeholder={"Введите название устройства"}
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className={"mt-3"}
                        placeholder={"Введите стоимость устройства"}
                    />
                    <Form.Control
                        className={"mt-3"}
                        placeholder={"Файл"}
                        type={"file"}
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row key={i} className="mt-3">
                            <Col md={4}>
                                <Form.Control
                                    placeholder={"Введите название свойства"}
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder={"Введите описсание свойства"}
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    variant={"outline-danger"}
                                    onClick={() => removeInfo(i.number)}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;