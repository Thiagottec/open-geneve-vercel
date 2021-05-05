import { toast } from 'materialize-css';
import React, { useState, useEffect } from 'react';
import {validaEmail, validaNome, validaCelular, validaEndereco, passwordToHash} from './Valida.js'
import {apiNewUser} from "../api/api.js"


export default function Cadastro({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [primeiroNome, setPrimeiroNome] = useState("");
  const [ultimoNome, setUltimoNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [celular, setCelular] = useState("");
  const [senha, setSenha] = useState("");
  const [backhand, setBackhand] = useState("destro");
  const [forehand, setForehand] = useState("2mãos");
  
  useEffect(() => { 
    
  },[]);
const handleActionClick = (event) =>{
  if (event.target.id === "criar"){
    const emailValid = (validaEmail(email));
    const nomeValid = validaNome(primeiroNome, ultimoNome);
    const celularValid = validaCelular(celular);
    const enderecoValid = validaEndereco(endereco);
    const passwordHash = passwordToHash(senha);
    if (emailValid && nomeValid && celularValid && enderecoValid && passwordHash){
      const dadosUser = {
          "email" : email,
          "primeiroNome": primeiroNome,
          "ultimoNome" : ultimoNome,
          "celular" : celular,
          "endereco" : endereco,
          "senha" : passwordHash,
          "backhand" : backhand,
          "forehand" : forehand
      };
      apiNewUser(dadosUser);
    } else {
      toast({html: 'Todos os campos são obrigatórios'});
    }
  } else {
    onSubmit("voltar");
  };
}

  return ( 
    <div className="row">
      <div className="container">
        <div  className="center card-panel green darken-1">
          <h6 style={styles.title}>Cadastro novo Jogador</h6>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Primeiro Nome"
                  id="primeiroNome"
                  type="text"
                  className="validate"
                  value={primeiroNome} 
                  onChange={(e) => setPrimeiroNome(e.target.value)}/>
          </div>
          <div className="input-field col s6">
            <input placeholder="Sobrenome" 
                  id="ultimoNome" 
                  type="text" 
                  className="validate" 
                  value={ultimoNome} 
                  onChange={(e) => setUltimoNome(e.target.value)}
                  required/>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="Endereço" 
                  id="endereco" 
                  type="text" 
                  className="validate" 
                  value={endereco} 
                  onChange={(e) => setEndereco(e.target.value)}
                  required/>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="E-mail"
                  id="email" 
                  type="email" 
                  className="validate" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  required/>
          </div>
          <div className="input-field col s6">
            <input placeholder="Número Celular - (XX) XXXXX-XXXX"
                  id="celphone" 
                  type="text" 
                  className="validate" 
                  value={celular} 
                  onChange={(e) => setCelular(e.target.value)}
                  required/>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="Senha"
                  id="password" 
                  type="password" 
                  className="validate" 
                  value={senha} 
                  onChange={(e) => setSenha(e.target.value)}
                  required/>
          </div>
        </div>
        <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <h6 className="flow-text">Forehand</h6>
                  <p>
                    <label>
                      <input className="with-gap" 
                              type="radio" 
                              name="forehand" 
                              value="destro"
                              onChange={() => setForehand("destor")}
                              checked/> <span>Destro</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input className="with-gap" 
                              type="radio" 
                              name="forehand" 
                              value="esquerda"
                              onChange={() => setForehand("esquerda")}/> <span>Canhoto</span>
                    </label>
                  </p>
                </div>
                <div className="col s12 m6">
                  <h6 className="flow-text">Backhand</h6>
                  <p>
                    <label>
                      <input className="with-gap" 
                             type="radio" 
                             name="backhand" 
                             onClick={() => setBackhand("1mao")}
                             value="umaMao" /> <span>Uma Mão</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input className="with-gap" 
                             type="radio" 
                             name="backhand" 
                             value="duasMaos" 
                             onClick={() => setBackhand("2maos")}
                             checked/> <span>Duas mãos</span>
                    </label>
                  </p>
                </div>
            </div>  
          </div>
        <div className="container">
          <div id="criar" className="waves-effect green darken-1 btn left"  onClick={handleActionClick}>Criar</div>
          <div id="voltar" className="waves-effect green darken-1 btn right" onClick={handleActionClick}>Voltar</div>
        </div>
    </div>
  </div>
       
  );
};

const styles = {
  title: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color : 'white',
  }
};