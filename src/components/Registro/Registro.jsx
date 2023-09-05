import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Form, Modal, Row, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './Registro.css';

const Registro = () => {
    const URL = "http://localhost:3000/products";

    const getData = async () => {
        const response = await axios.get(URL);
        return response;
    }

    const [list, setList] = useState([]);
    const [updateList, setUpdateList] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [dataModal, setDataModal] = useState({
        type: '',
        name: '',
        price: '',
        image: ''
    });

    const [editProductId, setEditProductId] = useState(null);

    const handleCloseModal = () => {
        setShowModal(false);
        setEditProductId(null);
    };

    const handleOpenModal = () => {
        if (editProductId !== null) {
            const productToEdit = list.find(product => product.id === editProductId);
            if (productToEdit) {
                setDataModal({
                    type: productToEdit.type,
                    name: productToEdit.name,
                    price: productToEdit.price,
                    image: productToEdit.image
                });
            }
        } else {
            setDataModal({
                type: '',
                name: '',
                price: '',
                image: ''
            });
        }
        setShowModal(true);
    };

    const handleNewProductChange = (e) => {
        setDataModal({
            ...dataModal,
            [e.target.name]: e.target.value
        });
    };

    const handleEdit = (product) => {
        setEditProductId(product.id);
        handleOpenModal();
    };

    const handleDelete = async (productId, productName) => {
        const confirmation = await Swal.fire({
            title: `¿Estás seguro de eliminar ${productName}?`,
            text: "Esta acción no se puede deshacer.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#aa8caf',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, Eliminarlo'
        });

        if (confirmation.isConfirmed) {
            try {
                const response = await axios.delete(`${URL}/${productId}`);
                
                if (response.status === 200) {
                    Swal.fire(
                        'Eliminado!',
                        `Se eliminó con éxito el registro con ID ${productId}!`,
                        'success'
                    );
                    setUpdateList(!updateList);
                } else {
                    Swal.fire(
                        'Error!',
                        'Hubo un problema al eliminar el registro!',
                        'error'
                    );
                }
            } catch (error) {
                console.error('Error al eliminar el producto:', error);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const actionMessage = editProductId ? 'actualizar' : 'guardar';

        const confirmation = await Swal.fire({
            title: `¿Estás seguro de ${actionMessage} este producto?`,
            text: "Esta acción no se puede deshacer.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#007BFF',
            cancelButtonColor: '#aa8caf',
            cancelButtonText: 'Cancelar',
            confirmButtonText: `Sí, ${actionMessage.charAt(0).toUpperCase() + actionMessage.slice(1)}lo`
        });

        if (confirmation.isConfirmed) {
            try {
                if (editProductId !== null) {
                    const response = await axios.put(`${URL}/${editProductId}`, dataModal);
                    if (response.status === 200) {
                        Swal.fire(
                            'Actualizado!',
                            `El producto ha sido actualizado exitosamente!`,
                            'success'
                        );
                        handleCloseModal();
                        setUpdateList(!updateList);
                    } else {
                        Swal.fire(
                            'Error!',
                            'Hubo un problema al actualizar el producto!',
                            'error'
                        );
                    }
                } else {
                    const response = await axios.post(URL, dataModal);
                    if (response.status === 201) {
                        Swal.fire(
                            'Guardado!',
                            `El nuevo producto ha sido agregado exitosamente!`,
                            'success'
                        );
                        handleCloseModal();
                        setUpdateList(!updateList);
                    } else {
                        Swal.fire(
                            'Error!',
                            'Hubo un problema al agregar el nuevo producto!',
                            'error'
                        );
                    }
                }
            } catch (error) {
                console.error(`Error al ${actionMessage} el producto:`, error);
            }
        }
    };

    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        });
    }, [updateList]);

    useEffect(() => {
        if (editProductId !== null) {
            const productToEdit = list.find(product => product.id === editProductId);
            if (productToEdit) {
                setDataModal({
                    type: productToEdit.type,
                    name: productToEdit.name,
                    price: productToEdit.price,
                    image: productToEdit.image
                });
            }
        }
    }, [editProductId, list]);

    return (
        <Container className='mb-5 mt-5'>
            <Row>
                {list.map((product, index) => (
                    <div key={index} className="col-4 mb-3">
                        <Card>
                            <img src={product.image} alt={product.type} className="card-img top image-card" />
                            <Card.Body className="car-body">
                                <Card.Title className="text-center">{product.type}</Card.Title>
                                <ListGroup className="mb-2 mx-5">
                                    <ListGroupItem><strong>Nombre:</strong>{product.name}</ListGroupItem>
                                    <ListGroupItem><strong>Precio:</strong>{product.price}</ListGroupItem>
                                </ListGroup>
                                <button className="btn btn-danger me-2" onClick={() => handleDelete(product.id, product.name)}>Eliminar</button>
                                <button className="btn btn-success me-2" onClick={() => handleEdit(product)}>Editar</button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Row>

            <Button onClick={handleOpenModal}>Agregar Nuevo Producto</Button>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header>
                    <Modal.Title>{editProductId ? 'Editar Producto' : 'Agregar Nuevo Producto'}</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <select
                                className="form-control"
                                name="type"
                                onChange={handleNewProductChange}
                                required
                                value={dataModal.type}
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="Funko">Funko Pop</option>
                                <option value="Camiseta">Camiseta</option>
                                <option value="Figura">Figura</option>
                                <option value="Poster">Poster</option>
                                <option value="Comic">Comic</option>
                            </select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Referencia</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                value={dataModal.name}
                                onChange={handleNewProductChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="number"
                                name="price"
                                placeholder="Precio"
                                value={dataModal.price}
                                onChange={handleNewProductChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="image"
                                placeholder="URL de la imagen"
                                value={dataModal.image}
                                onChange={handleNewProductChange}
                                required
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" type="button" onClick={handleCloseModal}>Cancelar</button>
                        <button className="btn btn-success mb-3" type="submit">{editProductId ? 'Actualizar' : 'Guardar'}</button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </Container>
    );
};

export default Registro;
