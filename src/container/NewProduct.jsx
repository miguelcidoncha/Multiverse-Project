import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'





const NewProduct = () => {
   
    const navigate = useNavigate();

    const [data, setData] = useState({type:"", name:"", price:"", image:""})
   
 

    const handleChange = ({target}) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const URL = "http://localhost:3000/products"


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(URL,data);
        if (response.status === 201) {
            Swal.fire(
                'Guardado!',
                `El registro ${response.data.type} ha sido guardado exitosamente!`,
                'success'
            )
            navigate.push('/')
        }else {
            Swal.fire(
                'Error!',
                'Hubo un problema al crear el registro!',
                'error'
            )
        }
    }








    return (
        <Container>
        <h1 className="text-center">Nuevo Producto</h1>
        <Form
        onSubmit={handleSubmit}
        >
            <Form.Group className="mb-3">
                
                <select 
                className="form-control"
                name="type"
                onChange={handleChange}
                required
                >
                    <option value="">Selecciona una opción</option>
                    <option value="Funko">Funko Pop</option>
                    <option value="Camiseta">Camiseta</option>
                    <option value="Camiseta">Figura</option>
                    <option value="Camiseta">Poster</option>
                    <option value="Camiseta">Comic</option>
                </select>
               
                
            </Form.Group>
        </Form>
        <Form>
            <Form.Group className="mb-3">
                <Form.Control
                type="text"
                name="name"
                placeholder="Nombre"
                value={data.name} 
                onChange={handleChange}
                required
                />
            </Form.Group>
        </Form>
        <Form>
            <Form.Group className="mb-3">
                <Form.Control
                type="number"
                name="price"
                placeholder="Precio"
                value={data.price} 
                onChange={handleChange}
                required
                />
            </Form.Group>
        </Form>
        <Form>
            <Form.Group className="mb-3">
                <Form.Control
                type="text"
                name="image"
                placeholder="URL de la imagen"
                value={data.image} 
                onChange={handleChange}
                required
                />
            </Form.Group>
            <button className="btn btn-success mb-3">Guardar</button>
        </Form>
    </Container>
    )
    
}

export default NewProduct