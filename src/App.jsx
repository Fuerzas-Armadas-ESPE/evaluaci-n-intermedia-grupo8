import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaRegistroDocente from './components/PaginaRegistroDocente';
import PaginaInicioSesionDocente from './components/PaginaInicioSesionDocente';
import PaginaInicio from './components/PaginaInicio';

const App = () => {
  const [session, setSession] = useState(supabase.auth.session());

  useEffect(() => {
    const sessionChangeListener = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => {
      sessionChangeListener.unsubscribe();
    };
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      console.log('User logged in:', user);
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  const handleRegister = async (name, email, username, password, roleId) => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      // Store additional user details in the database
      await supabase.from('User').insert([
        { name, email, username, password, roleId },
      ]);

      console.log('User registered:', user);
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/registro-docente" element={<PaginaRegistroDocente onRegister={handleRegister} />} />
        <Route
          path="/inicio-sesion-docente"
          element={<PaginaInicioSesionDocente onLogin={handleLogin} />}
        />
        <Route
          path="/"
          element={session ? <PaginaInicio /> : <PaginaInicioSesionDocente onLogin={handleLogin} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
