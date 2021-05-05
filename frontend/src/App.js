import React, { useState, useEffect } from 'react';
import Cadastro from './components/Cadastro.js';
import Login from './components/Login.js';

export default function App() {
  const [loginStatus, setloginStatus] = useState(false);

  useEffect(() => { 
    setloginStatus(false);
  },[]);
  
  const handleSubmit = (status) => {
    console.log(status);
    setloginStatus(status);
  }

  const handleNewUser = (status) => {
    console.log(status);
    setloginStatus(status);
  }
        return (
      <div>
       {loginStatus === false && <Login 
                                    onSubmit={handleSubmit} 
                                    onNewUser={handleNewUser}/> }
        {loginStatus === "cadastrar" && <Cadastro 
                                            onSubmit={handleSubmit} />}
        {loginStatus === "logar" && <Login 
                                        onSubmit={handleSubmit} 
                                        onNewUser={handleNewUser}/> }
        {loginStatus === "voltar" && <App />} 
      </div>
        );
}