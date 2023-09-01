import CardsHandler from '../../Handler/Cardshandler';
import './registro.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';


const Registro = () => {

    const URL = " http://localhost:3000/products"
    
    const getData = async () => {
      const response = axios.get(URL);
      return response;
    }

    const [list, setList] = useState([])
    const [updateList, setUpdateList] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [dataModal, setDataModal] = useState({})
    
    const handleCloseModal = () => {setShowModal(false)}
    const handleOpenModal = () => {setShowModal(true)}

    const handleChangeModal = ({target}) => {
        setDataModal({
            ...dataModal,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.put(`${URL}/${dataModal.id}`, dataModal)
        if (response.status === 200) {
            Swal.fire(
                'Guardado!',
                `El registro ${response.data.type} ha sido actualizado exitosamente!`,
                'success'
            )
            handleCloseModal();
            setUpdateList(!updateList)
        }else {
            Swal.fire(
                'Error!',
                'Hubo un problema al actualizar el registro!',
                'error'
            )
        }
    }


    useEffect(() => {
      getData().then((response) => {
        setList(response.data);
      })
    }, [updateList]) 
      
    

    return (
      <Container className='mb-5 mt-5'>
        <Row>
           {
        list.map((products,index) => (
          <Cards 
          key={index}
          products={products}
          setUpdateList={setUpdateList}
          updateList={updateList}
          handleCloseModal= {handleCloseModal}
          handleOpenModal = {handleOpenModal}
          setDataModal= {setDataModal}
          />
        ))
           }
           
        </Row>
        
        <Modal show={showModal} onHide={handleCloseModal}>
    <Modal.Header>
        <Modal.Title>Actualizar Datos</Modal.Title>
    </Modal.Header>

    <Form onSubmit={handleSubmit}>
        <Modal.Body>
            <Form.Group className="mb-3">
                <select 
                    className="form-control"
                    name="type"
                    onChange={handleChangeModal}
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

            <Form.Group className="mb-3">
                <Form.Label>Referencia</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={dataModal.name} 
                    onChange={handleChangeModal}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control
                    type="number"
                    name="price"
                    placeholder="Precio"
                    value={dataModal.price} 
                    onChange={handleChangeModal}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    name="image"
                    placeholder="URL de la imagen"
                    value={dataModal.image} 
                    onChange={handleChangeModal}
                    required
                />
            </Form.Group>
        </Modal.Body>

        <Modal.Footer>
            <button className="btn btn-secondary" type="reset" onClick={handleCloseModal}>Cancelar</button>
            <button className="btn btn-success mb-3">Guardar</button>
        </Modal.Footer>
    </Form>
</Modal>
      </Container>
    );
  };
  
  export default Registro;







