import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/CadastroEnderecos.css'; 

function CadastroEnderecos() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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

  const openSuccessModal = () => {
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const handleSuccessModalOk = () => {
    setShowSuccessModal(false);
    navigate('/DadosConta');
  };

  return (
    <div className="cadastro-endereco">
      <h1>Cadastro de Endereços</h1>

      <form className="cadastro-form">
        <div className="section">
          <h2>Endereço de entrega</h2>

          <div className="field">
            <label>Tipo de residência</label>
            <select>
              <option>Selecione o tipo</option>
              <option>Casa</option>
              <option>Apartamento</option>
            </select>
          </div>

          <div className="field">
            <label>Tipo de logradouro</label>
            <select>
              <option>Selecione o tipo</option>
              <option>Rua</option>
              <option>Avenida</option>
            </select>
          </div>

          <div className="field">
            <label>Logradouro</label>
            <input type="text" placeholder="Digite o logradouro" />
          </div>

          <div className="field">
            <label>Número</label>
            <input type="text" placeholder="Digite o número" />
          </div>

          <div className="field">
            <label>Bairro</label>
            <input type="text" placeholder="Digite o bairro" />
          </div>

          <div className="field">
            <label>CEP</label>
            <input type="text" placeholder="Digite o CEP" />
          </div>

          <div className="field">
            <label>País</label>
            <select>
              <option>Selecione o país</option>
              <option>Brasil</option>
            </select>
          </div>

          <div className="field">
            <label>Estado</label>
            <select>
              <option>Selecione o estado</option>
              <option>Amapá</option>
              <option>Amazonas</option>
              <option>São Paulo</option>
            </select>
          </div>

          <div className="field">
            <label>Cidade</label>
            <select>
              <option>Selecione a cidade</option>
              <option>Mogi das Cruzes</option>
              <option>São Paulo</option>
              <option>Suzano</option>
            </select>
          </div>

          <div className="field">
            <label>Observações</label>
            <textarea placeholder="Digite sua observação"></textarea>
          </div>
        </div>

        <div className="section">
          <h2>Endereço de cobrança</h2>

          <div className="field">
            <label>Tipo de residência</label>
            <select>
              <option>Selecione o tipo</option>
              <option>Casa</option>
              <option>Apartamento</option>
            </select>
          </div>

          <div className="field">
            <label>Tipo de logradouro</label>
            <select>
              <option>Selecione o tipo</option>
              <option>Rua</option>
              <option>Avenida</option>
            </select>
          </div>

          <div className="field">
            <label>Logradouro</label>
            <input type="text" placeholder="Digite o logradouro" />
          </div>

          <div className="field">
            <label>Número</label>
            <input type="text" placeholder="Digite o número" />
          </div>

          <div className="field">
            <label>Bairro</label>
            <input type="text" placeholder="Digite o bairro" />
          </div>

          <div className="field">
            <label>CEP</label>
            <input type="text" placeholder="Digite o CEP" />
          </div>

          <div className="field">
            <label>País</label>
            <select>
              <option>Selecione o país</option>
              <option>Brasil</option>
            </select>
          </div>

          <div className="field">
            <label>Estado</label>
            <select>
              <option>Selecione o estado</option>
              <option>Amapá</option>
              <option>Amazonas</option>
              <option>São Paulo</option>
            </select>
          </div>

          <div className="field">
            <label>Cidade</label>
            <select>
              <option>Selecione a cidade</option>
              <option>Mogi das Cruzes</option>
              <option>São Paulo</option>
              <option>Suzano</option>
            </select>
          </div>

          <div className="field">
            <label>Observações</label>
            <textarea placeholder="Digite sua observação"></textarea>
          </div>
        </div>

        <div className="cadastro-button-container">
            <button className="cadastro-button" type="button" onClick={openSuccessModal}>Salvar</button>
        </div>
      </form>

      <button className="scroll-button" onClick={scrollToBottom}>Descer</button>
      <button className="scroll-button" onClick={scrollToTop}>Subir</button>

      {showSuccessModal && (
        <div className="success-modal">
          <div className="success-modal-content">
            <h2>Sucesso!</h2>
            <p>Seu cadastro foi realizado com sucesso.</p>
            <button className="success-modal-button" type="button" onClick={handleSuccessModalOk}>Ok</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CadastroEnderecos;