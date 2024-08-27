import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import CadastroCliente from './Pages/CadastroCliente';
import DadosConta from './Pages/DadosConta';
import EditarCadastro from './Pages/EditarCadastro';
import CadastroEnderecos from './Pages/CadastroEnderecos';
import HomeAdmin from './Pages/HomeAdmin';
import AlterarSenha from './Pages/AlterarSenha';
import AlterarEnderecos from './Pages/AlterarEnderecos';
import Conta from './Pages/Conta';

//<Route path="/dadosConta" element={<DadosConta />} />

function App() {


  return (
    <Layout>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroCliente />} />
        
        <Route path="/editarCadastro" element={<EditarCadastro/>} />
        <Route path="/cadastroEnderecos" element={<CadastroEnderecos/>} />
        <Route path="/admin" element={<HomeAdmin/>} />
        <Route path="/alterarSenha" element={<AlterarSenha/>} />
        <Route path="/alterarEnderecos" element={<AlterarEnderecos/>} />
        <Route path="/conta" element={<Conta/>} />
      </Routes>
    </Layout>
  );
}

export default App;
