import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Importa la instancia de Supabase

const PaginaInicioSesion = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInicioSesion = async () => {
        try {
            // Inicia sesión con el email y la contraseña proporcionados
            const { user, error } = await supabase.auth.signIn({
                email,
                password,
            });

            if (error) {
                throw error;
            }

            // Redirige al usuario a la página principal después de iniciar sesión
            // Puedes personalizar esto según tus necesidades
            window.location.href = '/home';
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleInicioSesion}>Iniciar Sesión</button>
        </div>
    );
};

export default PaginaInicioSesion;
