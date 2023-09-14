import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Modal,
  Row,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Swal from "sweetalert2";
import "./Register.css";

const Register = () => {
  const URL = "https://localhost:7106";

  const getData = async () => {
    const response = await axios.get(URL);
    return response;
  };

  const [list, setList] = useState([]);
  const [updateList, setUpdateList] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState({
    type: "",
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const [editProductId, setEditProductId] = useState(null);

  const handleCloseModal = () => {
    setShowModal(false);
    setEditProductId(null);
  };

  const handleOpenModal = () => {
    if (editProductId !== null) {
      const productToEdit = list.find(
        (product) => product.id === editProductId
      );
      if (productToEdit) {
        setDataModal({
          type: productToEdit.type,
          name: productToEdit.name,
          description: productToEdit.description,
          price: productToEdit.price,
          image: productToEdit.image,
        });
      }
    } else {
      setDataModal({
        type: "",
        name: "",
        description: "",
        price: "",
        image: "",
      });
    }
    setShowModal(true);
  };

  const handleNewProductChange = (e) => {
    setDataModal({
      ...dataModal,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (product) => {
    setEditProductId(product.id);
    handleOpenModal();
  };

  const handleDelete = async (productId, productName) => {
    const confirmation = await Swal.fire({
      title: `¿Are you sure to remove ${productName}?`,
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#aa8caf",
      cancelButtonText: "Cancel",
      confirmButtonText: "Yes, Delete.",
    });

    if (confirmation.isConfirmed) {
      try {
        const response = await axios.delete(`${URL}/${productId}`);

        if (response.status === 200) {
          Swal.fire(
            "Delete!",
            `The record with the ID was successfully deleted: "${productId}".`,
            "success"
          );
          setUpdateList(!updateList);
        } else {
          Swal.fire(
            "Error!",
            "Hubo un problema al eliminar el registro!",
            "error"
          );
        }
      } catch (error) {
        console.error("Error deleting the product:", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const actionMessage = editProductId ? "Update" : "keep";

    const confirmation = await Swal.fire({
      title: `¿Are you sure to  ${actionMessage} this product?`,
      text: "This action can not be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#007BFF",
      cancelButtonColor: "#aa8caf",
      cancelButtonText: "Cancel",
      confirmButtonText: `Yes, ${
        actionMessage.charAt(0).toUpperCase() + actionMessage.slice(1)
      }.`,
    });

    if (confirmation.isConfirmed) {
      try {
        if (editProductId !== null) {
          const response = await axios.put(
            `${URL}/${editProductId}`,
            dataModal
          );
          if (response.status === 200) {
            Swal.fire(
              "Updated!",
              `The product hs been successfully updated!.`,
              "success"
            );
            handleCloseModal();
            setUpdateList(!updateList);
          } else {
            Swal.fire(
              "Error!",
              "There was a problem updating the product!.",
              "error"
            );
          }
        } else {
          const response = await axios.post(URL + "/Product/Post", dataModal);
          if (response.status === 201) {
            Swal.fire(
              "Save!",
              `The new product has been successfully added!`,
              "success"
            );
            handleCloseModal();
            setUpdateList(!updateList);
          } else {
            Swal.fire(
              "Error!",
              "there was a problem adding the new product!",
              "error"
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
      const productToEdit = list.find(
        (product) => product.id === editProductId
      );
      if (productToEdit) {
        setDataModal({
          type: productToEdit.type,
          name: productToEdit.name,
          description: productToEdit.description,
          price: productToEdit.price,
          image: productToEdit.image,
        });
      }
    }
  }, [editProductId, list]);

  return (
    <Container id="container1" className="mb-5 mt-5">
      <Button id="buttom-add-new" onClick={handleOpenModal}>
        Add new Product
      </Button>

      <Row>
        {list.map((product, index) => (
          <div key={index} className="col-4 mb-3">
            <Card>
              <img
                src={product.image}
                alt={product.type}
                className="card-img"
              />
              <Card.Body className="card-body">
                <Card.Title className="text-center">{product.type}</Card.Title>
                <ListGroup className="mb-2 mx-5">
                  <ListGroupItem>
                    <strong>Name:</strong>
                    {product.name}
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Description:</strong>
                    {product.description}
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Price:</strong>
                    {product.price}
                  </ListGroupItem>
                </ListGroup>
                <div id="mix">
                  <button
                    className="btn btn-danger me-3"
                    onClick={() => handleDelete(product.id, product.name)}
                  >
                    🗑️
                  </button>
                  <button
                    className="btn btn-success me-3"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>
            {editProductId ? "Edit Product:" : "Add New Product"}
          </Modal.Title>
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
                <option value="">Select an option:</option>
                <option value="Funko">Funko Pop</option>
                <option value="Shirt">Shirt</option>
                <option value="Figure">Figure</option>
                <option value="Poster">Poster</option>
                <option value="Comic">Comic</option>
              </select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Reference</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Name product"
                value={dataModal.name}
                onChange={handleNewProductChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="description"
                placeholder="Description"
                value={dataModal.description}
                onChange={handleNewProductChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="price"
                placeholder="Price"
                value={dataModal.price}
                onChange={handleNewProductChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="image"
                placeholder="URL Image"
                value={dataModal.image}
                onChange={handleNewProductChange}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
            <button className="btn btn-success mb-3" type="submit">
              {editProductId ? "Update" : "Keep"}
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default Register;
