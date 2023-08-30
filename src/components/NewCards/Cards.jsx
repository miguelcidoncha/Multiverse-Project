import React from "react";
import '../../views/comics/comics.css'
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

const Cards = ({products, setUpdateList, updateList, handleCloseModal, handleOpenModal, setDataModal}) => {


    const URL = "http://localhost:3001/products"

    const handleDelete = async () => {

        Swal.fire({
            title: `Estás seguro de eliminar ${products.type} ?`,
            text: "Esta acción no se puede deshacer!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, Eliminarlo!'
          }).then((result) => {
            if (result.isConfirmed) {
                
                axios.delete(`${URL}/${products.id}`).then((response) => {
                    if (response.status === 200) {
                        Swal.fire(
                            'Eliminado!',
                            `Se eliminó con éxito el registro ${products.type}!`,
                            'success'
                        )
                        setUpdateList(!updateList)
                    }else {
                        Swal.fire(
                            'Error!',
                            'Hubo un problema al elminar el registro!',
                            'error'
                        )
                    }
                })
            }
          })
    }

    const handleEdit = () => {
        handleOpenModal();
        setDataModal(products)
    }




    return (
        <div className="col-4 mb-3">
            <Card>
                <img src={products.image} alt={products.type} className="card-img-top image-card"/>
                <Card.Body >
                    <Card.Title className="text-center">{products.type}</Card.Title>
                    <ListGroup className="mb-2 mx-5">
                        <ListGroupItem><strong>Nombre:</strong>{products.name}</ListGroupItem>
                        <ListGroupItem><strong>Precio:</strong>{products.price}</ListGroupItem>
                    </ListGroup>
                    <button className="btn btn-danger me-2" onClick={handleDelete}>Eliminar</button>
                    <button className="btn btn-primary me-2" onClick={handleEdit}>Editar</button>
                    
                </Card.Body>
            </Card>
        </div>





    )
    
    
}

export default Cards;
