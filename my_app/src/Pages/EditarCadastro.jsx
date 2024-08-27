import React from 'react';
import Cliente from '../Entities/Cliente';
import '../Styles/Forms.css';
import { useNavigate } from 'react-router-dom';

function EditarCadastro() {
  
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
    navigate('/editarCadastro');
  };

  const cliente = new Cliente(
  'Nicoli Sonoda', 'Feminino', '27/03/1999', '123.456.789-10', 'Celular', '11', '99999-9999',
  'Casa', 'Rua', 'Rua das Couves', '0', 'Jardim dos Eucaliptos', '0800-652', 'Brasil', 'São Paulo', 'Suzano', 'Casa do portão rosa',
  'simsoueu@gmail.com');

  
  return (
    <div className="form-cliente">
      <h1>Editar Cadastro</h1>

      <form className="form">
        <div className="section">
          <h2>Dados Pessoais</h2>

          <div className="field">
            <label>Nome</label>
            <input type="Text" value={cliente.nome} />
          </div>

          <div className="field">
            <label>Gênero</label>
            <input type="Text" value={cliente.genero} />
          </div>

          <div className="field">
            <label>Data de nascimento</label>
            <input type="Text" value={cliente.dtNascimento} />
          </div>

          <div className="field">
            <label>CPF</label>
            <input type="Text" value={cliente.cpf} />
          </div>

          <div className="field">
            <label>Tipo de telefone</label>
            <input type="Text" value={cliente.tpTelefone} />
          </div>

          <div className="field">
            <label>DDD</label>
            <input type="Text" value={cliente.DDD} />
          </div>

          <div className="field">
            <label>Celular</label>
            <input type="Text" value={cliente.celular} />
          </div>
        </div>

        <div className="section">
          <h2>Endereço de Entrega</h2>

          <div className="field">
            <label>Tipo de residência</label>
            <input type="Text" value={cliente.tpResidencia} />
          </div>

          <div className="field">
            <label>Tipo de logradouro</label>
            <input type="Text" value={cliente.tpLogradouro} />
          </div>

          <div className="field">
            <label>Logradouro</label>
            <input type="Text" value={cliente.logradouro} />
          </div>

          <div className="field">
            <label>Número</label>
            <input type="Text" value={cliente.numero} />
          </div>

          <div className="field">
            <label>Bairro</label>
            <input type="Text" value={cliente.bairro} />
          </div>

          <div className="field">
            <label>CEP</label>
            <input type="Text" value={cliente.CEP} />
          </div>

          <div className="field">
            <label>País</label>
            <input type="Text" value={cliente.pais} />
          </div>

          <div className="field">
            <label>Estado</label>
            <input type="Text" value={cliente.estado} />
          </div>

          <div className="field">
            <label>Cidade</label>
            <input type="Text" value={cliente.cidade} />
          </div>

          <div className="field">
            <label>Observações</label>
            <textarea type="Text" value={cliente.observacoes} ></textarea>
          </div>
        </div>

        <div className="section">
          <h2>Endereço Residencial</h2>

          <div className="field">
            <label>Tipo de residência</label>
            <input type="Text" value={cliente.tpResidencia} />
          </div>

          <div className="field">
            <label>Tipo de logradouro</label>
            <input type="Text" value={cliente.tpLogradouro} />
          </div>

          <div className="field">
            <label>Logradouro</label>
            <input type="Text" value={cliente.logradouro} />
          </div>

          <div className="field">
            <label>Número</label>
            <input type="Text" value={cliente.numero} />
          </div>

          <div className="field">
            <label>Bairro</label>
            <input type="Text" value={cliente.bairro} />
          </div>

          <div className="field">
            <label>CEP</label>
            <input type="Text" value={cliente.CEP} />
          </div>

          <div className="field">
            <label>País</label>
            <input type="Text" value={cliente.pais} />
          </div>

          <div className="field">
            <label>Estado</label>
            <input type="Text" value={cliente.estado} />
          </div>

          <div className="field">
            <label>Cidade</label>
            <input type="Text" value={cliente.cidade} />
          </div>

          <div className="field">
            <label>Observações</label>
            <textarea type="Text" value={cliente.observacoes} ></textarea>
          </div>
        </div>

        <div className="section">
          <h2>Endereço de Cobrança</h2>

          <div className="field">
            <label>Tipo de residência</label>
            <input type="Text" value={cliente.tpResidencia} />
          </div>

          <div className="field">
            <label>Tipo de logradouro</label>
            <input type="Text" value={cliente.tpLogradouro} />
          </div>

          <div className="field">
            <label>Logradouro</label>
            <input type="Text" value={cliente.logradouro} />
          </div>

          <div className="field">
            <label>Número</label>
            <input type="Text" value={cliente.numero} />
          </div>

          <div className="field">
            <label>Bairro</label>
            <input type="Text" value={cliente.bairro} />
          </div>

          <div className="field">
            <label>CEP</label>
            <input type="Text" value={cliente.CEP} />
          </div>

          <div className="field">
            <label>País</label>
            <input type="Text" value={cliente.pais} />
          </div>

          <div className="field">
            <label>Estado</label>
            <input type="Text" value={cliente.estado} />
          </div>

          <div className="field">
            <label>Cidade</label>
            <input type="Text" value={cliente.cidade} />
          </div>

          <div className="field">
            <label>Observações</label>
            <textarea type="Text" value={cliente.observacoes} ></textarea>
          </div>
        </div>

        <div className="section">
          <h2>Login</h2>

          <div className="field">
            <label>E-mail</label>
            <input type="Text" value={cliente.email} />
          </div>
        </div>

        <div class="form-button-container">
            <button class="form-button" onClick={handleClick}>Salvar Alterações</button>
        </div>
      </form>

      <button className="scroll-button" onClick={scrollToBottom}>Descer</button>
      <button className="scroll-button" onClick={scrollToTop}>Subir</button>
    </div>
  );
}

export default EditarCadastro;
