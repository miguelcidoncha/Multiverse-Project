// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Cards from '../NewCards/Cards';
// import { Container, Form, Modal, Row } from 'react-bootstrap';
// import Swal from 'sweetalert2';


// const Registro = () => {

//     const URL = " http://localhost:3000/products"
    
//     const getData = async () => {
//       const response = axios.get(URL);
//       return response;
//     }

//     const [list, setList] = useState([])
//     const [updateList, setUpdateList] = useState(false);
//     const [showModal, setShowModal] = useState(false);
//     const [dataModal, setDataModal] = useState({})
    
//     const handleCloseModal = () => {setShowModal(false)}
//     const handleOpenModal = () => {setShowModal(true)}

//     const handleChangeModal = ({target}) => {
//         setDataModal({
//             ...dataModal,
//             [target.name]: target.value
//         })
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await axios.put(`${URL}/${dataModal.id}`, dataModal)
//         if (response.status === 200) {
//             Swal.fire(
//                 'Guardado!',
//                 `El registro ${response.data.type} ha sido actualizado exitosamente!`,
//                 'success'
//             )
//             handleCloseModal();
//             setUpdateList(!updateList)
//         }else {
//             Swal.fire(
//                 'Error!',
//                 'Hubo un problema al actualizar el registro!',
//                 'error'
//             )
//         }
//     }


//     useEffect(() => {
//       getData().then((response) => {
//         setList(response.data);
//       })
//     }, [updateList]) 
      
    

//     return (
//       <Container className='mb-5 mt-5'>
//         <Row>
//            {
//         list.map((products,index) => (
//           <Cards 
//           key={index}
//           products={products}
//           setUpdateList={setUpdateList}
//           updateList={updateList}
//           handleCloseModal= {handleCloseModal}
//           handleOpenModal = {handleOpenModal}
//           setDataModal= {setDataModal}
//           />
//         ))
//            }
           
//         </Row>
        
//         <Modal show={showModal} onHide={handleCloseModal}>
//     <Modal.Header>
//         <Modal.Title>Actualizar Datos</Modal.Title>
//     </Modal.Header>

//     <Form onSubmit={handleSubmit}>
//         <Modal.Body>
//             <Form.Group className="mb-3">
//                 <select 
//                     className="form-control"
//                     name="type"
//                     onChange={handleChangeModal}
//                     required
//                 >
//                     <option value="">Selecciona una opción</option>
//                     <option value="Funko">Funko Pop</option>
//                     <option value="Camiseta">Camiseta</option>
//                     <option value="Camiseta">Figura</option>
//                     <option value="Camiseta">Poster</option>
//                     <option value="Camiseta">Comic</option>
//                 </select>
//             </Form.Group>

//             <Form.Group className="mb-3">
//                 <Form.Label>Referencia</Form.Label>
//                 <Form.Control
//                     type="text"
//                     name="name"
//                     placeholder="Nombre"
//                     value={dataModal.name} 
//                     onChange={handleChangeModal}
//                     required
//                 />
//             </Form.Group>

//             <Form.Group className="mb-3">
//                 <Form.Control
//                     type="number"
//                     name="price"
//                     placeholder="Precio"
//                     value={dataModal.price} 
//                     onChange={handleChangeModal}
//                     required
//                 />
//             </Form.Group>

//             <Form.Group className="mb-3">
//                 <Form.Control
//                     type="text"
//                     name="image"
//                     placeholder="URL de la imagen"
//                     value={dataModal.image} 
//                     onChange={handleChangeModal}
//                     required
//                 />
//             </Form.Group>
//         </Modal.Body>

//         <Modal.Footer>
//             <button className="btn btn-secondary" type="reset" onClick={handleCloseModal}>Cancelar</button>
//             <button className="btn btn-success mb-3">Guardar</button>
//         </Modal.Footer>
//     </Form>
// </Modal>
//       </Container>
//     );
//   };
  
//   export default Registro;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Cards from '../NewCards/Cards';
// import { Container, Form, Modal, Row } from 'react-bootstrap';
// import Swal from 'sweetalert2';

// const Registro = () => {
//     const URL = "http://localhost:3000/products";
    
//     const getData = async () => {
//         const response = await axios.get(URL);
//         return response;
//     }

//     const [list, setList] = useState([]);
//     const [updateList, setUpdateList] = useState(false);
//     const [showModal, setShowModal] = useState(false);
//     const [dataModal, setDataModal] = useState({});
//     const [newProductData, setNewProductData] = useState({
//         type: '',
//         name: '',
//         price: '',
//         image: ''
//     });

//     const handleCloseModal = () => setShowModal(false);
//     const handleOpenModal = () => setShowModal(true);

//     const handleChangeModal = ({ target }) => {
//         setDataModal({
//             ...dataModal,
//             [target.name]: target.value
//         });
//     }

