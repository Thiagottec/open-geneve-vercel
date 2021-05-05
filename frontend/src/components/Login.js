import React, { useState } from "react";
export default function Login( { onSubmit, onNewUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleActionClick = (event) => {
    if (event.target.id === 'login') {
      onSubmit("logar");
    } else { 
      onNewUser("cadastrar");
    };
  };
    
  return ( 
    <div className="container">
      <div  className="center card-panel green darken-1">
      <h3 style={styles.title}>Open Genve Login</h3>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" class="validate" type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-field col s12">
          <input className="" type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
      </div>
      <div className="container">
        <div id="login" className="waves-effect green darken-1 btn left"  onClick={handleActionClick}>Login</div>
        <div id="cadastro" className="waves-effect green darken-1 btn right" onClick={handleActionClick}>Cadastrar</div>
      </div>
    </div>  
  );
}

const styles = {

  title: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color : 'white',
  },

};
