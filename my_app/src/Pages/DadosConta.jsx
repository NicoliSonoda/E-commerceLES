import React from 'react';
import Cliente from '../Entities/Cliente';
import '../Styles/Forms.css';
import { useNavigate } from 'react-router-dom';

function DadosConta() {
  
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth' 
    });
  };

  const handleClick = () => {
    navigate('/cadastro');
  };

  const handleClickSenha = () => {
    navigate('/alterarSenha');
  };

  const handleClickEnderecos = () => {
    navigate('/alterarEnderecos');
  };

  const cliente = new Cliente(
  'Nicoli Sonoda', 'Feminino', '27/03/1999', '123.456.789-10', 'Celular', '11', '99999-9999',
  'Casa', 'Rua', 'Rua das Couves', '0', 'Jardim dos Eucaliptos', '0800-652', 'Brasil', 'São Paulo', 'Suzano', 'Casa do portão rosa',
  'simsoueu@gmail.com');

  
  return (
    <div className="form-cliente">
      <h1>Dados cadastrados</h1>

      <form className="form">
        <div className="section">
          <h2>Dados Pessoais</h2>

          <div className="field">
            <label>Nome</label>
            <input type="Text" value={cliente.nome} readOnly/>
          </div>

          <div className="field">
            <label>Gênero</label>
            <input type="Text" value={cliente.genero} readOnly/>
          </div>

          <div className="field">
            <label>Data de nascimento</label>
            <input type="Text" value={cliente.dtNascimento} readOnly/>
          </div>

          <div className="field">
            <label>CPF</label>
            <input type="Text" value={cliente.cpf} readOnly/>
          </div>

          <div className="field">
            <label>Tipo de telefone</label>
            <input type="Text" value={cliente.tpTelefone} readOnly/>
          </div>

          <div className="field">
            <label>DDD</label>
            <input type="Text" value={cliente.DDD} readOnly/>
          </div>

          <div className="field">
            <label>Celular</label>
            <input type="Text" value={cliente.celular} readOnly/>
          </div>
        </div>

        <div className="section">
          <h2>Endereço de Entrega</h2>

          <div className="field">
            <label>Tipo de residência</label>
            <input type="Text" value={cliente.tpResidencia} readOnly/>
          </div>

          <div className="field">
            <label>Tipo de logradouro</label>
            <input type="Text" value={cliente.tpLogradouro} readOnly/>
          </div>

          <div className="field">
            <label>Logradouro</label>
            <input type="Text" value={cliente.logradouro} readOnly/>
          </div>

          <div className="field">
            <label>Número</label>
            <input type="Text" value={cliente.numero} readOnly/>
          </div>

          <div className="field">
            <label>Bairro</label>
            <input type="Text" value={cliente.bairro} readOnly/>
          </div>

          <div className="field">
            <label>CEP</label>
            <input type="Text" value={cliente.CEP} readOnly/>
          </div>

          <div className="field">
            <label>País</label>
            <input type="Text" value={cliente.pais} readOnly/>
          </div>

          <div className="field">
            <label>Estado</label>
            <input type="Text" value={cliente.estado} readOnly/>
          </div>

          <div className="field">
            <label>Cidade</label>
            <input type="Text" value={cliente.cidade} readOnly/>
          </div>

          <div className="field">
            <label>Observações</label>
            <textarea type="Text" value={cliente.observacoes} readOnly></textarea>
          </div>
        </div>

        <div className="section">
          <h2>Endereço Residencial</h2>

          <div className="field">
            <label>Tipo de residência</label>
            <input type="Text" value={cliente.tpResidencia} readOnly/>
          </div>

          <div className="field">
            <label>Tipo de logradouro</label>
            <input type="Text" value={cliente.tpLogradouro} readOnly/>
          </div>

          <div className="field">
            <label>Logradouro</label>
            <input type="Text" value={cliente.logradouro} readOnly/>
          </div>

          <div className="field">
            <label>Número</label>
            <input type="Text" value={cliente.numero} readOnly/>
          </div>

          <div className="field">
            <label>Bairro</label>
            <input type="Text" value={cliente.bairro} readOnly/>
          </div>

          <div className="field">
            <label>CEP</label>
            <input type="Text" value={cliente.CEP} readOnly/>
          </div>

          <div className="field">
            <label>País</label>
            <input type="Text" value={cliente.pais} readOnly/>
          </div>

          <div className="field">
            <label>Estado</label>
            <input type="Text" value={cliente.estado} readOnly/>
          </div>

          <div className="field">
            <label>Cidade</label>
            <input type="Text" value={cliente.cidade} readOnly/>
          </div>

          <div className="field">
            <label>Observações</label>
            <textarea type="Text" value={cliente.observacoes} readOnly></textarea>
          </div>
        </div>

        <div className="section">
          <h2>Endereço de Cobrança</h2>

          <div className="field">
            <label>Tipo de residência</label>
            <input type="Text" value={cliente.tpResidencia} readOnly/>
          </div>

          <div className="field">
            <label>Tipo de logradouro</label>
            <input type="Text" value={cliente.tpLogradouro} readOnly/>
          </div>

          <div className="field">
            <label>Logradouro</label>
            <input type="Text" value={cliente.logradouro} readOnly/>
          </div>

          <div className="field">
            <label>Número</label>
            <input type="Text" value={cliente.numero} readOnly/>
          </div>

          <div className="field">
            <label>Bairro</label>
            <input type="Text" value={cliente.bairro} readOnly/>
          </div>

          <div className="field">
            <label>CEP</label>
            <input type="Text" value={cliente.CEP} readOnly/>
          </div>

          <div className="field">
            <label>País</label>
            <input type="Text" value={cliente.pais} readOnly/>
          </div>

          <div className="field">
            <label>Estado</label>
            <input type="Text" value={cliente.estado} readOnly/>
          </div>

          <div className="field">
            <label>Cidade</label>
            <input type="Text" value={cliente.cidade} readOnly/>
          </div>

          <div className="field">
            <label>Observações</label>
            <textarea type="Text" value={cliente.observacoes} readOnly></textarea>
          </div>
        </div>

        <div className="section">
          <h2>Login</h2>

          <div className="field">
            <label>E-mail</label>
            <input type="Text" value={cliente.email} readOnly/>
          </div>
        </div>

        <div class="form-button-container">
            <button class="form-button" onClick={handleClick}>Editar</button>
        </div>
        <div class="form-button-container">
            <button class="form-button" onClick={handleClickSenha}>Alterar senha</button>
        </div>
        <div class="form-button-container">
            <button class="form-button" onClick={handleClickEnderecos}>Alterar endereços</button>
        </div>
      </form>

      <button className="scroll-button" onClick={scrollToBottom}>Descer</button>
      <button className="scroll-button" onClick={scrollToTop}>Subir</button>
    </div>
  );
}

export default DadosConta;