//     const handleNewProductChange = (e) => {
//         setNewProductData({
//             ...newProductData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post(URL, newProductData);
//             if (response.status === 201) {
//                 Swal.fire(
//                     'Guardado!',
//                     `El nuevo producto ha sido agregado exitosamente!`,
//                     'success'
//                 );
//                 handleCloseModal();
//                 setUpdateList(!updateList);
//             } else {
//                 Swal.fire(
//                     'Error!',
//                     'Hubo un problema al agregar el nuevo producto!',
//                     'error'
//                 );
//             }
//         } catch (error) {
//             console.error('Error al agregar el nuevo producto:', error);
//         }
//     }

//     useEffect(() => {
//         getData().then((response) => {
//             setList(response.data);
//         });
//     }, [updateList]);

//     return (
//         <Container className='mb-5 mt-5'>
//             <Row>
//                 {list.map((products, index) => (
//                     <Cards
//                         key={index}
//                         products={products}
//                         setUpdateList={setUpdateList}
//                         updateList={updateList}
//                         handleCloseModal={handleCloseModal}
//                         handleOpenModal={handleOpenModal}
//                         setDataModal={setDataModal}
//                     />
//                 ))}
//             </Row>

//             <Modal show={showModal} onHide={handleCloseModal}>
//                 <Modal.Header>
//                     <Modal.Title>Agregar Nuevo Producto</Modal.Title>
//                 </Modal.Header>
//                 <Form onSubmit={handleSubmit}>
//                     <Modal.Body>
//                         <Form.Group className="mb-3">
//                             <select
//                                 className="form-control"
//                                 name="type"
//                                 onChange={handleNewProductChange}
//                                 required
//                             >
//                                 <option value="">Selecciona una opción</option>
//                                 <option value="Funko">Funko Pop</option>
//                                 <option value="Camiseta">Camiseta</option>
//                                 <option value="Figura">Figura</option>
//                                 <option value="Poster">Poster</option>
//                                 <option value="Comic">Comic</option>
//                             </select>
//                         </Form.Group>

//                         <Form.Group className="mb-3">
//                             <Form.Label>Referencia</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="name"
//                                 placeholder="Nombre"
//                                 value={newProductData.name}
//                                 onChange={handleNewProductChange}
//                                 required
//                             />
//                         </Form.Group>

//                         <Form.Group className="mb-3">
//                             <Form.Control
//                                 type="number"
//                                 name="price"
//                                 placeholder="Precio"
//                                 value={newProductData.price}
//                                 onChange={handleNewProductChange}
//                                 required
//                             />
//                         </Form.Group>

//                         <Form.Group className="mb-3">
//                             <Form.Control
//                                 type="text"
//                                 name="image"
//                                 placeholder="URL de la imagen"
//                                 value={newProductData.image}
//                                 onChange={handleNewProductChange}
//                                 required
//                             />
//                         </Form.Group>
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <button className="btn btn-secondary" type="button" onClick={handleCloseModal}>Cancelar</button>
//                         <button className="btn btn-success mb-3" type="submit">Guardar</button>
//                     </Modal.Footer>
//                 </Form>
//             </Modal>
//         </Container>
//     );
// };

// export default Registro;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../NewCards/Cards';
import { Container, Form, Modal, Row, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import '../Registro/Registro.css'

const Registro = () => {
    const URL = "http://localhost:3000/products";
    
    const getData = async () => {
        const response = await axios.get(URL);
        return response;
    }

    const [list, setList] = useState([]);
    const [updateList, setUpdateList] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [dataModal, setDataModal] = useState({});
    const [newProductData, setNewProductData] = useState({
        type: '',
        name: '',
        price: '',
        image: ''
    });

    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true);

    const handleChangeModal = ({ target }) => {
        setDataModal({
            ...dataModal,
            [target.name]: target.value
        });
    }

    const handleNewProductChange = (e) => {
        setNewProductData({
            ...newProductData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(URL, newProductData);
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
        } catch (error) {
            console.error('Error al agregar el nuevo producto:', error);
        }
    }

    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        });
    }, [updateList]);

    return (
        <Container className='mb-5 mt-5'>
            <Row>
                {list.map((products, index) => (
                    <Cards
                        key={index}
                        products={products}
                        setUpdateList={setUpdateList}
                        updateList={updateList}
                        handleCloseModal={handleCloseModal}
                        handleOpenModal={handleOpenModal}
                        setDataModal={setDataModal}
                    />
                ))}
            </Row>

            {/* Botón para abrir el modal de agregar nuevo producto */}
            <Button onClick={handleOpenModal}>Agregar Nuevo Producto</Button>

            {/* Modal para agregar nuevo producto */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header>
                    <Modal.Title>Agregar Nuevo Producto</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <select
                                className="form-control"
                                name="type"
                                onChange={handleNewProductChange}
                                required
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
                                value={newProductData.name}
                                onChange={handleNewProductChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="number"
                                name="price"
                                placeholder="Precio"
                                value={newProductData.price}
                                onChange={handleNewProductChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="image"
                                placeholder="URL de la imagen"
                                value={newProductData.image}
                                onChange={handleNewProductChange}
                                required
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" type="button" onClick={handleCloseModal}>Cancelar</button>
                        <button className="btn btn-success mb-3" type="submit">Guardar</button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </Container>
    );
};

export default Registro;









