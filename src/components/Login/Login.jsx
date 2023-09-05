import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css'; // Cambié el nombre del archivo CSS

const Login = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('El nombre es obligatorio'),
    lastName: Yup.string().required('Los apellidos son obligatorios'),
    email: Yup.string().email('Correo electrónico no válido').required('El correo electrónico es obligatorio'),
    password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
    mobile: Yup.string().matches(/^\d+$/, 'El número de móvil debe contener solo números').required('El número de móvil es obligatorio'),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Aquí puedes manejar la lógica de envío del formulario, por ejemplo, enviar los datos al servidor
    console.log('Formulario enviado:', values);
    resetForm();
  };

  return (
    <div className="register-container">
      <h2>Registro de Usuario</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="register-form">
            <div className="form-group">
              <label htmlFor="firstName">Nombre</label>
              <Field type="text" id="firstName" name="firstName" />
              <ErrorMessage name="firstName" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Apellidos</label>
              <Field type="text" id="lastName" name="lastName" />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Móvil</label>
              <Field type="text" id="mobile" name="mobile" />
              <ErrorMessage name="mobile" component="div" className="error" />
            </div>

            <button type="submit" className="register-button">Registrarse</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
