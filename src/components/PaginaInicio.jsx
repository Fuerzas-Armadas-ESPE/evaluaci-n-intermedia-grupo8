import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bdvqyafbthbxmmvxxvds.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkdnF5YWZidGhieG1tdnh4dmRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2NjEyMjMsImV4cCI6MjAyMjIzNzIyM30.xbhF8-HG2XlVQGqF41Y6QXCiaMpmeSUZfxWerQ_okZ4';
const supabase = createClient(supabaseUrl, supabaseKey);

const PaginaInicio = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const { user, error } = await supabase.auth.signIn({
                email,
                password,
            });

            if (error) {
                console.error(error);
            } else {
                console.log('Inicio de sesión exitoso', user);
                // Redirigir a la página de funciones después del inicio de sesión exitoso
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Iniciar sesión</h1>
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
            <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
    );
};

export default PaginaInicio;