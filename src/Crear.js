import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, Row, Col, TabContainer } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

function Crear() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tema, setTema] = useState("");  // Agregamos el estado para el campo "tema"

  async function createProduct() {
    try {
      const { data, error } = await supabase
        .from("Tema")
        .insert({
          Titulo: name,
          Objetivo: description,
          Actividad: tema  // Incluimos el campo "tema" en el insert
        })
        .single();

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={12} md={6}>
          <h3>Crear Actividad</h3>

          <TextField id="name" fullWidth label="Tema" variant="filled" onChange={(e) => setName(e.target.value)}
            required/>

          <br></br>
          <br></br>

          <TextField id="description" fullWidth label="Objetivo de la Actividad" variant="filled"  onChange={(e) => setDescription(e.target.value)}
            required/>

          
          <br></br>
          <br></br>

          <TextField id="tema" fullWidth label="Activadad del Tema" variant="filled"  onChange={(e) => setTema(e.target.value)}
            required/>

          <br></br>
          <br></br>

          <Button variant="contained" fullWidth color="success" onClick={() => createProduct()} endIcon={<SendIcon />}>
          Crear
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Crear;
