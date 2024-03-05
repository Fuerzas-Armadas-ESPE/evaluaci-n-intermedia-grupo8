import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { supabase } from './supabaseClient';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import TextField from '@mui/material/TextField';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
function ProductRow({ product, onDelete, onUpdate }) {

    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [tema, setTema] = useState(product.tema);
    const [pendiente, setPendiente] = useState(product.pendiente);

    async function updateProduct() {
        try {
            const { data, error } = await supabase
                .from("Tema")
                .update({
                    Titulo: name,
                    Objetivo: description,
                    Actividad: tema,
                    Calificacion: pendiente
                })
                .eq("id", product.id);

            if (error) throw error;
            window.location.reload();
        } catch (error) {
            alert(error.message);
        }
    }

    async function deleteProduct() {
        try {
            const { data, error } = await supabase
                .from("Tema")
                .delete()
                .eq("id", product.id);

            if (error) throw error;
            onDelete();
        } catch (error) {
            alert(error.message);
        }
    }

    function togglePendiente() {
        setPendiente(!pendiente);
    }

    return (
        
        <tr className='text-center'>
            <td>{product.Titulo}</td>
            <td>{product.Objetivo}</td>
            <td>{product.Actividad}</td>
            <td>{product.Calificacion}</td>
            <td>
                {/* Agregar la columna "Pendiente" con el checkbox y la lógica para cambiar la palabra */}
                <Checkbox 
                
                icon={<FavoriteBorder />} 
                checkedIcon={<Favorite />} 
                checked={pendiente}
                onChange={() => togglePendiente()} 
                label={pendiente ? "Realizado" : "Pendiente"}
                labelPlacement="end"/>
                
            </td>
       
            <td>
                {editing === false ? (
                    <>

                        <ButtonGroup aria-label="Basic button group">
                        
                            <Button color="error" onClick={() => deleteProduct()}>
                                Borrar
                            </Button>
                            <Button color="secondary" onClick={() => setEditing(true)}>
                                Editar
                            </Button>
                        </ButtonGroup>
                    </>
                ) : (
                    <>
                        <h4>Editar Tarea / Calificar</h4>
                        <Button size="sm" onClick={() => setEditing(false)}>Regresar</Button>
                        <br></br>
                        <TextField id="name" label="Nombre de la Tarea" variant="standard" defaultValue={product.name}
                            onChange={(e) => setName(e.target.value)}/>

                        <br></br>

                        <TextField id="description" label="Descripcion de la Tarea" variant="standard" defaultValue={product.description}
                            onChange={(e) => setDescription(e.target.value)}/>

                        <br></br>

                        <TextField id="tema" label="Tema de Tarea" variant="standard" defaultValue={product.tema}
                            onChange={(e) => setTema(e.target.value)}/>

                        <br></br>   

                        <TextField id="pendiente" label="Calificación" variant="filled" color="success" focused defaultValue={0} type="number"
                            onChange={(e) => setPendiente(e.target.value)}/>
                         
                        <br></br>
                        <Button onClick={() => updateProduct()} endDecorator={<KeyboardArrowRight />} color="success">
                        Actualizar
                        </Button>
                    </>
                )}
            </td>
        </tr>
    );
}

export default ProductRow;
