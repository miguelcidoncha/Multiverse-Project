import React from "react";
import { Container } from "react-bootstrap";
import Registro from "../components/Registro/Registro";


const App = () => {
    return(
        <Container fluid>
            <h1 className="text-center">Productos</h1>
            <Registro />

        </Container>
    )
}

export default App;