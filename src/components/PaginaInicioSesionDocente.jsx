import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Importa la instancia de Supabase

const PaginaInicioSesionDocente = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [usuario, setUsuario] = useState('');
    const [rolID, setRolID] = useState('');

    const handleInicioSesion = async () => {
        try {
            const { user, error } = await supabase.auth.signIn({
                email,
                password,
            });

            if (error) {
                throw error;
            }

            // Aquí puedes redirigir al usuario a la página de funciones después del inicio de sesión exitoso
        } catch (error) {
            console.error('Error al iniciar sesión:', error.message);
        }
    };

    const handleRegistroDocente = async () => {
        try {
            const { user, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                throw error;
            }

            // Aquí puedes redirigir al usuario a la página de funciones después del registro exitoso
        } catch (error) {
            console.error('Error al registrar docente:', error.message);
        }
    };

    return (
        <div>
            <h1>Iniciar sesión como docente</h1>
            <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleInicioSesion}>Iniciar sesión</button>

            <h1>Registro de docente</h1>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="text"
                placeholder="Usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
            />
            <input
                type="text"
                placeholder="Rol ID"
                value={rolID}
                onChange={(e) => setRolID(e.target.value)}
            />
            <button onClick={handleRegistroDocente}>Registrar docente</button>
        </div>
    );
};

export default PaginaInicioSesionDocente;